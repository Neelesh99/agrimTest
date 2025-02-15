import workersSorting from "../assets/workersSorting.jpg"
import cassia from "../assets/original/cassia.jpg"
import nutmeg from "../assets/original/nutmeg.jpg"
import cloves from "../assets/Cloves.png"
import blackPepper from "../assets/original/blackPepper.jpg"
import qualityLogo from "../assets/original/TQSCI.jpeg"
import gmp from "../assets/original/gmp.jpeg"
import haccp from "../assets/original/haccp.jpeg"
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function getProductCard(props: {name: string, url: string, link: string}) {
    const fullLink = "/agrimTest/product/" + props.link;
    const navigate = useNavigate();
    return <div className="w-1/4 h-64 bg-agrimDark grid grid-cols-1 grid-rows-6 rounded-3xl hover:bg-agrimdarkgreen transition duration-300">
        <div className="row-span-5">
            <img className="w-full h-full object-cover rounded-t-3xl" src={props.url}/>
        </div>
        <div className="row-span-1 p-2 text-center transition duration-300 rounded-b-lg cursor-pointer" onClick={() => navigate(fullLink)}>
            {props.name}
        </div>
    </div>;
}

function getButton(props: {name: string, link: string}) {
    const fullLink = "/agrimTest/" + props.link;
    const navigate = useNavigate();
    return <div
        className="text-center text-white bg-agrim py-2 px-6 rounded-full cursor-pointer hover:bg-agrimdarkgreen transition duration-300"
        onClick={() => navigate(fullLink)}>
        {props.name}
    </div>;
}

function Home() {

    useEffect(() => {
        window.scrollTo({ top: 0})
    }, [])

    return (
        <div>
            <div className="h-fit w-full">
                <div className="h-fit rounded-lg">
                    <div className="rounded-xl h-full w-screen flex flex-row">
                        {/*<img className="w-fit bg-cover " src={frontImage}/>*/}
                        <div className="bg-[url('assets/original/coverImage.jpg')] bg-cover bg-no-repeat bg-center w-screen h-[70vh] absolute left-0">
                            <div className="flex h-full w-screen items-center justify-items-center">
                                <div className="flex flex-col mx-auto items-center justify-items-center w-full space-y-4">
                                    <div className="w-3/5 text-white font-bold text-6xl text-center">
                                        Manufacturer and supplier of spices and coconut ingredients from Indonesia
                                    </div>
                                    <div className="flex flex-row h-full mx-auto space-x-2">
                                        {getButton({name: "About Us", link: "aboutUs"})}
                                        {getButton({name: "Our Products", link: "products"})}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit mt-[70vh]">
                    <div className="py-10 flex flex-row space-x-12 w-full">
                        <div className="w-1/2 rounded-xl">
                            <img className="w-full object-cover h-80 rounded-xl" src={workersSorting}/>
                        </div>
                        <div className="w-1/2 flex flex-col justify-center items-start pl-32 space-y-10">
                            <div className="flex flex-col">
                                <div className="text-3xl text-slate-900">
                                    Agrim PTE LTD
                                </div>
                                <div className="h-1 bg-agrim w-48 my-1 rounded-full">

                                </div>
                            </div>
                            <div className="text-slate-900 text-left text-xl">
                                Present in the Indonesian spice market since 2004, we have acquired in-depth knowledge and expertise in regional products,
                                enabling us to establish a global customer base in 80+ countries.
                            </div>
                            <div className="flex w-full justify-start">
                                <div className="w-1/3">
                                    {getButton({name: "About Us", link: "aboutUs"})}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-darkness w-full h-[60vh] text-white flex flex-col py-4 absolute left-0">
                    <div className="w-full pb-8 pt-4 mx-auto flex flex-col">
                        <div className="text-center  text-3xl">Our Products</div>
                        <div className="text-center text-lg mt-4">We are experts in processing, trading and exporting spices</div>
                    </div>
                    <div className="w-full">
                        <div className="mx-auto w-4/6">
                            <div className="flex flex-row space-x-10 w-full">
                                {getProductCard({name: "Cassia", url: cassia, link: "cassia"})}
                                {getProductCard({name: "Cloves", url: cloves, link: "cloves"})}
                                {getProductCard({name: "Nutmeg", url: nutmeg, link: "nutmeg"})}
                                {getProductCard({name: "Black Pepper", url: blackPepper, link: "blackPepper"})}
                            </div>
                        </div>
                    </div>
                    <div className="p-6 w-full h-fit">
                        <div className="w-1/6 mx-auto">
                            {getButton({name: "More Products", link: "products"})}
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-col mt-[60vh]">
                    <div className="w-full p-4 mx-auto flex flex-col mt-4 space-y-4">
                        <div className="flex flex-col mx-auto">
                            <div className="text-center text-3xl">Certifications</div>
                            <div className="h-1 bg-agrim w-44 my-1 rounded-full">

                            </div>
                        </div>
                        <div className="text-center text-xl">Our factory is accredited with ISO-9001, HACCP, GMP Certifications</div>
                    </div>
                    <div className="w-11/12 h-52 grid grid-rows-1 grid-cols-3 mx-auto mb-12 mt-4">
                        <div className="mx-auto"><img className="h-52 object-cover" src={gmp}/></div>
                        <div className="mx-auto"><img className="h-52 object-cover" src={haccp}/></div>
                        <div className="mx-auto"><img className="h-52 object-cover" src={qualityLogo}/></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;