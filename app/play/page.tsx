import React from "react";
import ScrollText from "@/app/Components/Text/ScrollText";
import CanvasImage from "@/app/Components/Game/CanvasGame";

const PlayPage: React.FC = () => {
    const text:string = "Das ist ein Test zu dem Kevin Chromik Mini Hackathon. Ich bin gerade am Code und höre Musik. toll.";

    return (
        <div className="overflow-hidden">
            <ScrollText text={text}/>
        </div>
    );
};

export default PlayPage;
