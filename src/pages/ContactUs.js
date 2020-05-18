import React from 'react';
import '../App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Components/Header.css';
import {Link} from 'react-router-dom';

function Contact() {
  return (
    <div className='App'>
      <Header />
      <div className='Center'>
        <img src={require("../Assets/livinglogo.png")} className="LogoHome" />
        <h1 className="LivingHome">LIVING MEMORIES</h1>
        <h3 className="ServiceHome">Funeral Services</h3>
        <div>
        <h1 className="HomeHeading">Contact Us</h1>
        <h2 className="HomeSecondHeading">PHALABORWA : HEAD OFFICE</h2>
        <p className="HomeText"> Office No.7, Mellor Avenue
        </p>
        <p className="HomeText"> Extension Town, Next To Taxi Rank
        </p>
        <p className="HomeText"> 015 781 0266
        </p>
        <p className="HomeText"> Email: admin@livingmemories.co.za
        </p>
        <h2 className="HomeSecondHeading">GIYANI BRANCH</h2>
        <p className="HomeText"> Office No.10, Tiveka Bukuta Complex, 
        </p>
        <p className="HomeText"> Opposite Masingita Garage, Giyani
        </p>
        <p className="HomeText"> Malamulele Main Road,
        </p>
        <p className="HomeText"> P O Box 1121, Giyani,0826
        </p>
        <p className="HomeText"> 015 812 0830
        </p>
        <h2 className="HomeSecondHeading">MALAMULELE BRANCH</h2>
        <p className="HomeText"> Office No.03, Next To Malamulele Hospital, 
        </p>
        <p className="HomeText"> P O Box 14, Malamulele,0982
        </p>
        <p className="HomeText"> Cell: 073 491 5017/ 060 673 9340
        </p>
        <h2 className="HomeSecondHeading">BUSHBUCKRIDGE BRANCH</h2>
        <p className="HomeText"> Stand No.303, Main Road Vaxumi Center
        </p>
        <p className="HomeText"> Office No. 4, Thulamahashe Next To Post Office  </p>
        <p className="HomeText"> Cell: 060 763 8139/ 071 063 4377
        </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;