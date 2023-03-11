import React from "react";
import MobileMainMenu from "../../MainMenu/MobileMainMenu/MobileMainMenu";
import "./MobileHeader.css";

export default function MobileHeader() {
  return (
    <header className={"header"}>
      <MobileMainMenu/>
      <div className={"mobile_header_container"}>
        <img className={"mobile_header-bg_img"} src={"/img/mobile-bg.png"} alt={"bg-img"}/>
        <div className={"mobile_container"}>
          <h1 className={"mobile_header_title"}>Зарабатывайте больше <br/> <span>с WELBEX</span></h1>
          <p className={"mobile_header_subtitle"}>Развиваем и контролируем продажи за вас</p>
          <h2 className={"mobile_header_info_text"}>Вместе с <span>бесплатной консультацией</span> мы дарим:</h2>
          <div className={"mobile_header_info_container"}>
            <div className={"mobile_header_info_content"}>
              <p className={"mobile_header_info_item"}>Skype аудит</p>
              <p className={"mobile_header_info_item"}>Dashboard</p>
            </div>
            <div className={"mobile_header_info_content"}>
              <p className={"mobile_header_info_item"}>30 виджетов</p>
              <p className={"mobile_header_info_item"}>Месяц amoCRM</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}