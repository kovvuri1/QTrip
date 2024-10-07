import React,{Component} from "react";
import Header from "../Component/QtripHeader";
import QtripBg from "../Component/QtripMainPage/QtripBackground"
import QtripCards from "../Component/QtripMainPage/QMainCards"
export default class QtripMain extends Component{
    render(){
        return(
            <>
            <Header/>
            <QtripBg/>
            <QtripCards/>

            </>
        )
    }
}