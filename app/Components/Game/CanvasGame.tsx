"use client";

import React, { useRef, useEffect, useState } from 'react';

interface CanvasImageProps {
    triggerPlayerUp: boolean;
}


const CanvasImage:React.FC<CanvasImageProps> = ({triggerPlayerUp}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const positionY = useRef<number>(0);

    function getRandomNumber(x: number, y: number): number {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    }


    useEffect(() => {
        const img = new Image();
        img.src = 'player.png';
        img.onload = () => setImage(img);
    }, []);

    useEffect(() => {
        if (canvasRef.current && image) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                canvas.width = window.innerWidth;

                const speed = 1;
                let positionX = (canvas.width - image.width) / 2;

                const updateCanvas = () => {
                    //BLOCKS





                    if (positionY.current <= (canvas.height + image.height) / 2-1) {
                        positionY.current += speed;
                    } else {
                        positionY.current = (canvas.height + image.height) / 2;
                        console.log("GAME OVER")
                    }

                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = '#D1D5DB';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(image, positionX, positionY.current);

                    requestAnimationFrame(updateCanvas);
                };

                requestAnimationFrame(updateCanvas);


                const spawnBlock = () => {
                    console.log("TRY")
                    ctx.fillStyle = '#222'
                    ctx.strokeRect(0, 270, getRandomNumber(100, 200), canvas.height);
                }
                setInterval(spawnBlock, 3000);
            }
        }
    }, [image]);

    const playerUp = () => {
        let upperspeed:number = 30;
        if(positionY.current-upperspeed+1 >= 0){
            positionY.current -= upperspeed;
        }else{
            positionY.current = 0;
        }

        console.log(positionY.current);
    };

    useEffect(() => {
        if (triggerPlayerUp) {
            playerUp();
        }
    }, [triggerPlayerUp]);

    return (
        <div className="absolute mt-64">
            <canvas ref={canvasRef} height={390}/>
        </div>
    );
};

export default CanvasImage;
