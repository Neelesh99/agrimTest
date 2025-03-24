import companyPic from "../assets/companyPic.png"
import tick from "../assets/tick.png"
import stockPrice from "../assets/stockPrice.png"
import shield from "../assets/shield.png"
import leaves from "../assets/leaves.png"
import workersWorking from "../assets/original/workersWorking.jpeg"
import handouts from "../assets/original/handout.jpeg"
import multitasker from "../assets/original/icon-multitasker.png"
import gloves from "../assets/original/icon-gloves.png"
import lab from "../assets/original/icon-lab.png"
import factory from "../assets/original/icon-factory.png"
import {useEffect} from "react";
import gmp from "../assets/original/gmp.jpeg";
import haccp from "../assets/original/haccp.jpeg";
import qualityLogo from "../assets/original/TQSCI.jpeg";
function AboutUsPage() {

    useEffect(() => {
        window.scrollTo({ top: 0})
    }, [])

    return <div className="flex flex-col">
        <div className="w-full text-slate-900 text-center text-3xl p-4 mb-6">
            About Us
        </div>
        <div className="flex flex-col space-y-4 mx-auto w-full pb-4">
            <div className="grid grid-rows-1 grid-cols-8 flex-row w-full gap-8">
                <div className="col-span-5">
                    <img src={companyPic} className="w-full rounded-2xl"/>
                </div>
                <div className="col-span-3">
                    <div className="text-2xl text-slate-900 mt-4">
                        Indonesian Origin
                    </div>
                    <div className="h-1 bg-agrim w-48 my-1 rounded-full">

                    </div>
                    <div className="text-sm">
                        Founded in 2004, Agrim has grown from a small agricultural trading company into a trusted
                        provider of premium products and reliable service.
                        <br/>
                        <br/>
                        Committed to quality and sustainability, we ensure strict quality control from sourcing to
                        shipment, partner with local farmers, and uphold fair trade practices.
                    </div>
                </div>
            </div>
        </div>
        <div
            className="w-full h-64 bg-agrimdarkgreen rounded-2xl mt-12 grid grid-rows-1 grid-cols-2 text-white px-12">
            <div className="my-6 px-5">
                <div className="text-2xl mt-4">
                    Agrim today
                </div>
                <div className="h-1 bg-agrim w-32 my-1 rounded-full">

                </div>
                <div className="mt-3 text-sm">
                    We are dedicated to providing pure, high-quality products while fostering trusted,
                    transparent relationships with customers and suppliers. By supporting supplier productivity,
                    buyer growth, and employee satisfaction, we aim to drive mutual success and sustainable
                    business growth.
                </div>
            </div>
            <div className="mt-6 grid grid-cols-1 grid-rows-3 pr-24">
                <div className="flex flex-row gap-x-4 h-12">
                    <img src={tick} className="w-6 h-6"/>
                    <div className="text-sm">Specialise in procurement, processing and supplying of spices &
                        coconut ingredients.
                    </div>
                </div>
                <div className="flex flex-row gap-x-4 h-12">
                    <img src={tick} className="w-6 h-6"/>
                    <div className="text-sm">A global customer base with exports to 80+ countries.
                    </div>
                </div>
                <div className="flex flex-row gap-x-4 h-12">
                    <img src={tick} className="w-6 h-6"/>
                    <div className="text-sm">High standard facilities with FSSC-22000, ISO-9001, HACCP and GMP
                        certifications.
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-darkness my-12 h-80 text-white flex flex-col space-y-4 w-full px-12 py-8">
            <div className="flex flex-col">
                <div className="text-2xl mt-4">
                    Why choose us?
                </div>
                <div className="h-1 bg-agrim w-40 my-1 rounded-full">

                </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-3">
                <div className="flex flex-row h-56 w-80">
                    <div className="w-1/6 right-0">
                        <img src={stockPrice} className="w-12 h-8"/>
                    </div>
                    <div className="w-5/6 flex flex-col">
                        <div className="text-2xl">Productivity & Efficiency</div>
                        <div className="text-sm">We optimise processes to ensure full supply chain visibility and customise each product to
                            meet customer requirements.
                        </div>
                    </div>
                </div>
                <div className="flex flex-row h-56 w-80">
                    <div className="w-1/6 right-0">
                        <img src={shield} className="w-12 h-8"/>
                    </div>
                    <div className="w-5/6 flex flex-col">
                        <div className="text-2xl">Quality</div>
                        <div className="text-sm">With ISO, GMP, and HACCP certifications, we uphold the highest international standards,
                            ensuring safe, premium-quality products.
                        </div>
                    </div>
                </div>
                <div className="flex flex-row h-56 w-80">
                    <div className="w-1/6 right-0">
                        <img src={leaves} className="w-12 h-8"/>
                    </div>
                    <div className="w-5/6 flex flex-col">
                        <div className="text-2xl">Origination</div>
                        <div className="text-sm">Our proximity to raw materials ensures shorter lead times and low inventory, reducing waste
                            and preventing product expiry for fresher, high-quality offerings.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-rows-1 grid-cols-8 flex-row w-full gap-8 my-12">
            <div className="col-span-5">
                <img src={workersWorking} className="w-full rounded-2xl"/>
            </div>
            <div className="col-span-3">
                <div className="text-2xl text-slate-900 mt-4">
                    Our team
                </div>
                <div className="h-1 bg-agrim w-48 my-1 rounded-full">

                </div>
                <div className="text-sm">
                    Our dedicated team of 120 professionals drives our market strength through collaboration and
                    efficiency. We invest in comprehensive training and regular workshops to continually enhance their
                    skills and expertise.
                </div>
            </div>
        </div>
        <div className="grid grid-rows-1 grid-cols-8 flex-row w-full gap-8 mb-6">
            <div className="col-span-4">
                <div className="flex flex-col">
                    <div className="text-2xl mt-4">
                        Our facility
                    </div>
                    <div className="h-1 bg-agrim w-32 my-1 rounded-full">

                    </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 p-6">
                    <div className="flex flex-col">
                        <img src={factory} className="h-28 w-40 mx-auto"/>
                        <div className="text-center">20,000 sqm factory</div>
                    </div>
                    <div className="flex flex-col">
                        <img src={gloves} className="h-28 w-40  mx-auto"/>
                        <div className="text-center">Hygiene work space</div>
                    </div>
                    <div className="flex flex-col">
                        <img src={lab} className="h-28 w-40  mx-auto"/>
                        <div className="text-center">Equipped in-house laboratory</div>
                    </div>
                    <div className="flex flex-col">
                        <img src={multitasker} className="h-28 w-40  mx-auto"/>
                        <div className="text-center">Skilled & trained workers</div>
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <img src={handouts} className="w-full rounded-2xl"/>
            </div>
        </div>
        <div className="w-full p-4 mx-auto flex flex-col mt-6 space-y-4">
            <div className="flex flex-col mx-auto">
                <div className="text-center text-3xl">Certifications</div>
                <div className="h-1 bg-agrim w-44 my-1 rounded-full">

                </div>
            </div>
            <div className="text-center text-xl">Our factory is accredited with ISO-9001, HACCP, GMP Certifications
            </div>
        </div>
        <div className="w-11/12 h-52 grid grid-rows-1 grid-cols-3 mx-auto mb-12 mt-4">
            <div className="mx-auto"><img className="h-52 object-cover" src={gmp}/></div>
            <div className="mx-auto"><img className="h-52 object-cover" src={haccp}/></div>
            <div className="mx-auto"><img className="h-52 object-cover" src={qualityLogo}/></div>
        </div>
    </div>
}

export default AboutUsPage;