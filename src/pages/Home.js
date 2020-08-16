import React from 'react';
import '../App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Components/Header.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='App'>
      <Header />
      <div className='Center'>
        <img src={require("../Assets/livinglogo.png")} className="LogoHome" />
        <h1 className="LivingHome">LIVING MEMORIES</h1>
        <h3 className="ServiceHome">Funeral Services</h3>
        <hr className="GoldenLine"></hr>
        <div className="flex-container">
        <img src={require("../Assets/family1.jpg")} />
        <img src={require("../Assets/family2.jpg")}  />
  <img src={require("../Assets/family4.jpg")}  />
        </div>
        <h1 className="HomeHeading">Funeral Services</h1>
        <p className="HomeText"> LMFS Offers you a range of products that are meant to assist you or your
          family in an event of death. We aspire to ensure funeral services be conducted in a dignified
          manner, that brings peace and comfort to the bereaved families
        </p>
        <p className="HomeText">Funeral costs escalate almost every day. It is imperative that we always prepare 
          ourselves in case of this eventuality. LMFS wants to make it possible for you to or your loved ones
          to pass through this passage of grief without incurring financial loss.
          </p>
        <p className="HomeText"> Waiting period shall be 3 months if the main member is not coming from another society and no waiting period if from another society.
          All financial policies have 6 months waiting period for all accidental deaths
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;