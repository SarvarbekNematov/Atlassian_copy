import { useState } from "react";
import { SubLogo } from "../assets/icons";

import "./footer.css";

const Footer = () => {
  const [selected, setSelected] = useState("js");

  const options = [
    { label: "English", value: "english" },
    { label: "Deutsch", value: "deutsch" },
  ];
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__list">
          <div>
            <span className="footer__logo-wrapper">
              <SubLogo />
            </span>
            <ul className="footer__item-wrapper">
              <li className="footer__text">
                <a href="">Company</a>{" "}
              </li>
              <li className="footer__text">
                <a href="">Careers</a>{" "}
              </li>
              <li className="footer__text">
                <a href="">Events</a>{" "}
              </li>
              <li className="footer__text">
                <a href="">Blogs</a>{" "}
              </li>
              <li className="footer__text">
                <a href="">Investor Relations</a>{" "}
              </li>
              <li className="footer__text">
                <a href="">Attlasian Foundation</a>{" "}
              </li>
              <li className="footer__text">
                <a href="">Contact us</a>{" "}
              </li>
            </ul>
          </div>
          <div>
            <strong className="footer__title">
              <a href="">PRODUCTS</a>{" "}
            </strong>
            <ul className="footer__item-wrapper">
              <li>
                <a href="">Rovo</a>{" "}
              </li>
              <li>
                <a href="">Jira</a>{" "}
              </li>
              <li>
                <a href="">Jira Align</a>{" "}
              </li>
              <li>
                <a href="">Jira Service Management</a>{" "}
              </li>
              <li>
                <a href="">Confluence</a>{" "}
              </li>
              <li>
                <a href="">Trello</a>{" "}
              </li>
              <li>
                <a href="">Bitbucket</a>{" "}
              </li>
            </ul>
            <p className="footer__link">
              <a href="">See all products</a>{" "}
            </p>
          </div>
          <div>
            <strong className="footer__title">
              <a href="">RESOURCES</a>{" "}
            </strong>
            <ul className="footer__item-wrapper">
              <li>
                <a href="">Technical support</a>{" "}
              </li>
              <li>
                <a href="">Purchasing & licensing</a>{" "}
              </li>
              <li>
                <a href="">Atlassian Community</a>{" "}
              </li>
              <li>
                <a href="">Knowledge base</a>{" "}
              </li>
              <li>
                <a href="">Marketplace</a>{" "}
              </li>
              <li>
                <a href="">My account</a>{" "}
              </li>
            </ul>
            <p className="footer__link">
              <a href="">Create support ticket</a>{" "}
            </p>
          </div>
          <div>
            <strong className="footer__title">
              <a href="">LEARN</a>{" "}
            </strong>
            <ul className="footer__item-wrapper">
              <li>
                <a href="">Partners</a>{" "}
              </li>
              <li>
                <a href="">Training & certification</a>{" "}
              </li>
              <li>
                <a href="">Documentation</a>{" "}
              </li>
              <li>
                <a href="">Developer resources</a>{" "}
              </li>
              <li>
                <a href="">Enterprise services</a>{" "}
              </li>
            </ul>
            <p className="footer__link">
              <a href="">See all resources</a>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="finished__wrapper">
        <p className="finished__title">Copyright © 2025 Atlassian</p>
        <div className="finished__box">
          <div className="finished__text-wrapper">
            <p>Privacy policy</p>
          <p>Terms</p>
          <p>Impressum</p>
          </div>
          
          <div>
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                   {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
