import workersSorting from "../assets/workersSorting.png"
import cassia from "../assets/original/cassia.jpg"
import nutmeg from "../assets/original/nutmegOnly.jpg"
import cloves from "../assets/Cloves.png"
import blackPepper from "../assets/original/blackPepper.jpg"
import qualityLogo from "../assets/original/quality certified logo.png"
import gmp from "../assets/original/GMP logo.jpg"
import haccp from "../assets/original/HACCP logo.jpg"
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {useNavigate} from "react-router-dom";

function getProductCard(props: {name: string, url: string, link: string}) {
    const fullLink = "/agrimTest/product/" + props.link;
    const navigate = useNavigate();
    return <div className="w-1/4 h-64 bg-orange-600 grid grid-cols-1 grid-rows-6 rounded-lg  hover:bg-zinc-100 hover:text-orange-700">
        <div className="row-span-5">
            <img className="w-full h-full object-cover rounded-t-lg" src={props.url}/>
        </div>
        <div className="row-span-1 p-2 text-center transition duration-300 rounded-b-lg cursor-pointer" onClick={() => navigate(fullLink)}>
            {props.name}
        </div>
    </div>;
}

function getButton(props: {name: string}) {
    return <div
        className="text-center bg-orange-600 py-2 px-1 rounded-sm cursor-pointer hover:bg-orange-700 transition duration-300">
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

    return (
        <div>
            <Header/>
            <div className="h-fit w-full relative">
                <div className="h-fit rounded-lg">
                    <div className="grid grid-cols-4">
                        <div className="p-4 text-gray-900 flex flex-row items-center">
                            <div>
                                <h1 className="text-4xl">Trading & processing of Indonesian Spices in 150+
                                    countries</h1>
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
                        <div className="w-1/3 flex flex-col space-y-10">
                            <div className="px-10 pt-2 text-center text-lg">
                                <div className="text-slate-900">
                                    Present in the <span
                                    className="text-orange-600">Indonesian spice market since 2004,</span> we have
                                    acquired
                                    in-depth knowledge & expertise of Present in the Indonesian spice market
                                    since 2004.
                                    <br/>
                                    <br/>
                                    We have acquired in-depth knowledge & expertise of regional products, helping us
                                    develop
                                    an <span
                                    className="text-orange-600">international customer base of XX+ customers.</span> regional
                                    products, helping us develop an international customer base of XX+ customers.
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="w-1/3 mx-auto">
                                    {getButton({name: "About Us"})}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-900 w-full h-fit text-white flex flex-col">
                    <div className="w-full p-4 mx-auto">
                        <div className="text-center font-bold text-xl">Our Products</div>
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
                    <div className="p-4 w-full h-fit">
                        <div className="w-1/6 mx-auto">
                            {getButton({name: "More Products"})}
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-col">
                    <div className="w-full p-4 mx-auto">
                        <div className="text-center font-bold text-xl">Certifications</div>
                    </div>
                    <div className="w-11/12 h-52 grid grid-rows-1 grid-cols-3 mx-auto mb-12">
                        <div className="mx-auto"><img className="h-52 object-cover" src={qualityLogo}/></div>
                        <div className="mx-auto"><img className="h-52 object-cover" src={gmp}/></div>
                        <div className="mx-auto"><img className="h-52 object-cover" src={haccp}/></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default Home;