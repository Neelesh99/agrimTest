import {useParams} from "react-router-dom";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import {findProductData, ProductData} from "../data/ProductsPageDataSource.tsx";

function capitalize(str: String){
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/([A-Z])/g, ' $1').trim();
}

function ProductOverviewPage() {
    const {productId} = useParams();

    const productData = findProductData(productId as string) as ProductData
    const description = productData.description
    const imageSrc = productData.imageSrc
    return <div>
        <Header/>
        <div className="w-full text-slate-900 text-center font-bold text-4xl p-4">
            {capitalize(productId as string)}
        </div>
        <div className="w-full flex justify-around py-6">
            <div className="w-5/6 flex flex-row flex-wrap pb-10 justify-around">
                <img className="w-1/3 rounded-md" src={imageSrc}/>
                <div className="w-1/2 text-left">{description}</div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default ProductOverviewPage;