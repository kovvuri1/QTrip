import React,{Component} from "react";
import Header from "../Component/QtripHeader";
import BegMenu from "../Component/QtripBengaluruPage/BengaluruBg"
import BegMcard from "../Component/QtripBengaluruPage/Menucards"
export default class BanMain extends Component{
    render(){
        return(
            <>
            <Header/>
            <BegMenu/>
            <BegMcard/>
            </>
        )
    }
}






