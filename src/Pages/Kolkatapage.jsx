import React,{Component} from "react";
import Header from "../Component/QtripHeader";
import BegMenu from "../Component/QtripBengaluruPage/BengaluruBg"
import KolMcard from "../Component/Kolkathapage/kolkatha"
export default class Kolmains extends Component{
    render(){
        return(
            <>
            <Header/>
            <BegMenu/>
            <KolMcard/>
            </>
        )
    }
}






