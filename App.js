import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import "./App.css";


function App(){
  return(
    <div className="basic">
    <div className="marginTop"></div>
    <div className="header">
      <div className="header-title">PotG</div>
      <img
        className="logo"
        src="https://www.danburymint.co.uk/dw/image/v2/BDZH_PRD/on/demandware.static/-/Sites-full-catalog/default/dw6bc76005/images/hi-res/sticky-situation-mouse_UK-SSMO2_a_main.jpg?sw=1000&sh=1000"
        alt="logo"
      />
    </div>
    <div className="body">
    <Button
      label="내 동승"
      styleClass="btn"
      onClick={()=>{
        alert('클릭!');
      }}
      disabled={false}
    />
    <Button
      label="동승 참여하기"
      styleClass="btn"
      onClick={()=>{
        alert('클릭!');
      }}
      disabled={false}
    />
    </div>
  </div>
    
  );

}

export default App;