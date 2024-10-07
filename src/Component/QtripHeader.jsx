import React from "react";
export default class Header extends React.Component{
    render(){
        return(
        <React.StrictMode>
        <>
        <div className="header">
            <p id="tit">QTrip</p>
            <p id="front_home">Home</p>
            <p id="reservation">Reservations</p>
            <p id="login">Login Here</p>
            <button id="btn">Register</button>
        </div>
        <div className="container"><p style={{paddingLeft:"35px",fontSize:"20px"}}>© QTrip 2022</p></div>
        </>
    </React.StrictMode>
        )
    }
}