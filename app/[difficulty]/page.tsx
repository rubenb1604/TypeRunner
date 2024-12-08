'use client';
import { useState, useEffect } from 'react';
import React from "react";
import ScrollText from "@/app/Components/Text/ScrollText";
import {getLastSegment} from "@/app/Components/Router/getlastsegment";

const PlayPage: React.FC = () => {
    const [randomItem, setRandomItem] = useState<string>("LOADING");

    const fetchRandomItem = async () => {
        try {
            let path = `/api/RandomText/` + getLastSegment()
            console.log(path);
            const response = await fetch(path);
            if (!response.ok) throw new Error('API-Antwort ist nicht OK');
            const data = await response.json();
            setRandomItem(data.item);
        } catch (error) {
            console.error('Fehler beim Abrufen des zufälligen Elements:', error);
            setRandomItem('Fehler beim Abrufen');
        }
    };

    useEffect(() => {
        fetchRandomItem();
    }, []);


    const getLvl = () => {
        switch (getLastSegment()){
            case 'easy':
                return 1;
            case 'medium':
                return 2;
            case 'hard':
                return 3;
            case 'extreme':
                return 4;
            default:
                return 1;
        }
    }



    return (
        <div className="overflow-hidden bg-neutral-600 h-screen">
            <ScrollText text={randomItem} lvl={getLvl()}/>
        </div>
    );
};

export default PlayPage;
