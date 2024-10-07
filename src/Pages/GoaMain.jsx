import React,{Component} from "react";
import Header from "../Component/QtripHeader";
import BegMenu from "../Component/QtripBengaluruPage/BengaluruBg";
import Goacard from "../Component/QtripGoaPage/GoaCards"
export default class GoaApp extends Component{
    render(){
        return(
            <>
            <Header/>
            <BegMenu/>
            <Goacard/>           
            </> 
        )
    }
}