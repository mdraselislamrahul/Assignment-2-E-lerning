import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPaje from "./Components/ErrorPage/ErrorPaje.jsx";
import Home from "./Components/Home/Home.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import AllFoods from "./Components/AllFoods/AllFoods.jsx";
import AddFood from "./Components/AddFood/AddFood.jsx";
import FoodDetails from "./Components/AllFoods/AllFoodsBanner/FoodDetails/FoodDetails.jsx";
import Service from "./Components/Service/Service.jsx";
import MyOrder from "./Components/MyOrder/MyOrder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPaje></ErrorPaje>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/about",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/allfoods",
        element: <AllFoods></AllFoods>,
        loader: () => {
          return fetch("http://localhost:5000/foods");
        },
      },
      {
        path: "/addfoods",
        element: <AddFood></AddFood>,
      },
      {
        path: "/details/:id",
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/foods/${params.id}`);
        },
      },
      {
        path: "/service",
        element:<Service></Service>
      },
      {
        path:"/myorder",
        element:<MyOrder></MyOrder>,
        loader: ()=>{return fetch("http://localhost:5000/foodsOrder")}
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
