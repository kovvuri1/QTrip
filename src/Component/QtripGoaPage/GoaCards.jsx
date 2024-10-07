import React from "react";

import { Link } from "react-router-dom";

import { useEffect,useState } from 'react';


export default function Goacard(){

    let[api,setapi]=useState([])

    useEffect(()=>{ fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=goa")
        .then(x=>x.json())
        .then(y=>setapi(y)).catch(console.log("Api is not working properly")
        )},[])
    return(
        <>
       <div id="BenMainDiv">
    {api.map((x,y)=>{
        // console.log(x)
        return(<>
        <Link to={"/detail"+x.name}>
        <div className="BenSubCards" key={y}>   
                <img src={x.image} alt="goacards"/>
                <p  className="category">{x.category}</p>
                <h5 className="h51">{x.name}</h5>
                <p  className="price">₹{x.costPerHead}</p>
                <p className="Duration">Duration</p>
                <p  className="DurationValue">{x.duration} Hours</p>
        </div>
        </Link>
        </>)})}
    </div>
    </>
    )
}
