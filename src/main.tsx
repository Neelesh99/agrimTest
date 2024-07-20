import React, {ReactElement} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/home.tsx";
import ContactUsPage from "./pages/contactUs.tsx";
import AboutUsPage from "./pages/aboutUs.tsx";
import ProductsPage from "./pages/products.tsx";
import ProductOverviewPage from "./pages/productOverviewPage.tsx";

function frameContent(element: ReactElement) {
    return (<div className="container mx-auto">
        {element}
    </div>)
}

const router = createBrowserRouter([
    {
        path: "/agrimTest/",
        element: frameContent(<Home/>),
    },
    {
        path: "/agrimTest/contactUs",
        element: frameContent(<ContactUsPage/>),
    },
    {
        path: "/agrimTest/aboutUs",
        element: frameContent(<AboutUsPage/>),
    },
    {
        path: "/agrimTest/products",
        element: frameContent(<ProductsPage/>),
    },
    {
        path: "agrimTest/product/:productId",
        element: frameContent(<ProductOverviewPage/>)
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
