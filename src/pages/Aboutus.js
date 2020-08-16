import React from 'react';
import '../App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Components/Header.css';
import {Link} from 'react-router-dom';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

const IMAGES =
[{
        src: require("../Assets/Gallery/1.jpg"),
        thumbnail: require("../Assets/Gallery/1.jpg"),
        thumbnailWidth: 300,
        thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/2.jpg"),
  thumbnail: require("../Assets/Gallery/2.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},

{
  src: require("../Assets/Gallery/3.jpg"),
  thumbnail: require("../Assets/Gallery/3.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/4.jpg"),
  thumbnail: require("../Assets/Gallery/4.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/5.jpg"),
  thumbnail: require("../Assets/Gallery/5.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/6.jpg"),
  thumbnail: require("../Assets/Gallery/6.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/7.jpg"),
  thumbnail: require("../Assets/Gallery/7.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/8.jpg"),
  thumbnail: require("../Assets/Gallery/8.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/9.jpg"),
  thumbnail: require("../Assets/Gallery/9.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/10.jpg"),
  thumbnail: require("../Assets/Gallery/10.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/11.jpg"),
  thumbnail: require("../Assets/Gallery/11.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/12.jpg"),
  thumbnail: require("../Assets/Gallery/12.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/13.jpg"),
  thumbnail: require("../Assets/Gallery/13.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/14.jpg"),
  thumbnail: require("../Assets/Gallery/14.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/15.jpg"),
  thumbnail: require("../Assets/Gallery/15.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/16.jpg"),
  thumbnail: require("../Assets/Gallery/16.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/17.jpg"),
  thumbnail: require("../Assets/Gallery/17.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/18.jpg"),
  thumbnail: require("../Assets/Gallery/18.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/19.jpg"),
  thumbnail: require("../Assets/Gallery/19.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/20.jpg"),
  thumbnail: require("../Assets/Gallery/20.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/21.jpg"),
  thumbnail: require("../Assets/Gallery/21.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/22.jpg"),
  thumbnail: require("../Assets/Gallery/22.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/23.jpg"),
  thumbnail: require("../Assets/Gallery/23.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/24.jpg"),
  thumbnail: require("../Assets/Gallery/24.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/25.jpg"),
  thumbnail: require("../Assets/Gallery/25.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/26.jpg"),
  thumbnail: require("../Assets/Gallery/26.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/27.jpg"),
  thumbnail: require("../Assets/Gallery/27.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,

},
{
  src: require("../Assets/Gallery/28.jpg"),
  thumbnail: require("../Assets/Gallery/28.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/29.jpg"),
  thumbnail: require("../Assets/Gallery/29.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
{
  src: require("../Assets/Gallery/30.jpg"),
  thumbnail: require("../Assets/Gallery/30.jpg"),
  thumbnailWidth: 300,
  thumbnailHeight: 170,
},
]
function About() {
  return (
    <div className='App'>
      <Header />
      <div className='Center'>
        <img src={require("../Assets/livinglogo.png")} className="LogoHome" />
        <h1 className="LivingHome">LIVING MEMORIES</h1>
        <h3 className="ServiceHome">Funeral Services</h3>
        <hr className="GoldenLine"></hr>
        <div>
        <h1 className="HomeHeading">Gallery</h1>
        <div style={{ display: "flex",
        flexDirection: "column",
        marginTop: "10px"}}>
         <div style={{
                    display: "block",
                    minHeight: "1px",
                    marginLeft: "1%",
                    marginRight: "1%",
                    width: "98%",
                    border: "1px solid #ddd",
                    }}>
                <Gallery
            images={IMAGES}
            style={{marginTop: 300}}
            enableLightbox={true}
            backdropClosesModal={true}
            showCloseButton={false}
            enableImageSelection={false}/>
          
                </div>
                
        </div>
       
        </div>
      </div> 
        <Footer></Footer>
    </div>
  );
}

export default About;