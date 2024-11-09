import {useParams} from "react-router-dom";
import {findProductData, ProductData} from "../data/ProductsPageDataSource.tsx";
import {useEffect} from "react";

function capitalize(str: String){
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/([A-Z])/g, ' $1').trim();
}

function ProductOverviewPage() {
    const {productId} = useParams();

    const productData = findProductData(productId as string) as ProductData
    const description = productData.description
    const imageSrc = productData.imageSrc

    useEffect(() => {
        window.scrollTo({ top: 0})
    }, [])

    return <div>
        <div className="w-full text-slate-900 text-center text-5xl p-4">
            {capitalize(productId as string)}
        </div>
        <div className="w-full flex justify-around py-6">
            <div className="w-5/6 flex flex-row flex-wrap pb-10 justify-around">
                <img className="w-5/12 rounded-md object-contain" src={imageSrc}/>
                <div className="w-1/2 text-left flex flex-col space-y-4">
                    {description}
                    {productData.lowerGallery !== undefined ? productData.lowerGallery : ""}
                </div>
            </div>
        </div>
    </div>
}

export default ProductOverviewPage;