import StatContainer from "@/app/Components/Game/GameOver/StatContainer";
import {number} from "prop-types";

interface GameOver {
    Seconds: number;
    Letters: number;
}

const GameOver:React.FC<GameOver> = ({Seconds, Letters}) => {

    return (
        <div className="absolute w-screen h-screen top-0 flex items-center justify-center">
            <div className="h-3/4 w-2/3 border-amber-400 border-8 rounded-2xl bg-white flex items-center flex-col shadow-xl shadow-amber-400">
                <span className="font-sans mt-6 text-6xl font-extrabold">Game Over!</span>
                <div className="flex justify-between w-full pl-48 pr-48 mt-16 h-full mb-24">
                    <StatContainer Stat={Letters.toString()} text={"You typed"} text2={"Characters!"}/>
                    <StatContainer Stat={Seconds.toString()} text={"You survived"} text2={"Seconds!"}/>
                </div>
            </div>
        </div>
    );


};

export default GameOver;
