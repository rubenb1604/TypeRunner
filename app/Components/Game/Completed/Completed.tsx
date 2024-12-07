import StatCard from "@/app/Components/Game/GameOver/StatContainer";

interface Card {
    Letters:number;
}

const Completed:React.FC<Card> = ({Letters}) => {

    return (
        <div className="absolute w-screen h-screen top-0 flex items-center justify-center bg-neutral-800 ">
            <div className="h-3/4 w-2/3 border-violet-600 border-8 rounded-2xl flex items-center flex-col ">
                <span className="font-sans mt-6 text-6xl font-extrabold text-white">Completed!</span>
                <div className="flex justify-center w-full pl-48 pr-48 mt-16 h-full mb-24">
                    <StatCard Stat={Letters.toString()} text={"You Typed"} text2={"Characters!"} />
                </div>
                <a className="hover:bg-neutral-600 p-2 pl-8 pr-8 rounded-2xl border-violet-600 border-4 mb-12 text-white font-sans text-2xl" href={"/"}>Home</a>
            </div>
        </div>
    );


};

export default Completed;
