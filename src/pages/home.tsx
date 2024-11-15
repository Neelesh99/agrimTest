import workersSorting from "../assets/workersSorting.png"
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
    return <div className="w-1/4 h-64 bg-agrimDark grid grid-cols-1 grid-rows-6 rounded-lg  hover:bg-lightness hover:text-agrimDark">
        <div className="row-span-5">
            <img className="w-full h-full object-cover rounded-t-lg" src={props.url}/>
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
        className="text-center bg-agrim py-3 px-1 rounded-md cursor-pointer hover:bg-agrimDark transition duration-300"
        onClick={() => navigate(fullLink)}>
        {props.name}
    </div>;
}

function Home() {

    let backgrounClassNames = `w-full h-screen max-h-[600px] relative
    overflow-hidden
    block
    z-10

    bg-[url('assets/original/coverImage.jpg')]
    bg-cover
    bg-no-repeat
    bg-center

    before:content-['']
    before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-r
    before:from-white
    before:to-white/0
    before:w-1/6
    before:z-[-5]`

    useEffect(() => {
        window.scrollTo({ top: 0})
    }, [])

    return (
        <div>
            <div className="h-fit w-full relative">
                <div className="h-fit rounded-lg">
                    <div className="grid grid-cols-4">
                        <div className="p-4 text-gray-900 flex flex-row items-center">
                            <div>
                                <h1 className="text-2xl lg:text-4xl 2xl:text-6xl">Manufacturer and supplier of
                                    spices and coconut ingredients from Indonesia & Vietnam</h1>
                            </div>
                        </div>
                        <div className="rounded-xl h-full w-full flex flex-row col-span-3">
                            {/*<img className="w-fit bg-cover " src={frontImage}/>*/}
                            <div className={backgrounClassNames}></div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit">
                    <div className="py-10 flex flex-row text-white">
                        <div className="w-2/3 rounded-r-xl">
                            <img className="w-full h-full" src={workersSorting}/>
                        </div>
                        <div className="w-1/3 flex flex-col justify-center space-y-10">
                            <div className="px-10 pt-2 text-center text-xl">
                                <div className="text-slate-900">
                                    Present in the Indonesian spice market since 2004, we have acquired
                                    in-depth knowledge and expertise in regional products, enabling us to establish a global customer
                                    base in 60+ countries
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="w-1/3 mx-auto">
                                    {getButton({name: "Learn more about us", link: "contactUs"})}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-darkness w-full h-fit text-white flex flex-col py-4">
                    <div className="w-full pb-8 pt-4 mx-auto flex flex-col">
                        <div className="text-center  text-3xl">Our Products</div>
                        <div className="text-center text-xl">We are experts in processing, trading and exporting spices</div>
                    </div>
                    <div className="w-full">
                        <div className="mx-auto w-5/6">
                            <div className="flex flex-row space-x-10 w-full">
                                {getProductCard({name: "Cassia", url: cassia, link: "cassia"})}
                                {getProductCard({name: "Nutmeg", url: nutmeg, link: "nutmeg"})}
                                {getProductCard({name: "Cloves", url: cloves, link: "cloves"})}
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
                <div className="w-full h-fit flex flex-col">
                    <div className="w-full p-4 mx-auto flex flex-col">
                        <div className="text-center text-3xl">Certifications</div>
                        <div className="text-center text-xl">Our factory is accredited with ISO-9001, HACCP, GMP Certifications</div>
                    </div>
                    <div className="w-11/12 h-52 grid grid-rows-1 grid-cols-3 mx-auto mb-12">
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