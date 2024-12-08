import Image from "next/image";
import {TypewriterEffect} from "@/app/Components/animations/TypeWriterEffect";

export default function Home() {
  return (<div className="bg-neutral-800 h-screen w-full flex items-center justify-center">
          <div className="flex flex-col justify-center items-center p-16 border-violet-600 border-8 w-2/3 gap-16 rounded-3xl">
              <TypewriterEffect texts={["Willkommen bei TypeRunner!", "Trainiere Tippen im Spiel!", "Viel Spaß!"]}/>
              <div className="flex justify-center items-center gap-16">
                  <a href={"tutorial"}
                     className="w-36 text-center text-white border-4 p-3 rounded-2xl text-xl font-bold font-sans border-violet-600 hover:text-violet-600 transition-all">TUTORIAL</a>
                  <a href={"select"}
                     className="w-36 text-center text-white border-4 p-3 rounded-2xl text-xl font-bold font-sans border-violet-600 hover:text-violet-600 transition-all">PLAY</a>
              </div>
          </div>
      </div>
  );
}
