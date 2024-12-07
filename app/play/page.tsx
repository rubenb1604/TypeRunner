import React from "react";
import ScrollText from "@/app/Components/Text/ScrollText";
import CanvasImage from "@/app/Components/Game/CanvasGame";
import GameOver from "@/app/Components/Game/GameOver/GameOver";

const PlayPage: React.FC = () => {
    const text:string = "Das ist ein Test zu diesem tollen Programm.";

    return (
        <div className="overflow-hidden bg-neutral-600 h-screen">
            <ScrollText text={text}/>
        </div>
    );
};

export default PlayPage;
