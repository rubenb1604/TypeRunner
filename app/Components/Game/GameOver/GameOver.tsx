import StatContainer from "@/app/Components/Game/GameOver/StatContainer";
import {number} from "prop-types";

interface GameOver {
    Seconds: number;
    Letters: number;
}

const reload = () => {

    window.location.reload();

}

const GameOver:React.FC<GameOver> = ({Seconds, Letters}) => {

    return (
        <div className="absolute w-screen h-screen top-0 flex justify-center items-center">
            <div className="h-3/4 w-2/3 border-violet-600 border-8 rounded-2xl flex items-center flex-col">
                <span className="font-sans mt-6 text-6xl font-extrabold text-white">Game Over!</span>
                <div className="flex justify-between w-full pl-48 pr-48 mt-16 h-full mb-52">
                    <StatContainer Stat={Letters.toString()} text={"You typed"} text2={"Characters!"}/>
                    <StatContainer Stat={Seconds.toString()} text={"You completed"} text2={"Percent!"}/>
                </div>
                <div className="flex justify-between w-1/2">
                    <button className="hover:bg-neutral-600 p-2 pl-8 pr-8 rounded-2xl border-violet-600 border-4 mb-12 text-white font-sans text-2xl"
                       onClick={reload}>Play Again</button>
                    <a className="hover:bg-neutral-600 p-2 pl-8 pr-8 rounded-2xl border-violet-600 border-4 mb-12 text-white font-sans text-2xl"
                       href={"/"}>Home</a>
                </div>
            </div>
        </div>
    );


};

export default GameOver;
