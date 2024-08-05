import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

function EntryBox(props: {label: string}) {
    return <div className="flex flex-col w-full space-y-1">
        <div className="text-slate-900 text-xl">{props.label}</div>
        <input className="ring-2 ring-agrim rounded-sm p-2"/>
    </div>
}

function EntryBoxLarge(props: {label: string}) {
    return <div className="flex flex-col w-full space-y-1">
        <div className="text-slate-900 text-xl">{props.label}</div>
        <textarea className="ring-2 ring-agrim rounded-sm h-56 p-2 align-top"/>
    </div>
}

function getButton(props: {name: string}) {
    return <div
        className="text-center text-white bg-orange-600 py-2 px-1 rounded-sm cursor-pointer hover:bg-orange-700 transition duration-300 w-32">
        {props.name}
    </div>;
}

function ContactUsPage() {

    return <div>
        <Header/>
        <div className="w-full text-slate-900 text-center font-bold text-4xl p-4">
            Contact Us
        </div>
        <div className="flex flex-col space-y-4 w-2/3 mx-auto pb-4">
            <EntryBox label="Name"/>
            <EntryBox label="Company name"/>
            <EntryBox label="Your email"/>
            <EntryBoxLarge label="Your message"/>
        </div>
        <div className="p-16 mx-auto w-fit">
            {getButton({name: "Submit"})}
        </div>
        <Footer/>
    </div>
}

export default ContactUsPage;