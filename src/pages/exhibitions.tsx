import sial from "../assets/original/SIAL-logo-1.png"
import gulffood from "../assets/original/Gulfood.png"
import anuga from "../assets/original/anuga-logo-vector.png"
import ift from "../assets/original/IFT-1920x1080-1.jpg"
import thaifex from "../assets/original/images.png"
import {useEffect} from "react";

function getShow(location: string, imgUrl: string, dates: string) {
    return <div className="w-1/4 flex flex-col h-64">
        <img className="w-full rounded-md object-contain mb-4 max-h-40" src={imgUrl}/>
        <div className="font-bold text-center">{location}</div>
        <div className="text-center">{dates}</div>
    </div>
}

function Exhibitions() {

    useEffect(() => {
        window.scrollTo({ top: 0})
    }, [])

    return <div>
        <div className="w-full text-slate-900 text-center text-5xl p-4 pt-6">
            Trade Shows we exhibit at
        </div>
        <div className="w-full flex flex-row justify-between mt-12">
            {getShow("Paris, France", sial, "19 -23 October 2024")}
            {getShow("Dubai, UAE", gulffood, "17 - 21 February 2025")}
            {getShow("Cologne, Germany", anuga, "4 - 8 October 2025")}
        </div>
        <div className="w-full flex flex-row justify-around mb-12">
            {getShow("Chicago, USA", ift, "19 -23 October 2024")}
            {getShow("Bangkok, Thailand", thaifex, "17 - 21 February 2025")}
        </div>
    </div>
}

export default Exhibitions;