import React from "react";
import "./Home.css";
import Modal from "../Components/Modal"
import Map from './Map'
import Onlinesrv from './Onlinesrv'
import 'animate.css';
import Footer from "./Footer";
function Home() {

 
  return (
    <>
   
      <div className="main-home">
        {/* bcg image */}
        <img src="https://media.audi.com/is/image/audi/country/in/en/assets/home/226624AudiRSQ8LaunchKV1920x1080.jpg?width=1920" alt="" className="rsq8 " />
        {/* overlay */}
        <div className="overlay"></div>
        {/* content */}
        <div>
          {/* text section */}
          <div className="promo-content animate__animated animate__backInLeft">
            <p className="heading">
            Power that packs
            a punch and a smile.</p> 
              <p className="hashtag">#ThisIsAudi</p>
            
            <p className="description">Experience the new Audi RS Q8 performance
            with 640hp.</p>
            <button className="btn-home">Know More</button>
          </div>
        </div>
      </div>
      <Modal/>
      <Map/>
      <Onlinesrv/>
      <Footer/>
    </>
  );
}

export default Home;
