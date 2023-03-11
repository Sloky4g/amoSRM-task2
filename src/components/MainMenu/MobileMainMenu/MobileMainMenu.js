import React from "react";
import {Link} from "react-router-dom";
import "./MobileMainMenu.css";

export default function MobileMainMenu() {
  return (
    <div className={"mobile_container"}>
      <nav className={"mobile_main_menu"}>
        <Link to={"/"}>Услуги</Link>
        <Link to={"/"}>Виджеты</Link>
        <Link to={"/"}>Интеграции</Link>
        <Link to={"/"}>Кейсы</Link>
      </nav>
    </div>
  )
}