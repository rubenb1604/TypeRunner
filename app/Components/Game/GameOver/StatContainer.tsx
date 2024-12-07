interface Card {
    Stat:string;
    text:string;
    text2:string;
}


const StatCard:React.FC<Card> = ({Stat, text, text2}) => {

    return (
        <div className="w-2/5 flex flex-col items-center border-violet-600 border-8 rounded-2xl h-full">
            <span className="m-4 text-3xl font-sans font-bold text-violet-600">{text}</span>
            <span className="text-6xl font-sans font-extrabold text-white">{Stat}</span>
            <span className="m-4 text-3xl font-sans font-bold text-violet-600">{text2}</span>
        </div>
    );


};

export default StatCard;
