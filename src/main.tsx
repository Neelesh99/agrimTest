import React, {ReactElement} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/home.tsx";
import ContactUsPage from "./pages/contactUs.tsx";

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
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
