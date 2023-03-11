import React from "react";
import DesktopMainMenu from "../../MainMenu/DesktopMainMenu/DesktopMainMenu";
import "./DesktopHeader.css";

export default function DesktopHeader() {
  return (
    <header className={"header"}>
      <DesktopMainMenu/>
      <div className={"header_container"}>
        <div className={"header_title_container"}>
          <h1 className={"header_title"}>Зарабатывайте больше <br/> <span>с WELBEX</span></h1>
          <p className={"header_subtitle"}>Развиваем и контролируем продажи за вас</p>
        </div>
        <div className={"header_info"}>
          <h2 className={"header_info_text"}>Вместе с <span>бесплатной консультацией</span> мы дарим:</h2>
          <div className={"header_info_container"}>
            <div className={"header_info-item"}>
              <h2 className={"header_info-item_title"}>Виджеты</h2>
              <p className={"header_info-item_text"}>30 готовых <br/> решений</p>
            </div>
            <div className={"header_info-item"}>
              <h2 className={"header_info-item_title"}>Dashboard</h2>
              <p className={"header_info-item_text"}>с показателями <br/> вашего бизнеса</p>
            </div>
            <div className={"header_info-item"}>
              <h2 className={"header_info-item_title"}>Skype аудит</h2>
              <p className={"header_info-item_text"}>отдела продаж <br/> и CRM системы</p>
            </div>
            <div className={"header_info-item"}>
              <h2 className={"header_info-item_title"}>35 дней</h2>
              <p className={"header_info-item_text"}>использования <br/> CRM</p>
            </div>
          </div>
          <button className={"header_info-button"}>Получить консультацию</button>
        </div>
      </div>
    </header>
  )
}