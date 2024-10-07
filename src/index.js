import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"   
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />   
        <Route path="/menu" element={<Menu />} />
        <Route path="/detail" element={<Detail />} /> 
        <Route path="/goamain" element={<GoaApp/>}/>
        <Route path="/goadetails" element={<Goadetail/>}/>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);



































// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { BrowserRouter, Route,Routes} from "react-router-dom";
// import Menu from "./Pages/Menupage"
// import Main from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//      <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Main />} />   
//         <Route path="/menu" element={<Menu />} />  
//       </Routes>
//     </BrowserRouter>
//      {/* <Lin/> */}
//     <Main />
//     <Menu/>
//   </React.StrictMode>
// );

