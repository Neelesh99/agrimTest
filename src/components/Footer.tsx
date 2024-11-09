import germanFlag from "../assets/germanFlag.png"
import anugaLogo from "../assets/anugaLogo.png"

function ExhibitionCard() {
    return <div className="grid grid-cols-1 grid-rows-6">
        <div className="text-right text-white row-span-1 bg-slate-900 p-1 pr-5 rounded-t-md">
            Meet us at upcoming exhibitions
        </div>
        <div className="row-span-5 bg-slate-100 p-2 px-4 grid grid-cols-1 grid-rows-2 rounded-b-md">
            <div className="flex justify-between">
                <img src={germanFlag} className="h-12 w-15"/>
                <img src={anugaLogo} className="h-14 w-14"/>
            </div>
            <div className="text-right">Anuga, Germany<br/>
                Booth number: Hall 1.1, Aisle C-010<br/>
                9 - 13 October 2024<br/> </div>
        </div>
    </div>
}

function Footer() {
    return <div className="bg-agrim w-full h-fit p-6 bottom-0">
        <div className="mx-12 flex h-fit justify-between">
            <div className="py-14">
                <div className="text-white text-xl">
                    trade@agrimltd.com <br/>
                    Tel: +65 6638 8646 <br/>
                    Whatsapp: +65 9169 4785 <br/>
                </div>
            </div>
            <div className="w-1/3 max-w-96"><ExhibitionCard/></div>
        </div>
    </div>
}

export default Footer;