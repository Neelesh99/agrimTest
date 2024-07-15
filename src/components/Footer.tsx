import germanFlag from "../assets/germanFlag.png"
import anugaLogo from "../assets/anugaLogo.png"

function ExhibitionCard() {
    return <div className="grid grid-cols-1 grid-rows-6">
        <div className="text-right text-white row-span-1 bg-slate-900 p-1 pr-5 rounded-t-md">
            Upcoming exhibitions
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
    return <div className="bg-orange-600 w-full h-fit p-2 bottom-0">
        <div className="mx-12 flex justify-between">
            <div className="text-white">marketing@agrimltd.com <br/>
                +65 6638 8646 <br/>
                Contact us <br/>
                <br/>
                AGRIM PTE LTD <br/>
                60 Paya Lebar Road, <br/>
                #09-43 Paya Lebar Square, <br/>
                Singapore - 409051</div>
            <div className="w-1/3"><ExhibitionCard/></div>
        </div>
    </div>
}

export default Footer;