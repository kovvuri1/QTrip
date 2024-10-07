import React,{Component} from "react";
export default class BegMenu extends Component{
    render(){
        return(
            <>
            <div className="MenupartHeader">
            <h1 id="MenuName">Explore all adventures</h1>
            <p id="Menudata">Here's a list of places that you can explore in city</p>
            <div className="headposition">
                <div id="headInner">
                <p>Filters:</p>
                <input type="text" placeholder="Filter By Duration(Hours)" ></input>
                <p style={{color:"blue"}}>Clear</p>
                <hr></hr>
                <input type="text" placeholder="Add Category"></input>
                <p style={{color:"blue"}}>Clear</p>
                <hr></hr>
                <input type="text" placeholder="Search Adventures"></input>
                <p style={{color:"blue"}}>Clear</p>
                </div>
            </div>
            </div>
            </>

        )
    }
}