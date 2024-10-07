import React from "react";
import { useNavigate } from "react-router-dom";
export default function QtripBg(){
     let navigate=useNavigate()
     let a=()=>{
        let ele=document.getElementById("input")
        console.log(ele.value)
        if ((ele.value) === "bengaluru"){
            navigate("/menuBengaluru"); 
          }
        else if((ele.value) === "goa"){
            navigate("/menuGoa");

        }
        else if((ele.value) === "kolkata"){
            navigate("/menuKolkata");

        }
        else if((ele.value) === "singapore"){
            navigate("/menuKolkata");

        }
        else{
            navigate("/");  
        }
     }
        return(
        <React.StrictMode>  
        <><div class="Qbg">
            <div class="Welcome_Tit">
                  <h1>Welcome to QTrip</h1>
                  <p class="para">Explore the world with fantastic places to venture around</p>
            </div>
                <input type="text" placeholder="Search a City"  name="phone"  onKeyDown={a}  id="input" autoComplete="off"></input>  
        </div>
        </>
    </React.StrictMode>
        )
    }













