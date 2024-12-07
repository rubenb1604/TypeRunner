'use client';

import { useState, useEffect } from 'react';
import React from "react";
import ScrollText from "@/app/Components/Text/ScrollText";

const PlayPage: React.FC = () => {
    const [randomItem, setRandomItem] = useState<string>("LOADING");

    const fetchRandomItem = async () => {
        try {
            const response = await fetch('/api/RandomText');
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

    // Zustand prüfen
    console.log('Aktueller Zustand randomItem:', randomItem);

    return (
        <div className="overflow-hidden bg-neutral-600 h-screen">
            <ScrollText text={randomItem} />
            <button
                onClick={fetchRandomItem}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg"
            >
                Neues Element abrufen
            </button>
        </div>
    );
};

export default PlayPage;
