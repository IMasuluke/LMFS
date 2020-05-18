import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { Box, Container } from 'react-layout-components';
import MenuIcon from '@material-ui/icons/Menu';

import {Link} from 'react-router-dom';

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
      <Container className="highindex">    
          <header className="Header">
          <img src={require("../Assets/livinglogo.png")} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <Link to="/">Home</Link>
          <Link to="/Plans">Plans</Link>
          <Link to="/About">Gallery</Link>
          <Link to="/Contact">Contact us</Link>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <MenuIcon/>
      </button>
    </header>
   <hr className='affix' />
    </Container>
  );
}
