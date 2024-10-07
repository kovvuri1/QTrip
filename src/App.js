import React from 'react';
import "./App.css"
import QtripMain from './Pages/QtripMainPage';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import BanMain from "./Pages/BengaluruPage"
import GoaApp from "./Pages/GoaMain";
import Kolmains from "./Pages/Kolkatapage"
import Malasia from "./Pages/malasiapage";
import Bangkok from "./Pages/Bangkok"
import Newyork from "./Pages/Newyork"
import Paris from './Pages/Paris';
import Err from "./Pages/Error"
import {Niaboytown,Vyfolk,Shiwood,Shilbluff,Anrncast,Stonelumhawk,Bageorge,Wooddaux,Fort,Thton,Grandrubou,Nesbridge,Northgelgoon,Lalakechi,Annviriningsauk,Vangreatshot,Hillslfleet,Spriha,Ashland,Dgethall,Presbir,Gerjuaqpool,Dinyardlodge} from "./Pages/Subcards/Bengalurudetails";
import {Perthby,Kenntic,Pressal,Heathber,Plympside,Lowtra,Chettbou,Bucktim,Ntibran,Warflin} from "./Pages/Subcards/Goacards"
export default class App extends React.Component{
    render(){
        return(
            <React.StrictMode>        
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QtripMain/>} />   
        <Route path="/menuBengaluru" element={<BanMain />} />
        {/* <Route path="/detailNiaboytown" element={<BegDetail />} />  */}
         <Route path="/menuGoa" element={<GoaApp/>}/>
         {/* <Route path='/detailPerthby' element={<Goadetail/>}/> */}
         <Route path="/menuKolkata" element={<Kolmains/>}/>
         <Route path="/menuSingapore" element={<Kolmains/>}/>
         <Route path="/menuMalaysia" element={<Malasia/>}/>
         <Route path="/menuBangkok" element={<Bangkok/>}/>  
         <Route path="/menuNew York" element={<Newyork/>}/>  
         <Route path="/menuParis" element={<Paris/>}/> 
          {/* Goa sub cards */}
         <Route path="/detailPerthby" element={<Perthby/>}/> 
         <Route path="/detailKenntic End" element={<Kenntic/>}/> 
         <Route path="/detailPressal Creek" element={<Pressal/>}/> 
         <Route path="/detailHeathber" element={<Heathber/>}/> 
         <Route path="/detailSt Plympside" element={<Plympside/>}/>
         <Route path="/detailLowtra" element={<Lowtra/>}/>
         <Route path="/detailChettbou Aux Dersting" element={<Chettbou/>}/>
         <Route path="/detailBucktim" element={<Bucktim/>}/>
         <Route path="/detailNtibran Lake" element={<Ntibran/>}/>
         <Route path="/detailWarflin" element={<Vyfolk/>}/>
        {/* bengaluru sub cards */}       
         <Route path="/detailNiaboytown" element={<Niaboytown/>}/> 
         <Route path="/detailFort Sionnnn" element={<Fort/>}/> 
         <Route path="/detailWooddaux" element={<Wooddaux/>}/> 
         <Route path="/detailBageorge With Nonshi Harbour" element={<Bageorge/>}/> 
         <Route path="/detailStonelumhawk" element={<Stonelumhawk/>}/>
         <Route path="/detailLa Anrncast" element={<Anrncast/>}/>
         <Route path="/detailFort Shilbluff" element={<Shilbluff/>}/>
         <Route path="/detailShiwood" element={<Shiwood/>}/>
         <Route path="/detailNtibran Lake" element={<Ntibran/>}/>
         <Route path="/detailEast Vyfolk" element={<Warflin/>}/>
        {/* kolkatha subcards */}
         <Route path="/detailThton" element={<Thton/>}/> 
         <Route path="/detailGrand Rubou Du Wagten" element={<Grandrubou/>}/> 
         <Route path="/detailNesbridge" element={<Nesbridge/>}/> 
         <Route path="/detailNorth Gelgoon" element={<Northgelgoon/>}/> 
         <Route path="/detailLa Lakechi With Lipentage" element={<Lalakechi/>}/>
         <Route path="/detailAnnvir-In-Ingsauk Lake" element={<Annviriningsauk/>}/>
         {/* singapore  subcards*/}
         <Route path="/detailThton" element={<Thton/>}/> 
         <Route path="/detailGrand Rubou Du Wagten" element={<Grandrubou/>}/> 
         <Route path="/detailNesbridge" element={<Nesbridge/>}/> 
         <Route path="/detailNorth Gelgoon" element={<Northgelgoon/>}/> 
         <Route path="/detailLa Lakechi With Lipentage" element={<Lalakechi/>}/>
         <Route path="/detailAnnvir-In-Ingsauk Lake" element={<Annviriningsauk/>}/>
         <Route path="/detailLa Lakechi With Lipentage" element={<Lalakechi/>}/>
         <Route path="/detailAnnvir-In-Ingsauk Lake" element={<Annviriningsauk/>}/>
         <Route path='*' element={<Err/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
        )
    }
}