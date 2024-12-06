"use client";

import React, { useRef, useEffect, useState } from 'react';

interface CanvasImageProps {
    triggerPlayerUp: boolean;
}

const CanvasImage: React.FC<CanvasImageProps> = ({ triggerPlayerUp }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [platformImage, setPlatformImage] = useState<HTMLImageElement | null>(null);
    const positionY = useRef<number>(0);
    const positionX = useRef<number>(0);
    const blocks = useRef<any[]>([]);
    const isFalling = useRef<boolean>(true);

    function getRandomNumber(x: number, y: number): number {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    }

    useEffect(() => {
        const img = new Image();
        img.src = 'player.png';
        img.onload = () => setImage(img);

        const platformImg = new Image();
        platformImg.src = 'platform.png';
        platformImg.onload = () => setPlatformImage(platformImg);
    }, []);

    const checkCollision = () => {
        const tolerance = 3;  // Toleranz in Pixeln

        for (let block of blocks.current) {
            // Kollision mit dem Blockboden (berühren)
            if (
                positionY.current + image!.height <= block.y + tolerance &&
                positionY.current + image!.height + tolerance >= block.y &&
                block.x < positionX.current + image!.width &&
                block.x + block.width > positionX.current
            ) {
                positionY.current = block.y - image!.height; // Spieler wird auf den Block gesetzt
                isFalling.current = false;
                return;
            }

            // Kollision mit der Blockvorderseite (prüft, ob der Spieler gegen den Block knallt)
            if (
                positionX.current + image!.width >= block.x && // Spieler berührt den Block von vorne
                positionX.current <= block.x + block.width &&
                positionY.current + image!.height > block.y &&
                positionY.current < block.y + block.height
            ) {
                positionY.current = 0;
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

                blocks.current.push({ x: 0, y: 270, width: canvas.width*2, height: canvas.height });

                const updateCanvas = () => {
                    if (isFalling.current) {
                        if (positionY.current <= (canvas.height + image.height) / 2 - 1) {
                            positionY.current += speed;
                        } else {
                            positionY.current = (canvas.height + image.height) / 2;
                            positionY.current = 0;
                        }
                    }

                    checkCollision(); // Kollision mit den Blöcken überprüfen

                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = '#D1D5DB';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(image, 0, positionY.current);

                    blocks.current.forEach((block, index) => {
                        if (block.x + block.width < 0) {
                            blocks.current.splice(index, 1); // Entfernt den Block, wenn er aus dem Canvas verschwindet
                        }
                        block.x -= 3;
                        ctx.drawImage(platformImage, block.x, block.y, block.width, block.height);
                    });

                    requestAnimationFrame(updateCanvas);
                };

                requestAnimationFrame(updateCanvas);

                const spawnBlock = () => {
                    let nbr: number = getRandomNumber(500, 1500);
                    const blockWidth = nbr;
                    const blockY = 270;
                    blocks.current.push({ x: canvas.width, y: blockY, width: blockWidth, height: canvas.height });
                };

                setInterval(spawnBlock, 3000);
            }
        }
    }, [image, platformImage]);

    const playerUp = () => {
        let upperspeed: number = 50;
        if (positionY.current - upperspeed + 1 >= 0) {
            positionY.current -= upperspeed;
        } else {
            positionY.current = 0;
        }
    };

    useEffect(() => {
        if (triggerPlayerUp) {
            playerUp();
        }
    }, [triggerPlayerUp]);

    return (
        <div className="absolute mt-64">
            <canvas ref={canvasRef} height={390}/>

            <button
                onClick={playerUp}
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2 p-2 bg-blue-500 text-white rounded"
            >
                Player Up
            </button>
        </div>
    );
};

export default CanvasImage;
