import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import cassia from "../assets/cassia.png"

function getProductCard(props: {name: string, url: string}) {
    return <div className="w-56 bg-orange-600 grid grid-cols-1 grid-rows-6 rounded-lg  hover:bg-zinc-100 hover:text-orange-700 m-2">
        <div className="row-span-5">
            <img className="w-full h-full bg-cover" src={props.url}/>
        </div>
        <div className="row-span-1 p-2 text-center transition duration-300 rounded-b-lg cursor-pointer">
            {props.name}
        </div>
    </div>;
}

function ProductsPage() {
    return <div>
        <Header/>
        <div className="w-full text-slate-900 text-center font-bold text-4xl p-4">
            Our Products
        </div>
        <div className="flex flex-wrap text-white w-3/4 mx-auto">
            {getProductCard({name: "Cassia", url: cassia})}
            {getProductCard({name: "Cassia", url: cassia})}
            {getProductCard({name: "Cassia", url: cassia})}
            {getProductCard({name: "Cassia", url: cassia})}
            {getProductCard({name: "Cassia", url: cassia})}
        </div>
        <Footer/>
    </div>
}

export default ProductsPage;