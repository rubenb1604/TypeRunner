"use client";

import React, { useRef, useEffect, useState } from 'react';
import GameOver from "@/app/Components/Game/GameOver/GameOver";

interface CanvasImageProps {
    triggerPlayerUp: boolean;
    onTrigger: () => void;
}

const CanvasImage: React.FC<CanvasImageProps> = ({ triggerPlayerUp, onTrigger}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [platformImage, setPlatformImage] = useState<HTMLImageElement | null>(null);
    const positionY = useRef<number>(0);
    const positionX = useRef<number>(0);
    const blocks = useRef<any[]>([]);
    const isFalling = useRef<boolean>(true);
    const isRunning = useRef<boolean>(true);




    //infra
    function getRandomNumber(x: number, y: number): number {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    }

    function delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function executeWithDelay(callback: () => void, times: number, delayMs: number) {
        for (let i = 0; i < times; i++) {
            callback();
            await delay(delayMs);
        }
    }


    //game
    useEffect(() => {
        const img = new Image();
        img.src = 'player.png';
        img.onload = () => setImage(img);

        const platformImg = new Image();
        platformImg.src = 'platform.png';
        platformImg.onload = () => setPlatformImage(platformImg);
    }, []);

    const checkCollision = () => {
        const tolerance = 0;

        for (let block of blocks.current) {
            if (
                positionY.current + image!.height <= block.y + tolerance &&
                positionY.current + image!.height + tolerance >= block.y &&
                block.x < positionX.current + image!.width &&
                block.x + block.width > positionX.current
            ) {
                positionY.current = block.y - image!.height;
                isFalling.current = false;
                return;
            }

            if (
                positionX.current + image!.width >= block.x &&
                positionX.current <= block.x + block.width &&
                positionY.current + image!.height > block.y &&
                positionY.current < block.y + block.height
            ) {
                isRunning.current = false;
                onTrigger();
                return;
            }
        }

        isFalling.current = true;
    };

    useEffect(() => {
        if (canvasRef.current && image && platformImage) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                canvas.width = window.innerWidth;
                canvas.height = 390;

                const speed = 1;
                let positionX = (canvas.width - image.width) / 2;

                blocks.current.push({ x: 0, y: 270, width: canvas.width * 2, height: canvas.height });

                const updateCanvas = () => {
                    if (isRunning.current) {
                        if (isFalling.current) {
                            if (positionY.current <= (canvas.height + image.height) / 2 - 1) {
                                positionY.current += speed;
                            } else {
                                positionY.current = (canvas.height + image.height) / 2;
                                isRunning.current = false;
                                onTrigger();
                            }
                        }

                        checkCollision();

                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.fillStyle = '#525252';
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(image, 0, positionY.current);

                        blocks.current.forEach((block, index) => {
                            if (block.x + block.width < 0) {
                                blocks.current.splice(index, 1);
                            }
                            block.x -= 3;
                            ctx.drawImage(platformImage, block.x, block.y, block.width, block.height);
                        });

                        requestAnimationFrame(updateCanvas);
                    }
                };

                requestAnimationFrame(updateCanvas);

                const spawnBlock = () => {
                    if (blocks.current.length > 20) return;
                    let nbr:number = getRandomNumber(500, 1500);
                    const blockWidth = nbr;
                    const blockY = 270;
                    blocks.current.push({ x: canvas.width, y: blockY, width: blockWidth, height: canvas.height });
                };

                setInterval(spawnBlock, 3000);
            }
        }
    }, [image, platformImage]);

    const playerUp = () => {
        console.log("UP");
        let upperspeed: number = 40;

        executeWithDelay(() => {
            if(positionY.current > 1){
                positionY.current -= upperspeed/10;
            }else{
                positionY.current = 0;
            }


        }, 10, 10);
    };

    useEffect(() => {
        if (triggerPlayerUp) {
            playerUp();
        }
    }, [triggerPlayerUp]);

    return (
            <canvas className="mt-64" ref={canvasRef} height={390}/>
    );
};

export default CanvasImage;
