import companyPic from "../assets/companyPic.png"
import firstAbout from "../assets/original/firstAbout.jpeg"
import secondAbout from "../assets/original/secondAbout.jpeg"
import qualityLogo from "../assets/original/TQSCI.jpeg"
import gmp from "../assets/original/gmp.jpeg"
import haccp from "../assets/original/haccp.jpeg"
import factoryImg from "../assets/original/factory-icon.png"
import hygene from "../assets/original/gloves-icon.png"
import skilled from "../assets/original/skills-icon.png"
import lab from "../assets/original/lab-icon.png"

function choiceCard(number: string, title: string, text: string) {
    return <div className="flex flex-col h-64 w-1/4">
        <div className="flex flex-row">
            <div className="text-5xl pr-2 align-text-bottom">{number}</div>
            <div className="flex flex-col justify-end pb-2 w-full">
                <div className="text-lg text-left">{title}</div>
                <div className="w-full h-1 bg-agrim"></div>
            </div>
        </div>
        <div className="text-left">
            {text}
        </div>
    </div>
}

function AboutUsPage() {

    const card1Text = "By optimising our processes, we ensure full visibility across the supply chain, from procurement to delivery. Each product is customised according to the customer's specific requirements."
    const card2Text = "As an ISO, GMP, and HACCP-certified company, we adhere to the highest international standards in every aspect of our operations. These certifications reflect our dedication to delivering safe, premium-quality products."
    const card3Text = "Being in close proximity to raw materials gives us the advantage of having a shorter lead time and keeping low inventory. This enables us to reduce waste and prevent expiry of products, ensuring the freshest, highest-quality products."
    return <div>
        <div className="w-full text-slate-900 text-center text-5xl p-4">
            About Us
        </div>
        <div className="flex flex-col space-y-4 mx-auto w-3/4 pb-4 text-center">
            <div>
                Founded in 2004, Agrim began as a small trading company focused on agricultural products. With a
                commitment to quality and sustainable practices, we’ve grown steadily, earning a reputation for
                delivering reliable service and premium products. From sourcing to shipment, we ensure strict quality
                control at every stage, while working closely with local farmers and following fair trade practices.
                <br/><br/>
                Today, Agrim specialises in the procurement, processing, trading, and supply of spices and coconut
                ingredients from Indonesia and Vietnam. Our expertise has allowed us to build a global customer base.
                Our endorsed facilities in Medan, Surabaya, Pontianak, and Hanoi meet the highest standards of quality
                and safety, including FSSC-22000, ISO-9001, HACCP, and GMP certifications.
            </div>
            <div className="pt-6">
                <img src={companyPic} className="w-3/5 mx-auto"/>
            </div>
            <div className="w-full text-slate-900 text-center text-3xl p-4">
                Why choose us?
            </div>
            <div className="flex flex-row justify-between">
                {choiceCard("1", "Productivity & Efficiency", card1Text)}
                {choiceCard("2", "Quality", card2Text)}
                {choiceCard("3", "Origination", card3Text)}
            </div>
            <div className="flex flex-row w-full">
                <img src={firstAbout} className="max-h-64 w-5/12 mx-auto object-cover"/>
                <img src={secondAbout} className="max-h-64 w-1/2 mx-auto object-cover"/>
            </div>
            <div className="w-full text-slate-900 text-center text-3xl p-4">
                Our team
            </div>
            <div>
                With the help of our experienced and dedicated workforce, we have positioned ourselves as a strong
                contender in the market.
                We take pride in our sincere and committed team of 120, who work closely together to achieve our goals
                efficiently.
                We provide comprehensive on-the-job training and regularly hold workshops to continually enhance the
                skills and expertise of our staff.
            </div>
            <div className="w-full text-slate-900 text-center text-3xl p-4">
                Our Facility
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <img src={factoryImg} className="h-32"/>
                    <div>20,000 sqm factory</div>
                </div>
                <div className="flex flex-col">
                    <img src={hygene} className="h-32"/>
                    <div>Hygiene work space</div>
                </div>
                <div className="flex flex-col">
                    <img src={skilled} className="h-32"/>
                    <div>Skilled & trained workers</div>
                </div>
                <div className="flex flex-col">
                    <img src={lab} className="h-32"/>
                    <div>Equipped in-house laboratory</div>
                </div>
            </div>
            <div className="w-full h-fit flex flex-col">
                <div className="w-full p-4 mx-auto flex flex-col mb-4">
                    <div className="text-center text-3xl">Certifications</div>
                    <div className="text-center text-xl">Our factory is accredited with ISO-9001, HACCP, GMP
                        Certifications
                    </div>
                </div>
                <div className="w-11/12 h-52 grid grid-rows-1 grid-cols-3 mx-auto mb-12">
                    <div className="mx-auto"><img className="h-52 object-cover" src={gmp}/></div>
                    <div className="mx-auto"><img className="h-52 object-cover" src={haccp}/></div>
                    <div className="mx-auto"><img className="h-52 object-cover" src={qualityLogo}/></div>
                </div>
            </div>
        </div>
    </div>
}

export default AboutUsPage;