import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Listing from "./components/Listing.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div styles={{ color: "red" }} />
    <Listing Name={"Opel"} Preis={"1000"}/>
    <Listing Name={"Audi"} Preis={"3000"} />
    <Listing Name={"BMW"} Preis={"5000"}></Listing>
    <Listing Name={"VW Golf4"} Preis={"3500"} />
    <Listing Name={"Ford"} Preis={"600"} />
   
   
   
  </>
);


