import React from 'react';
import '../App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Components/Header.css';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('16-64', 20, 40, 50, 70),
  createData('65-74', 40, 60, 110, 150),
  createData('75-84', 60, 100, 120, 150),
  createData('85-100', 110, 150, 170, 230),
];



function Plans() {
  const classes = useStyles();

  return (
    <div className='App'>
      <Header />
      <div className='Center'>
        <img src={require("../Assets/livinglogo.png")} className="LogoHome" />
        <h1 className="LivingHome">LIVING MEMORIES</h1>
        <h3 className="ServiceHome">Funeral Services</h3>
        <hr className="GoldenLine"></hr>
        <div className="flex-container">
          {/*<img src={require("../Assets/Gallery/1.jpg")} />
        <img src={require("../Assets/Gallery/22.jpg")}  />
        <img src={require("../Assets/Gallery/3.jpg")}  />*/}
        </div>
        <div className="container-flex">
          <div>
            <h2 className="PlansSecondHeading"> PLAN A - ONLY R160.00</h2>
            <p className="PlansText">Covers Main Member and 14 Dependants</p>
            <ul className="ul">
              <li>Caskets and 3 free Tombstones</li>
              <li>Storage</li>
              <li>Hearse</li>
              <li>Family Cars</li>
              <li>Tent</li>
              <li>Graveyard Tent</li>
              <li>Graveyard Decorations</li>
              <li>100 Chairs</li>
              <li>100 Programs</li>
              <li>Free Radio Announcement</li>
            </ul>
            <p className="PlansText">Grocery (80 kg Maize Meal, 10 kg Sugar, 2l Cooking Oil, Cremora, 500g Tea, 10 Loaves White, 10 Loaves Brown or R1000.00 for grocery</p>

            <h2 className="PlansSecondHeading"> PLAN B - ONLY R190.00</h2>
            <p className="PlansText">Covers Main Member and 14 Dependants</p>
            <ul className="ul">
              <li>Caskets and 5 free Tombstones</li>
              <li>Storage</li>
              <li>Hearse</li>
              <li>Family Cars</li>
              <li>Tent</li>
              <li>Graveyard Tent</li>
              <li>Graveyard Decorations</li>
              <li>100 Chairs</li>
              <li>100 Programs</li>
              <li>Free Radio Announcement</li>
            </ul>
            <p className="PlansText">Grocery (80 kg Maize Meal, 10 kg Sugar, 2l Cooking Oil, Cremora, 500g Tea, 10 Loaves White, 10 Loaves Brown or R1000.00 for grocery</p>
          </div>
          <div>
            <h2 className="PlansSecondHeading"> PLAN C - ONLY R200.00</h2>
            <p className="PlansText">Covers Main Member and 11 Dependants</p>
            <ul className="ul">
              <li>Casket and 12 free Tombstones</li>
              <li>Storage</li>
              <li>Hearse</li>
              <li>Family Cars</li>
              <li>Tent</li>
              <li>Graveyard Tent</li>
              <li>Graveyard Decorations</li>
              <li>100 Chairs</li>
              <li>100 Programs</li>
              <li>Free Radio Announcement</li>
            </ul>
            <p className="PlansText">Grocery (80 kg Maize Meal, 10 kg Sugar, 2l Cooking Oil, Cremora, 500g Tea, 10 Loaves White, 10 Loaves Brown or R1000.00 for grocery</p>
            <h2 className="PlansSecondHeading"> PLAN D - ONLY R270.00</h2>
            <p className="PlansText">Covers Main Member and 9 Dependants</p>
            <ul className="ul">
              <li>Caskets and free Tombstones</li>
              <li>Storage</li>
              <li>Hearse</li>
              <li>Family Cars</li>
              <li>Tent</li>
              <li>Graveyard Tent</li>
              <li>Graveyard Decorations</li>
              <li>100 Chairs</li>
              <li>100 Programs</li>
              <li>Free Radio Announcement</li>
            </ul>
          </div>
          <div>
            <h2 className="PlansSecondHeading">  PLAN E - ONLY R320.00</h2>
            <p className="PlansText">Covers Main Member and 9 Dependants</p>
            <ul className="ul">
              <li>Caskets</li>
              <li>Storage</li>
              <li>Hearse</li>
              <li>Family Cars</li>
              <li>Tent</li>
              <li>Graveyard Tent</li>
              <li>Graveyard Decorations</li>
              <li>100 Chairs</li>
              <li>100 Programs</li>
              <li>Free Radio Announcement</li>
            </ul>
            <p className="PlansText">Grocery (80 kg Maize Meal, 10 kg Sugar, 2l Cooking Oil, Cremora, 500g Tea, 10 Loaves White, 10 Loaves Brown or R1000.00 for grocery</p>
            <p></p>

            <p className="PlansText">IF WE DO NOT RENDER SERVICE YOU CLAIM THE FOLLOWING:</p>
            <ol className="ul-none">
              <li>PLAN A: R 1000.00</li>
              <li>PLAN B: R 1500.00</li>
              <li>PLAN C: R 3000.00</li>
              <li>PLAN D: R 2000.00</li>
              <li>PLAN E: R 3000.00</li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Plans;