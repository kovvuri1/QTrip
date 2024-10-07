import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from 'react';
export default function QtripCards(){
    let[api,setapi]=useState([])
    useEffect(()=>{ fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities")
        .then(x=>x.json())
        .then(y=>setapi(y)).catch("Api is not working properly")
                },[])
    return(
        <>
       <div className="cardm1">
    {api.map((x,y)=>{
        return(<>
          <div key={y}>
                  <Link to={"/menu"+x.city}>
                  <div className="innerdata">
                 <div className="data">
                    <h2>{x.city}</h2>
                     <p>{x.description}</p>
                  </div>
                  <img src={x.image}alt="cardimg"></img>
                  </div>
                 </Link>
                  </div>
                </>)})}

    </div>
 </>)
}
