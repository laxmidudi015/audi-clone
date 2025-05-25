import React from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from "react-router-dom";
// import Navbar from './Components/Navbar'
import Home from "./Pages/Home";
import Modal from "./Components/Modal";
import Layout from "./Layout";
import Page404 from "./Pages/Page404";
import Dealerspage from "./Pages/Dealerspage";
import AudiModelsPage from "./Pages/AudiModelsPage";
import "@fontsource/source-sans-pro/300.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-sans-pro/700.css";
import "./App.css";
// import 'animate.css';
function App() {
  
useEffect(() => {
  AOS.init({
    duration: 1700, // animation duration (in ms)
    // once: true,     // animation will happen only once
  });
}, []);
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="modal" element={<Modal />} />
          <Route path="models" element={<AudiModelsPage/>}/>
          <Route path="map" element={<Dealerspage/>}  />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
