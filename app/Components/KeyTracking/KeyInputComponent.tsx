"use client"

import React, { useEffect, useState } from "react";
import { trackKeyInputs } from "@/app/Components/KeyTracking/KeyInputTracker";

interface Props {
    text: string;
    onCharsDoneChange?: (charsDone: number) => void;
}

const KeyInputPage: React.FC<Props> = ({ text, onCharsDoneChange }) => {
    const [useText, setUseText] = useState<string>(text);
    const [charsDone, setCharsDone] = useState<number>(0);

    useEffect(() => {
        const cleanup = trackKeyInputs((key, isPressed) => {
            if (isPressed) {
                console.log(`${key} key is pressed.`);

                if (useText.length === 0) {
                    console.log("No Char remaining");
                } else {
                    if (useText.charAt(0) === key) {
                        console.log("true");
                        setUseText(useText.substring(1));
                        setCharsDone((prevCharsDone) => prevCharsDone + 1);
                    }
                }
            }
        });
        if (onCharsDoneChange) {
            onCharsDoneChange(charsDone);
        }

        return () => {
            cleanup();
        };
    }, [useText, charsDone, onCharsDoneChange]);

    return (
        <div>
            <p>Characters Done: {charsDone}</p>
        </div>
    );
};

export default KeyInputPage;
