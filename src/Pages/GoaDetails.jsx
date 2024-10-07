import React,{Component} from "react";
import Header from "../Component/QtripHeader";
export default class Goadetail extends Component{
    constructor(props){
        super(props)
        this.state={
            data:"",
            imgsrc:[]
        }
    }
    componentDidMount(){
        fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=8549673097`).then(x=>x.json()).then(x=>{
            this.setState({data:x});
            this.setState({imgsrc:x.images})
        }).catch(console.log("Api is not working properly")
        )  
    }
    render(){
        console.log(this.state.data);
        console.log(this.state.imgsrc);
       
        return(
            <>
            <Header/>
            <div className="Carous" >
                           <h1>{this.state.data.name}</h1>
                           <p style={{color:"gray"}}>{this.state.data.subtitle}</p>
                           <div style={{height:"300px",width:"100%"}}>
                           <div id="carouselExample" class="carousel slide">
                           <div class="carousel-inner">
                           {this.state.imgsrc.map(x=>{
                                    return(
                                             <>
                    <div class="carousel-item active">
                            <img src={x} class="d-block w-100" alt="Begimg" style={{height:"500px",width:"450px"}}/>
                    </div>
                    </>
                )
              })}
             </div>
             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Previous</span>
             </button>
             <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
              </button>
               </div>
                </div>
            <div
            style={{
                position:"absolute",
                top:"100%"
            }}>
            <h1>About the Experience</h1>
            <p>{this.state.data.content}</p>
            </div>
    </div>
            </>
        )
    }
}









































// import React,{Component} from "react";
// import Header from "../Component/QtripHeader";
// //import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// //import { Carousel } from 'react-responsive-carousel';
// export default class Goadetail extends Component{
//     render(){
//         return(
//             <>
//             <Header/>
//             <div className="Carous">
//                 <h1>Niaboytown</h1>
//                 <p style={{color:"gray"}}>This is a mind-blowing adventure!</p>
//                 <div style={{height:"300px",width:"100%"}}>
//                 <div id="carouselExample" class="carousel slide">
//                <div class="carousel-inner">
//               <div class="carousel-item active">
//                <img src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="d-block w-100" alt="Begimg"/>
//                   </div>
//                   <div class="carousel-item">
//                  <img src="https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="d-block w-100" alt="Begimg"/>
//                    </div>
//                  <div class="carousel-item">
//                    <img src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"  class="d-block w-100" alt="Begimg"/>
//                      </div>
//                              </div>
//                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                <span class="visually-hidden">Previous</span>
//                  </button>
//              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//               <span class="visually-hidden">Next</span>
//               </button>
//                </div>
//                 </div>
//             <div
//             style={{
//                 position:"absolute",
//                 top:"100%"
//             }}>
//             <h1>About the Experience</h1>
//             <p>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.</p>
//             </div>
//     </div>

//             </>
//         )
//     }
// }


