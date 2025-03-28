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
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Exhibitions from "./pages/exhibitions.tsx";

function frameContent(element: ReactElement) {
    return (
        <div>
            <Header/>
                <div className="container mx-auto">
                    {element}
                </div>
            <Footer/>
        </div>)
}

const router = createBrowserRouter([
    {
        path: "/",
        element: frameContent(<Home/>),
    },
    {
        path: "/contactUs",
        element: frameContent(<ContactUsPage/>),
    },
    {
        path: "/aboutUs",
        element: frameContent(<AboutUsPage/>),
    },
    {
        path: "/products",
        element: frameContent(<ProductsPage/>),
    },
    {
        path: "/product/:productId",
        element: frameContent(<ProductOverviewPage/>)
    },
    {
        path: "/exhibitions",
        element: frameContent(<Exhibitions/>)
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <div>
          <RouterProvider router={router} />
      </div>
  </React.StrictMode>,
)
