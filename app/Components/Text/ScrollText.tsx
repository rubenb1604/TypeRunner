"use client"

import KeyInputComponent from "@/app/Components/KeyTracking/KeyInputComponent";

interface ScrollText {
    text: string;
}

const ScrollText:React.FC<ScrollText> = ({text}) => {

    let text_avalible:string = text;
    let text_done:string = "";

    const pull_next_char = () => {
        if (text_avalible.length === 0) {
        } else {
            let char = text_avalible.charAt(0);
            text_avalible = text_avalible.substring(1);
            text_done = text_done + char;
            console.log(text_done + "»" + text_avalible);
        }
    }

    return (
        <div>
            <ul className="flex whitespace-nowrap animate-infinite-scroll">
                <li className="mx-8">
                    <div>
                        <span className="" id="avalible">{text_avalible}</span>
                        <span className="text-red-500" id="done">{text_done}</span>
                    </div>
                </li>
            </ul>
            <KeyInputComponent text={text} onCharsDoneChange={pull_next_char} />
        </div>
    );
}

export default ScrollText;


import React from "react";
