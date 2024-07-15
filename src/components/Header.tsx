import imageSrc from "../assets/agrim logo transparent.png";
import {useNavigate} from "react-router-dom";


function NavigationButton(props: {name: string, link: string}) {
    const navigate = useNavigate();
    return (
        <div className="group px-1 transition cursor-pointer" onClick={() => navigate(props.link)}>
            {props.name}
            <span className="block max-w-0 group-hover:max-w-full rounded transition-all duration-300 h-0.5 bg-orange-500"></span>
        </div>
    )
}

function NavigationSpacer() {
    return (
        <div>•</div>
    )
}

function Header() {

    return (
        <div className="h-fit bg-zinc-100 w-full container mx-auto sticky z-20 top-0">
        <div className="flex space-x-2 p-2">
        <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row">
                <img className="object-contain h-32 w-52" src={imageSrc}/>
                <div className="flex items-end text-base">
                    <div className="flex-col self-end">
                        <div>Delivering</div>
                        <div>performance</div>
                        <div>with integrity</div>
                    </div>
                </div>
            </div>
            <div className="flex items-end px-2">
                <div className="flex flex-row">
                    <NavigationButton name="About Us" link="/agrimTest/"/>
                    <NavigationSpacer/>
                    <NavigationButton name="Products" link="/agrimTest/"/>
                    <NavigationSpacer/>
                    <NavigationButton name="Exhibitions" link="/agrimTest/"/>
                    <NavigationSpacer/>
                    <NavigationButton name="Contact Us" link="/agrimTest/contactUs"/>
                </div>
            </div>
        </div>
    </div>
            <div className="h-6 bg-orange-500 mt-2"></div>
    </div>)
}

export default Header;