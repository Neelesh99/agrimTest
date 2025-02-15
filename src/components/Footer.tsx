import whatsappLogo from "../assets/whatsapp.png"
import {NavigationButton} from "./Header.tsx";

function Footer() {
    return <div className="bg-agrim w-screen h-fit p-6 bottom-0">
        <div className="mx-12 flex h-fit justify-between">
            <div className="flex flex-col space-y-4">
                <NavigationButton name="Home" link="/"/>
                <NavigationButton name="About Us" link="/aboutUs"/>
                <NavigationButton name="Products" link="/products"/>
                <NavigationButton name="Exhibitions" link="/exhibitions"/>
                <NavigationButton name="Gallery" link="/exhibitions"/>
                <NavigationButton name="Blog" link="/exhibitions"/>
                <NavigationButton name="Contact Us" link="/contactUs"/>
            </div>
            <div className="w-1/3 max-w-96">
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-row w-56 justify-between">
                        <div className="text-xl text-white self-center">
                            Follow Us
                        </div>
                        <a href="https://www.linkedin.com/company/agrimltd/">
                            <img className="h-12 cursor-pointer" src={whatsappLogo}/>
                        </a>
                    </div>
                    <div className="flex flex-row w-56 justify-between">
                        <div className="text-xl text-white self-center">
                            Email Us
                        </div>
                        <a href="mailto:trade@agrimltd.com">
                            <img className="h-12 cursor-pointer" src={whatsappLogo}/>
                        </a>
                    </div>
                    <div className="flex flex-row w-56 justify-between">
                        <div className="text-xl text-white self-center">
                            Whatsapp Us
                        </div>
                        <a href="tel:+62 811 6000 625">
                            <img className="h-12 cursor-pointer" src={whatsappLogo}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;