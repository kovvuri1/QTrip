import React, { useEffect, useState } from 'react';
import Header from "../../Component/QtripHeader"



const Kolkatasubcards = ({ apiid }) => {
    const [api, setApi] = useState([]);
   

    useEffect(() => { fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures/detail?adventure=${apiid}`)
                        .then(x=>x.json()).then(x=>{setApi([x]) }).catch(console.log("Api is not working properly")
                        )},[apiid]);
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
// bengaluru
let Niaboytown = () => <Kolkatasubcards apiid="2447910730" />;
 let Fort = () => <Kolkatasubcards apiid="1773524915" />;
 let Wooddaux = () => <Kolkatasubcards apiid="0355034513" />;
 let Bageorge = () => <Kolkatasubcards apiid="2260150453" />;
 let Stonelumhawk = () => <Kolkatasubcards apiid="1921387712" />;
 let Anrncast= () => <Kolkatasubcards apiid="7938812489" />;
 let Shilbluff = () => <Kolkatasubcards apiid="2757195090" />;
 let Shiwood = () => <Kolkatasubcards apiid="3727396712" />;
 let Vyfolk= () => <Kolkatasubcards apiid="2211420097" />;
// kolkata
 let Thton = () => <Kolkatasubcards apiid="8318638903" />;
 let Grandrubou = () => <Kolkatasubcards apiid="3936107807" />;
 let Nesbridge = () => <Kolkatasubcards apiid="8632343612" />;
 let Northgelgoon = () => <Kolkatasubcards apiid="2212680653" />;
 let Lalakechi = () => <Kolkatasubcards apiid="2629332143" />;
 let Annviriningsauk = () => <Kolkatasubcards apiid="2629332143" />;

export {Niaboytown,Vyfolk,Shiwood,Shilbluff,Anrncast,Stonelumhawk,Bageorge,Wooddaux,Fort,Thton,Grandrubou,Nesbridge,Northgelgoon,Lalakechi,Annviriningsauk,}
