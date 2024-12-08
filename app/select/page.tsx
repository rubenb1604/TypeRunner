import Image from "next/image";
import {TypewriterEffect} from "@/app/Components/animations/TypeWriterEffect";

export default function Home() {
    return (<div className="bg-neutral-800 h-screen w-full flex items-center justify-center flex-col gap-16 ">
            <div className="flex flex-col items-center gap-16 p-16 border-violet-600 border-8 rounded-3xl w-2/3">
                <TypewriterEffect texts={["Wähle eine Schwierigkeit!", "Easy - Überlebe 45 Sekunden", "Medium - Überlebe 60 Sekunden", "Hard - Überlebe 90 Sekunden", "Extreme - Überlebe 120 Sekunden"]}/>
                <div className="flex justify-center items-center gap-16">
                    <a href={"easy"}
                       className="w-36 text-center text-white border-4 p-3 rounded-2xl text-xl font-bold font-sans border-violet-600 hover:text-violet-600 transition-all">EASY</a>
                    <a href={"medium"}
                       className="w-36 text-center text-white border-4 p-3 rounded-2xl text-xl font-bold font-sans border-violet-600 hover:text-violet-600 transition-all">MEDIUM</a>
                    <a href={"hard"}
                       className="w-36 text-center text-white border-4 p-3 rounded-2xl text-xl font-bold font-sans border-violet-600 hover:text-violet-600 transition-all">HARD</a>
                    <a href={"extreme"}
                       className="w-36 text-center text-white border-4 p-3 rounded-2xl text-xl font-bold font-sans border-violet-600 hover:text-violet-600 transition-all">EXTREME</a>
                    <a href={"/"}
                       className="w-36 text-center text-white border-4 p-3 rounded-2xl text-xl font-bold font-sans border-violet-600 hover:text-violet-600 transition-all">HOME</a>
                </div>
            </div>
        </div>
    );
}
