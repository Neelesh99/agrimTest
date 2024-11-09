import emailjs from 'emailjs-com';
import React, {useEffect, useState} from "react";
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
        className="text-center text-white bg-agrim py-2 px-1 rounded-md cursor-pointer hover:bg-agrimDark transition duration-300 w-32"
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
        <div className="w-full text-slate-900 text-center text-5xl p-4 pt-6">
            Contact Us
        </div>
        <div className="flex flex-col space-y-4 w-2/3 mx-auto pb-4">
            <EntryBox label="Name" update={setNameState} />
            <EntryBox label="Company name" update={setCompanyState} />
            <EntryBox label="Your email" update={setEmailState} />
            <EntryBox label="Your phone number" update={setPhoneState} />
            <EntryBoxLarge label="Your message" update={setMessageState} />
        </div>
        <div className="p-8 mx-auto w-fit">
            {getButton({name: "Submit", emailProps: {
                    name: nameState,
                    company: companyState,
                    email: emailState,
                    message: messageState,
                    phone: phoneState,}})}
        </div>
        <div className="w-full text-slate-900 text-center text-3xl p-4">
            Our offices
        </div>
        <div className="flex flex-row justify-between py-4 pb-8">
            <div className="flex flex-col w-1/4">
                <div className="text-center text-xl">Indonesia</div>
                <div className="bg-agrim h-1 w-full mb-2"></div>
                <div className="text-center">PT. JASUM JAYA</div>
                <div className="text-center">Medan, Indonesia</div>
                <div className="font-bold text-center">+62 811 6000 625</div>
            </div>
            <div className="flex flex-col w-1/4">
                <div className="text-center text-xl">Singapore</div>
                <div className="bg-agrim h-1 w-full mb-2"></div>
                <div className="text-center">AGRIM PTE LTD</div>
                <div className="text-center">60 Paya Lebar Road,</div>
                <div className="text-center">#09-43 Paya Lebar Square,</div>
                <div className="text-center">Singapore - 409051</div>
                <div className="font-bold text-center">+65 9169 4785</div>
            </div>
            <div className="flex flex-col w-1/4">
                <div className="text-center text-xl">Vietnam</div>
                <div className="bg-agrim h-1 w-full mb-2"></div>
                <div className="text-center">TAN HUA AGRO INDUSTRIES</div>
                <div className="text-center">Hanoi, Vietnam</div>
                <div className="font-bold text-center">+84 814 570 625</div>
            </div>
        </div>
    </div>
}

export default ContactUsPage;