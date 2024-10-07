import React from "react";
import Header from "../Component/QtripHeader";
import BegMenu from "../Component/QtripBengaluruPage/BengaluruBg"
import { Link } from "react-router-dom";
import { useEffect,useState } from 'react';
export default function Paris(){
    let[api,setapi]=useState([])
    useEffect(()=>{ fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=paris")
        .then(x=>x.json())
        .then(y=>setapi(y)) 
                },[])
    return(
        <>
        <Header/>
        <BegMenu/>
       <div id="BenMainDiv">
     {api.map(x=>{
        // console.log(x)
        return(<>
               <Link to={"/detail"+x.name}>
                 <div className="BenSubCards">   
                <img src={x.image} alt="menucard"/>
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