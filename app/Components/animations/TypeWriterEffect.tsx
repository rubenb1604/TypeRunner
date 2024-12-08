"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LETTER_DELAY = 0.040;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const BOX_FADE_DURATION = 0.125;

const SWAP_DELAY_IN_MS = 5000;

export const TypewriterEffect = ({ texts }: { texts: string[] }) => {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % texts.length);
        }, SWAP_DELAY_IN_MS);

        return () => clearInterval(intervalId);
    }, [texts]);

    return (
        <p className="mb-2.5 font-light uppercase text-6xl text-center text-white">
            {texts[textIndex].split("").map((letter, i) => (
                <motion.span
                    initial={{
                        opacity: 1,
                    }}
                    animate={{
                        opacity: 0,
                    }}
                    transition={{
                        delay: FADE_DELAY,
                        duration: MAIN_FADE_DURATION,
                        ease: "easeInOut",
                    }}
                    key={`${textIndex}-${i}`}
                    className="relative"
                >
                    <motion.span
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: i * LETTER_DELAY,
                            duration: 0,
                        }}
                    >
                        {letter}
                    </motion.span>
                    <motion.span
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            delay: i * LETTER_DELAY,
                            times: [0, 0.1, 1],
                            duration: BOX_FADE_DURATION,
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-[3px] left-[1px] right-0 top-[3px] hidden"
                    />
                </motion.span>
            ))}
        </p>
    );
};
