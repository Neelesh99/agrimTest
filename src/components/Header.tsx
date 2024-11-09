import imageSrc from "../assets/agrim logo transparent.png";
import placeholder from "../assets/img.png"
import {useNavigate} from "react-router-dom";


function NavigationButton(props: {name: string, link: string}) {
    const navigate = useNavigate();
    return (
        <div className="group px-1 transition cursor-pointer" onClick={() => navigate(props.link)}>
            {props.name}
            <span className="block max-w-0 group-hover:max-w-full rounded transition-all duration-300 h-0.5 bg-agrim"></span>
        </div>
    )
}

function NavigationSpacer() {
    return (
        <div>•</div>
    )
}

function Header() {
    const navigate = useNavigate();
    return (
        <div className="h-fit bg-white w-full mx-auto sticky z-20 top-0">
            <div className="container mx-auto">
                <div className="flex space-x-2 p-2">
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-row">
                            <img className="object-contain h-32 w-52 cursor-pointer" src={imageSrc}
                                 onClick={() => navigate("/agrimTest/")}/>
                            <div className="flex items-end">
                                <div className="flex flex-col self-end">
                                    <img className="object-contain w-64 cursor-pointer" src={placeholder}
                                         onClick={() => navigate("/agrimTest/")}/>
                                    <div className="pl-4 text-xl">Delivering performance with integrity</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end px-2">
                        <div className="flex flex-row">
                                <NavigationButton name="About Us" link="/agrimTest/aboutUs"/>
                                <NavigationSpacer/>
                                <NavigationButton name="Products" link="/agrimTest/products"/>
                                <NavigationSpacer/>
                                <NavigationButton name="Exhibitions" link="/agrimTest/exhibitions"/>
                                <NavigationSpacer/>
                                <NavigationButton name="Contact Us" link="/agrimTest/contactUs"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-6 bg-agrim mt-2 w-full"></div>
        </div>)
}

export default Header;
