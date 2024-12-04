import React from "react";
import ScrollText from "@/app/Components/Text/ScrollText";
import KeyInputComponent from "@/app/Components/KeyTracking/KeyInputComponent";

const PlayPage: React.FC = () => {
    const text:string = " Kevin Chromik Mini Hackathon 2.0 Project by Ruben 2024 v3";

    return (
        <div className="overflow-hidden">
            <ScrollText text={text}/>
        </div>
    );
};

export default PlayPage;
