import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import cassia from "../assets/cassia.png"
import nutmeg from "../assets/nutmeg.png";
import cloves from "../assets/Cloves.png";
import blackPepper from "../assets/Black Pepper.png";
import {useNavigate} from "react-router-dom";

function getProductCard(props: {
    name: string,
    imageUrl: string,
    link: string}) {
    const navigate = useNavigate();
    const fullLink = "/agrimTest/product/" + props.link;
    return <div className="w-56 bg-orange-600 grid grid-cols-1 grid-rows-6 rounded-lg  hover:bg-zinc-100 hover:text-orange-700 m-2">
        <div className="row-span-5">
            <img className="w-full h-full bg-cover" src={props.imageUrl}/>
        </div>
        <div className="row-span-1 p-2 text-center transition duration-300 rounded-b-lg cursor-pointer" onClick={() => navigate(fullLink)}>
            {props.name}
        </div>
    </div>;
}

function ProductsPage() {
    return <div>
        <Header/>
        <div className="w-full text-slate-900 text-center font-bold text-4xl p-4">
            Our Products
        </div>
        <div className="flex flex-wrap text-white w-3/4 mx-auto">
            {getProductCard({name: "Cassia", imageUrl: cassia, link: "cassia"})}
            {getProductCard({name: "Nutmeg and Mace", imageUrl: nutmeg, link: "nutmeg"})}
            {getProductCard({name: "Cloves", imageUrl: cloves, link: "cloves"})}
            {getProductCard({name: "Black Pepper", imageUrl: blackPepper, link: "blackPepper"})}
            {getProductCard({name: "Cassia", imageUrl: cassia, link: "cassia"})}
            {getProductCard({name: "Cassia", imageUrl: cassia, link: "cassia"})}
            {getProductCard({name: "Cassia", imageUrl: cassia, link: "cassia"})}
            {getProductCard({name: "Cassia", imageUrl: cassia, link: "cassia"})}
        </div>
        <Footer/>
    </div>
}

export default ProductsPage;