import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MobileLayout from "../components/Layouts/MobileLayout/MobileLayout";
import DesktopLayout from "../components/Layouts/DesktopLayout/DesktopLayout";

export default function MasterRoute() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={isMobile ? <MobileLayout/> : <DesktopLayout/>}/>
      </Routes>
    </BrowserRouter>
  )
}