import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import companyPic from "../assets/companyPic.png"

function AboutUsPage() {
    return <div>
        <Header/>
        <div className="w-full text-slate-900 text-center font-bold text-4xl p-4">
            About Us
        </div>
        <div className="flex flex-col space-y-4 mx-auto w-3/4 pb-4 text-center">
            <div>
                It is said that journey of a thousand miles starts with a single step. For AGRIM, this first step was
                taken in the year 2004. AGRIM came into existence as a small trading company dealing with Agricultural
                Products. Since then, with careful planning & consistent perseverance, AGRIM has now grown multi-folds
                and have been able to achieve the target of permanent upward curve. The company has established a
                reputation for consistently providing high-quality items with dependable services and dedication since
                we adhere to stringent quality control procedures from the beginning of procurement and processing until
                the shipment is completed.
                <br/><br/>
                AGRIM is engaged in procurement, processing, trading and supply of Spices and Coconut ingredients from
                Indonesia & Vietnam. We have acquired in-depth knowledge & expertise of regional products over a period
                of time, which has helped develop an international customer base for the company. Our facilities are
                located in Medan (North Sumatera), Surabaya (Java), Pontianak (West Kalimantan) in Indonesia and Hanoi,
                Vietnam. These products are processed in accredited facilities that hold FSSC-22000, ISO-9001, HACCP,
                GMP certifications.
                <br/><br/>
                Another division of AGRIM is engaged in import, Stock and Sale and Trading of Animal & Poultry feeds
                like Corn, Corn Gluten Meal, Wheat, Wheat bran, Soybean Meal, Canola Meal, Sunflower meal and lots of
                other items sourced from several origins across the globe, including South East Asia, Middle East and
                Americas. This large network of supplier base all over the globe has given AGRIM a significant boost and
                now we pride ourselves in supply of quality and guaranteed products to regional feed factories and also
                international buyers.
            </div>
            <div className="pt-6">
                <img src={companyPic} className="w-4/5 mx-auto"/>
            </div>
            <div className="w-full text-slate-900 text-center font-bold text-4xl p-4">
                Our team
            </div>
            <div>
                Thanks to our experienced and dedicated workforce, we have positioned ourselves as a strong contender in the market. The company takes pride in its team of sincere, diligent, and committed staff. Our team members collaborate closely with each other to effectively and efficiently achieve the organization's goals. Comprehensive on-the-job training is provided to our workers, and workshops are regularly conducted to improve their skills, enhancing the expertise and abilities of our personnel.
            </div>
        </div>
        <Footer/>
    </div>
}

export default AboutUsPage;