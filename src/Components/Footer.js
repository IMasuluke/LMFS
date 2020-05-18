import React, { useState, useEffect } from "react";
import "./Header.css";
import "../App.css";
import { CSSTransition } from "react-transition-group";
import { Box, Container } from 'react-layout-components';
import CallIcon from '@material-ui/icons/Call';

var style = {
  backgroundColor: "#1a2b5f",
  borderTop: "7px solid #d9a759",
  textAlign: "center",
  position: "static",
  left: "0",
  bottom: "0",
  height: "100px",
  width: "100%",
  marginTop: "100px"
}

function Footer({ children }) {
  return (
      <div style={{backgroundColor: "#1a2b5f"}}>
          <div style={style}>
             <h1 className="FooterHeading">Memories that last forever</h1>
          </div>
      </div>
  )
}

export default Footer