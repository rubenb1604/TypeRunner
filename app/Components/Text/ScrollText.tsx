"use client";

import React, { useEffect, useState, useCallback } from "react";
import { trackKeyInputs } from "@/app/Components/KeyTracking/KeyInputTracker";
import GameOver from "@/app/Components/Game/GameOver/GameOver";
import Completed from "@/app/Components/Game/Completed/Completed";
import CanvasImage from "@/app/Components/Game/CanvasGame";

interface ScrollTextProps {
    text: string;
    lvl:number;
}

const ScrollText: React.FC<ScrollTextProps> = ({ text, lvl }) => {
    const [textAvailable, setTextAvailable] = useState<string>(text);
    const [textDone, setTextDone] = useState<string>("");
    const [triggerPlayerUp, setTriggerPlayerUp] = useState(false);
    const [GameOverState, setGameOverState] = useState(false);
    const [Letters, setLetters] = useState<number>(0);
    const [Seconds, setSeconds] = useState<number>(0);

    let Goal:number;
    switch (lvl){
        case 1:
            Goal = 45;
            break;
        case 2:
            Goal = 60;
            break;
        case 3:
            Goal = 90;
            break;
        case 4:
            Goal = 120;
            break;
        default:
            Goal = 1;
            break;
    }

    useEffect(() => {
        setTextAvailable(text);
    }, [text]);



    useEffect(() => {
        if (!GameOverState) {
            const interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [GameOverState]);

    const interval = setInterval(() => {
        if(Seconds >= Goal-1){
            setGameOverState(true);
        }
    }, 1000);


    const pullNextChar = useCallback(() => {
        if (textAvailable.length > 0) {
            setLetters(Letters + 1);
            const char = textAvailable.charAt(0);
            setTextAvailable((prev) => prev.substring(1));
            setTextDone((prev) => prev + char);
            setTriggerPlayerUp(true);
            setTimeout(() => setTriggerPlayerUp(false), 20);
        }
    }, [textAvailable]);

    const triggerGameOver = () => {
        setGameOverState(true);
    }

    function replaceToUnderscore(input: string): string {
        return input.replace(/ /g, '█');
        // 
    }


    return (
        <div className="bg-neutral-800 h-full">
            {!GameOverState && (
                <div className="">
                    <span className="text-2xl text-neutral-300">TEXTE SIND AI GENERIERT.</span>
                    <div className="flex justify-center w-full"><span
                        className="text-4xl text-white font-bold">{Math.round(Seconds / Goal * 100)}%</span></div>
                    <ul className="flex whitespace-nowrap text-8xl mt-64 font-sans">
                        <li className="">
                            <div id="CONSOLEBACKGROUND"
                                 className="bg-neutral-800 h-64 absolute mt-[-4rem] border-violet-600 border-8 w-[120%] ml-[-1rem]"></div>
                            <div className="flex w-full bg-neutral-800">
                                <div className="text-blue-500 text-right w-[500%] absolute mx-[-470%]" id="done">
                                    {replaceToUnderscore(textDone)}
                                </div>
                                <div className="absolute first-letter:text-amber-300 ml-[30%] text-white"
                                     id="available">
                                    {replaceToUnderscore(textAvailable)}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
            <div className="">
                <KeyInputPage text={textAvailable} onCharMatch={pullNextChar}/>
                {GameOverState  && Seconds <= Goal && (
                    <GameOver Letters={Letters} Seconds={Math.round(Seconds / Goal * 100)}/>
                )}
                {Seconds >= Goal && (
                    <Completed Letters={Letters}/>
                )}
                {!GameOverState && (
                    <div className="fixed">
                        <CanvasImage triggerPlayerUp={triggerPlayerUp} onTrigger={triggerGameOver} lvl={lvl}/>
                    </div>
                )}
            </div>
        </div>
    );


};

interface KeyProps {
    text: string;
    onCharMatch: () => void;
}

const KeyInputPage: React.FC<KeyProps> = ({text, onCharMatch}) => {
    useEffect(() => {
        const cleanup = trackKeyInputs((key, isPressed) => {
            if (isPressed && text.length > 0) {
                if (text.charAt(0) === key) {
                    onCharMatch();
                }
            }
        });




        return () => {
            cleanup();
        };
    }, [text, onCharMatch]);

    return (
        <div></div>
    );
};

export default ScrollText;
