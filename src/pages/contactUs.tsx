import emailjs from 'emailjs-com';
import React, {useEffect, useState} from "react";
import ConfirmationPopUp from "../components/ConfirmationPopUp.tsx";

function EntryBox(props: {label: string, update: (newVal: string) => void}) {
    return <div className="flex flex-col w-full">
        <div className="text-slate-900 text-xl">{props.label}</div>
        <input className="focus:ring-4 focus:ring-agrim focus:bg-white rounded-t-md p-2 bg-gray-300" onChange={(e) => props.update(e.target.value)}/>
        <div className="h-1 bg-agrim rounded-b-full focus:bg-none"></div>
    </div>
}

function EntryBoxLarge(props: {label: string, update: (newVal: string) => void}) {
    return <div className="flex flex-col w-full space-y-1">
        <div className="text-slate-900 text-xl">{props.label}</div>
        <textarea className="focus:ring-4 focus:ring-agrim focus:bg-white rounded-md h-56 bg-gray-300 align-top"
                  onChange={(e) => props.update(e.target.value)}/>
    </div>
}

function getButton(props: {
    name: string,
    emailProps:EmailProps}) {

    const [isOpen, setOpen] = React.useState(false);

    function handleSend() {
        sendEmail(props.emailProps)
        setOpen(true)
    }

    return <div
        className="text-center text-white bg-agrim py-2 px-1 rounded-full cursor-pointer hover:bg-agrimdarkgreen transition duration-300 w-32"
    onClick={() => handleSend()}>
        {props.name}
        <ConfirmationPopUp isOpen={isOpen} close={() => setOpen(false)} />
    </div>;
}

interface EmailProps {
    name: string,
    company: string
    email: string,
    message: string,
    phone: string
}

function sendEmail(props: EmailProps) {

    emailjs.send('service_we8ujnf', 'template_qtf1i7a', {
        from_name: props.name,
        message: props.message,
        company_name: props.company,
        reply_to: props.email,
        phone_no: props.phone,
    }, '0EtUNp83sr_-uKAK8');
}

function ContactUsPage() {

    const [nameState, setNameState] = useState("");
    const [messageState, setMessageState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [phoneState, setPhoneState] = useState("");
    const [companyState, setCompanyState] = useState("");

    useEffect(() => {
        window.scrollTo({ top: 0})
    }, [])

    return <div>
        <div className="w-full text-slate-900 text-center text-2xl p-4 pt-6">
            Contact Us
        </div>
        <div className="flex flex-row w-full justify-between my-10">
            <div className="w-5/12">
                <div className="flex flex-col space-y-4 mx-auto pb-4">
                    <EntryBox label="Name" update={setNameState}/>
                    <EntryBox label="Company name" update={setCompanyState}/>
                    <EntryBox label="Your email" update={setEmailState}/>
                    <EntryBox label="Your phone number" update={setPhoneState}/>
                    <EntryBoxLarge label="Your message" update={setMessageState}/>
                </div>
                <div className="py-8 w-fit">
                    {getButton({
                        name: "Submit", emailProps: {
                            name: nameState,
                            company: companyState,
                            email: emailState,
                            message: messageState,
                            phone: phoneState,
                        }
                    })}
                </div>
            </div>
            <div className="w-5/12 rounded-3xl bg-agrimdarkgreen flex flex-col p-8 text-white">
                <div className="text-2xl">Offices</div>
                <div className="text-agrim mt-4 font-bold">Singapore</div>
                <div>
                    60 Paya Lebar Road,
                    <br/>
                    #09-43 Paya Lebar Square,
                    <br/>
                    Singapore - 409051
                    <br/>
                    Telephone: +65 6638 8646
                    <br/>
                    Whatsapp: +65 9169 4785
                </div>
                <div className="text-2xl mt-12">Factories</div>
                <div className="text-agrim mt-4 font-bold">Medan, Indonesia</div>
                <div>
                    Spices, Coconut Ingredients
                </div>
                <div className="text-agrim mt-4 font-bold">Surabaya, Indonesia</div>
                <div>
                    Spices
                </div>
                <div className="text-agrim mt-4 font-bold">Pontianak, Indonesia</div>
                <div>
                    Coconut Ingredients
                    <br/>
                    <a href="www.unicoconut.com">www.unicoconut.com</a>
                </div>
            </div>
        </div>
    </div>
}

export default ContactUsPage;