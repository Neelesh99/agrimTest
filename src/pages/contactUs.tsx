import emailjs from 'emailjs-com';

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
        onClick={() => sendEmail("Hello")}
        className="text-center text-white bg-orange-600 py-2 px-1 rounded-sm cursor-pointer hover:bg-orange-700 transition duration-300 w-32">
        {props.name}
    </div>;
}

function sendEmail(message: string) {
    // e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {message: message}, 'YOUR_USER_ID')
        .then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        }, (error) => {
            console.log(error.text);
        });
}

function ContactUsPage() {

    return <div>
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
    </div>
}

export default ContactUsPage;