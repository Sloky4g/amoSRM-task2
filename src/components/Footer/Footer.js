import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className={"footer"}>
      <div className={"footer_container"}>
        <div className={"footer-company_item"}>
          <h3 className={"footer-item_title"}>О компании</h3>
          <div className={"footer-item_links_container"}>
            <Link className={"footer-item_link"} to={"/"}>Партнёрская программа</Link>
            <Link className={"footer-item_link"} to={"/"}>Вакансии</Link>
          </div>
        </div>
        <div className={"footer-menu_item"}>
          <h3 className={"footer-item_title"}>Меню</h3>
          <div className={"footer-item-menu_container"}>
            <div className={"footer-item_links_container"}>
              <Link className={"footer-item_link"} to={"/"}>Расчёт стоимости</Link>
              <Link className={"footer-item_link"} to={"/"}>Услуги</Link>
              <Link className={"footer-item_link"} to={"/"}>Виджеты</Link>
              <Link className={"footer-item_link"} to={"/"}>Интеграции</Link>
              <Link className={"footer-item_link"} to={"/"}>Наши клиенты</Link>
            </div>
            <div className={"footer-item_links_container"}>
              <Link className={"footer-item_link"} to={"/"}>Кейсы</Link>
              <Link className={"footer-item_link"} to={"/"}>Благотворительные письма</Link>
              <Link className={"footer-item_link"} to={"/"}>Сертификаты</Link>
              <Link className={"footer-item_link"} to={"/"}>Блог на Youtube</Link>
              <Link className={"footer-item_link"} to={"/"}>Вопрос / Ответ</Link>
            </div>
          </div>
        </div>
        <div className={"footer-contacts_item"}>
          <h3 className={"footer-item_title"}>Контакты</h3>
          <div className={"footer-contacts_item_container"}>
            <a className={"footer-contact_phone"} href="tel:7-555-555-5555">+7 555 555-55-55</a>
            <div className={"footer-contacts_item-social_container"}>
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
            <p className={"footer-contact_address"}>Москва, Путевой проезд 3с1, к 902</p>
          </div>
        </div>
      </div>
      <div className={"footer_copyright"}>
        <p className={"footer_copyright_text"}>@WELBEK 2022. Все права защищены.</p>
        <Link className={"footer_copyright_link"} to={"/"}>Политика конфиденциальности</Link>
      </div>
    </footer>
  )
}