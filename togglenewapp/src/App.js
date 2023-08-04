import React, { useState } from "react";
import "./Styles.css";
import styled, { createGlobalStyle } from "styled-components";
//import { isDebuggerStatement } from "typescript";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F5F5F5;
    color: white;
  }
`;

const Toggle = styled.button`
  width: 100px;
  height: 50px;
  position: relative;
  cursor: pointer;
  border-radius: 25px;
  outline: none;
  background-color: ${(props) => (props.on ? "#4cd137" : "#353b48")};
  border: 3px solid white;

  &::after {
    content: "";
    position: absolute;
    top: 3.5px;
    will-change: transform;
    transform: translate(${(props) => (props.on ? 5.5 : -44)}px);
    transition: transform 0.2s ease-out;
    width: 35px;
    height: 35px;
    background: white;
    border: 2px solid #7f8fa6;
    outline: none;
    border-radius: 50%;
  }
`;

const App = () => {
  const [t1, setT1] = useState(false);
  const [t2, setT2] = useState(false);
  const [t3, setT3] = useState(false);

  const toggleClick =()=>{debugger;
    
    setT1(!t1);
    if(!t1)
    {
      setT3(false);
    }  
  }
  const toggleClick2 =()=>{debugger;
    
    setT2(!t2);
    if(!t2)
    {
      setT1(false);
    }
  }
  const toggleClick3 =()=>{debugger;
    
    setT3(!t3);
    if(!t3)
    {
      setT2(false);
    }  
  }

  return (
    <div className="App">
      <GlobalStyle />     
      <br/>
      <br/>
      <div className="container" style={{width:"300px", textAlign:"left"}}>
      <Toggle on={t1} onClick={toggleClick} id="button1" />
          <GlobalStyle /><span  style={{ color: "black" }}>
            <strong style={{fontSize: "30px", padding:"15px 0 0", display: "inline-block",
position: "relative", top: "10px",left: "42px"}}>GOOD</strong></span>
          </div>
          <div className="container" style={{width:"300px", textAlign:"left"}}> 
            <br/>
          
      <Toggle on={t2} onClick={toggleClick2} id="button2"/>
      <span style={{ color: "black" }}>
        <strong style={{fontSize: "30px", padding:"15px 0 0", display: "inline-block",
position: "relative", top: "10px",left: "42px"}}>FAST</strong></span>
      </div>
          <div className="container" style={{width:"300px", textAlign:"left"}}>
          <br/>
      
      <Toggle on={t3} onClick={toggleClick3} id="button3"/>
      <span style={{ color: "black" }}>
        <strong style={{fontSize: "30px", padding:"15px 0 0", display: "inline-block",
position: "relative", top: "10px",left: "42px"}}>CHEAP</strong></span>
          </div>
          </div> 
  );
};

 export default App;