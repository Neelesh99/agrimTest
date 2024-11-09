import emailjs from 'emailjs-com';
import React, { useState } from "react";
import ConfirmationPopUp from "../components/ConfirmationPopUp.tsx";

function EntryBox(props: {label: string, update: (newVal: string) => void}) {
    return <div className="flex flex-col w-full space-y-1">
        <div className="text-slate-900 text-xl">{props.label}</div>
        <input className="ring-2 ring-agrim rounded-sm p-2" onChange={(e) => props.update(e.target.value)}/>
    </div>
}

function EntryBoxLarge(props: {label: string, update: (newVal: string) => void}) {
    return <div className="flex flex-col w-full space-y-1">
        <div className="text-slate-900 text-xl">{props.label}</div>
        <textarea className="ring-2 ring-agrim rounded-sm h-56 p-2 align-top" onChange={(e) => props.update(e.target.value)} />
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
        className="text-center text-white bg-agrim py-2 px-1 rounded-lg cursor-pointer hover:bg-agrimDark transition duration-300 w-32"
    onClick={() => handleSend()}>
        {props.name}
        <ConfirmationPopUp isOpen={isOpen} close={() => setOpen(false)} />
    </div>;
}

interface EmailProps {
    name: string,
    company: string
    email: string,
    message: string
}

function sendEmail(props: EmailProps) {

    emailjs.send('service_we8ujnf', 'template_qtf1i7a', {
        from_name: props.name,
        message: props.message,
        company_name: props.company,
        reply_to: props.email
    }, '0EtUNp83sr_-uKAK8');
}

function ContactUsPage() {

    const [nameState, setNameState] = useState("");
    const [messageState, setMessageState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [companyState, setCompanyState] = useState("");

    return <div>
        <div className="w-full text-slate-900 text-center font-bold text-4xl p-4">
            Contact Us
        </div>
        <div className="flex flex-col space-y-4 w-2/3 mx-auto pb-4">
            <EntryBox label="Name" update={setNameState} />
            <EntryBox label="Company name" update={setCompanyState} />
            <EntryBox label="Your email" update={setEmailState} />
            <EntryBoxLarge label="Your message" update={setMessageState} />
        </div>
        <div className="p-16 mx-auto w-fit">
            {getButton({name: "Submit", emailProps: {
                    name: nameState,
                    company: companyState,
                    email: emailState,
                    message: messageState}})}
        </div>
    </div>
}

export default ContactUsPage;