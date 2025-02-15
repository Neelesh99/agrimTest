import imageSrc from "../assets/agrim logo transparent.png";
import placeholder from "../assets/img.png"
import {useNavigate} from "react-router-dom";


export function NavigationButton(props: {name: string, link: string}) {
    const navigate = useNavigate();
    return (
        <div className="group px-1 transition cursor-pointer text-white hover:text-agrimdarkgreen duration-300" onClick={() => navigate(props.link)}>
            {props.name}
        </div>
    )
}


function NavigationSpacer() {
    return (
        <div className="text-white w-2 h-2 bg-white rounded-full mx-2">

        </div>
    )
}

function Header() {
    const navigate = useNavigate();
    return (
        <div className="h-fit bg-white w-full mx-auto sticky z-20 top-0">
            <div className="container mx-auto">
                <div className="flex space-x-2 p-2">
                    <div className="flex flex-row items-center w-full">
                        <div className="flex flex-row mx-auto">
                            <img className="object-contain h-32 w-52 cursor-pointer" src={imageSrc}
                                 onClick={() => navigate("/")}/>
                            <div className="flex items-end">
                                <div className="flex flex-col self-end">
                                    <img className="object-contain w-64 cursor-pointer" src={placeholder}
                                         onClick={() => navigate("/")}/>
                                    <div className="pl-4 text-xl">Delivering performance with integrity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-10 bg-agrim mt-2 w-full">
                <div className="flex px-2">
                    <div className="flex flex-row mx-auto py-2 items-center">
                        <NavigationButton name="About Us" link="/aboutUs"/>
                        <NavigationSpacer/>
                        <NavigationButton name="Products" link="/products"/>
                        <NavigationSpacer/>
                        <NavigationButton name="Exhibitions" link="/exhibitions"/>
                        <NavigationSpacer/>
                        <NavigationButton name="Contact Us" link="/contactUs"/>
                    </div>
                </div>
            </div>
        </div>)
}

export default Header;
