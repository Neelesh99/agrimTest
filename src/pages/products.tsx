import cassia from "../assets/original/cassia.jpg"
import nutmeg from "../assets/original/nutmegOnly.jpg";
import mace from "../assets/original/mace.jpg"
import cloves from "../assets/Cloves.png";
import clovesStem from "../assets/original/cloveStem.jpg"
import starAnise from "../assets/original/starAnise.jpg"
import blackPepper from "../assets/original/blackPepper.jpg";
import longPepper from "../assets/original/LongPepperSwuare.jpeg"
import tumericSlices from "../assets/original/turmeric slices.png"
import galangalSlices from "../assets/original/Untitled design.png"
import {useNavigate} from "react-router-dom";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import {useEffect} from "react";

function getProductCard(props: {
    name: string,
    imageUrl: string,
    link: string}) {
    const navigate = useNavigate();
    const fullLink = "/agrimTest/product/" + props.link;
    return <div className="w-56 bg-agrim grid grid-cols-1 grid-rows-6 rounded-lg hover:bg-slate-50 hover:text-agrim m-2">
        <div className="row-span-5">
            <img className="w-full h-52 object-cover rounded-t-lg" src={props.imageUrl}/>
        </div>
        <div className="row-span-1 p-2 text-center transition duration-300 rounded-b-lg cursor-pointer" onClick={() => navigate(fullLink)}>
            {props.name}
        </div>
    </div>;
}

function ProductsPage() {

    useEffect(() => {
        window.scrollTo({ top: 0})
    }, [])

    return <div>
        <div className="w-full text-slate-900 text-center text-5xl p-4 pt-6">
            Our Products
        </div>
        <div className="flex flex-row justify-around">
            <div className="flex flex-wrap text-white w-3/4 mx-auto py-6 justify-around">
                {getProductCard({name: "Cassia", imageUrl: cassia, link: "cassia"})}
                {getProductCard({name: "Cloves", imageUrl: cloves, link: "cloves"})}
                {getProductCard({name: "Nutmeg", imageUrl: nutmeg, link: "nutmeg"})}
                {getProductCard({name: "Mace", imageUrl: mace, link: "mace"})}
                {getProductCard({name: "Cloves Stem", imageUrl: clovesStem, link: "clovesStem"})}
                {getProductCard({name: "Star Anise", imageUrl: starAnise, link: "starAnise"})}
                {getProductCard({name: "Black Pepper", imageUrl: blackPepper, link: "blackPepper"})}
                {getProductCard({name: "Long Pepper", imageUrl: longPepper, link: "longPepper"})}
                {getProductCard({name: "Tumeric Slices", imageUrl: tumericSlices, link: "tumericSlices"})}
                {getProductCard({name: "Galangal Slices", imageUrl: galangalSlices, link: "galangalSlices"})}
            </div>
        </div>
        <div className="text-slate-900 text-center text-4xl">
            Our Manufacturing Process
        </div>
        <div className="w-4/6 mx-auto">
            <div className="py-12">
                <LiteYouTubeEmbed
                    id="-aQHq6ZLDGI"
                    title="Placeholder video"
                />
            </div>
        </div>
    </div>
}

export default ProductsPage;