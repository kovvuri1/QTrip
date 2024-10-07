import React, { useEffect, useState } from 'react';
import Header from "../../Component/QtripHeader"



const Goasubcards = ({ apiid }) => {
    const [api, setApi] = useState([]);
   

    useEffect(() => { fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures/detail?adventure=${apiid}`)
                        .then(x=>x.json()).then(x=>{setApi([x]) }).catch("Api is not working properly")},[apiid]);
                        // console.log(apiid)
                        // console.log(api)
    return ( <>
               <Header/>

            {api.map((x, k1) => (
                <div key={k1} className="Carous">
                    <h1>{x.name}</h1>
                    <p style={{color:"gray"}}>{x.subtitle}</p>
                    <div >
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                         </div>
                      <div >
                      <div class="carousel-inner">
                       <div class="carousel-item active">
                       <img src={x.images[0]} class="d-block w-100" alt="cauimg" style={{height:"500px",width:"450px"}}/>
                        </div>
                       <div class="carousel-item">
                        <img src={x.images[1]} class="d-block w-100" alt="cauimg" style={{height:"500px",width:"450px"}}/>
                </div>
                  <div class="carousel-item">
                     <img src={x.images[2]} class="d-block w-100" alt="cauimg" style={{height:"500px",width:"450px"}}/>
                  </div>
                       </div>
                      </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
               </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
              </button>
                   </div>
                    
                    </div>
                   
                    <h3 id="carouselH3">About the Experience</h3>
                    <p id="carouselPara">{x.content}</p>
                </div>
            ))}          
        </>);
};
 let Perthby = () => <Goasubcards apiid="8549673097" />;
 let Kenntic = () => <Goasubcards apiid="7536826557" />;
 let Pressal = () => <Goasubcards apiid="0733501601" />;
 let Heathber = () => <Goasubcards apiid="0606744025" />;
 let Plympside = () => <Goasubcards apiid="2621544733" />;
 let Lowtra = () => <Goasubcards apiid="0534597016" />;
 let Chettbou = () => <Goasubcards apiid="7247489857" />;
 let Bucktim = () => <Goasubcards apiid="6710850298" />;
 let Ntibran = () => <Goasubcards apiid="9312138770" />;
 let Warflin = () => <Goasubcards apiid="5915383379" />;

export {Perthby,Kenntic,Pressal,Heathber,Plympside,Lowtra,Chettbou,Bucktim,Ntibran,Warflin}