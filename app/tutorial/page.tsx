import Image from "next/image";
import {TypewriterEffect} from "@/app/Components/animations/TypeWriterEffect";

export default function Home() {
    return (<div className="bg-neutral-800 h-screen w-full flex items-center justify-center flex-col gap-16 ">
            <div className="flex flex-col items-center gap-16 p-16 border-violet-600 border-8 rounded-3xl w-2/3">
                <TypewriterEffect texts={["Tutorial zu TypeRunner", "v1.0.3 - 2024"]}/>
                <span className="text-white font-sans text-2xl text-center">Im Oberen Bereich siehst du einen Text, welchen du tippen muss. Solltest du den
                    nächsten Buchstaben korrekt schreiben, spring dein Charakter im unteren Bereich ein Stückchen nach oben.
                    Tippe im richtigen Moment genug Buchstaben, um die Lücken zu überwinden! Aber Achtung, sind keine Buchstaben mehr da,
                    kannst du nicht mehr springen! Das Ziel ist es, oben auf 100% zu kommen!</span>

                <div className="flex justify-center gap-8 items-end">
                    <video src={"/Explain.mp4"} width={720} controls={true} className="border-4 border-violet-600"></video>
                    <a href={"/"}
                       className="h-fit w-36 text-center text-white border-4 p-3 rounded-2xl text-xl font-bold font-sans border-violet-600 hover:text-violet-600 transition-all">HOME</a>
                </div>

            </div>
        </div>
    );
}
