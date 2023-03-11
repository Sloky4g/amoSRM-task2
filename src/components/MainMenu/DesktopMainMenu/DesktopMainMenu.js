import React from "react";
import {Link} from "react-router-dom";
import "./DesktopMainMenu.css";

export default function DesktopMainMenu() {
  return (
    <div className={"main_menu"}>
      <div className={"main_menu_container"}>
        <div className={"main_menu-nav_container"}>
          <Link to={"/"} className={"main_menu-nav-logo_container"}>
            <img src="/img/header/logo_welbex.png" alt="logo"/>
          </Link>
          <nav className={"main_menu-nav"}>
            <Link to="/">Услуги</Link>
            <Link to="/">Виджеты</Link>
            <Link to="/">Интеграции</Link>
            <Link to="/">Кейсы</Link>
            <Link to="/">Сертификаты</Link>
          </nav>
        </div>
        <div className={"main_menu-contacts_container"}>
          <div className={"main_menu-contacts"}>
            <a href="tel:7-555-555-5555">+7 555 555-55-55</a>
            <div className={"main_menu-contacts-social_media_container"}>
              <a href="/" target={"_blank"}>
                <img src="/img/header/telegram.svg" alt="social-icon"/>
              </a>
              <a href="/" target={"_blank"}>
                <img src="/img/header/viber.svg" alt="social-icon"/>
              </a>
              <a href="/" target={"_blank"}>
                <img src="/img/header/whatsapp.svg" alt="social-icon"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={"main_menu-text"}>
        крупный интегратор CRM в России и ещеё 8 странах
      </div>
    </div>
  )
}