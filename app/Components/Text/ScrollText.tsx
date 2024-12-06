"use client";

import React, { useEffect, useState, useCallback } from "react";
import { trackKeyInputs } from "@/app/Components/KeyTracking/KeyInputTracker";
import CanvasImage from "@/app/Components/Game/CanvasGame";

interface ScrollTextProps {
    text: string;
}

const ScrollText: React.FC<ScrollTextProps> = ({ text }) => {
    const [textAvailable, setTextAvailable] = useState<string>(text);
    const [textDone, setTextDone] = useState<string>("");
    const [triggerPlayerUp, setTriggerPlayerUp] = useState(false);

    const pullNextChar = useCallback(() => {
        if (textAvailable.length > 0) {
            const char = textAvailable.charAt(0);
            setTextAvailable((prev) => prev.substring(1));
            setTextDone((prev) => prev + char);
            setTriggerPlayerUp(true);
            setTimeout(() => setTriggerPlayerUp(false), 20);
        }
    }, [textAvailable]);

    function replaceToUnderscore(input: string): string {
        return input.replace(/ /g, ' ');
    }

    return (
        <div>
            <ul className="flex whitespace-nowrap text-8xl mt-64 font-sans">
                <li className="">
                    <div id="CONSOLEBACKGROUND" className="bg-neutral-800 w-screen h-64 absolute mt-[-4rem]"></div>
                    <div className="flex w-full bg-neutral-800">
                        <div className="text-blue-500 text-right w-[500%] absolute mx-[-470%]" id="done">
                            {replaceToUnderscore(textDone)}
                        </div>
                        <div className="absolute first-letter:text-amber-300 ml-[30%] text-white" id="available">
                            {replaceToUnderscore(textAvailable)}
                        </div>
                    </div>
                </li>
            </ul>
            <KeyInputPage text={textAvailable} onCharMatch={pullNextChar}/>
            <div className="fixed">
                <CanvasImage triggerPlayerUp={triggerPlayerUp}/>

            </div>
        </div>
    );


};

interface KeyProps {
    text: string;
    onCharMatch: () => void;
}

const KeyInputPage: React.FC<KeyProps> = ({ text, onCharMatch }) => {
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
        <div>
            {/*<p>Characters: {text.length === 0 ? "All done!" : `Remaining: ${text.length}`}</p>*/}
        </div>
    );
};

export default ScrollText;
