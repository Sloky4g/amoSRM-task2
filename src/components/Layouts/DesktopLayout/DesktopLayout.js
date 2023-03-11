import React from "react";
import DesktopHeader from "../../Header/DesktopHeader/DesktopHeader";
import Footer from "../../Footer/Footer";
import "./DesktopLayout.css";

export default function DesktopLayout() {
  return (
    <div className={"desktop_layout"}>
      <img className={"desktop_layout-bg_img"} src={"/img/main-bg.png"} alt={"main-bg-img"}/>
      <div className={"container"}>
        <DesktopHeader/>
        <Footer/>
      </div>
    </div>
  )
}