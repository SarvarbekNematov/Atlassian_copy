import { useState } from "react";
import { SubLogo } from "../assets/icons"; // Importing logo component

import "./footer.css";

const Footer = () => {
  // State for selected language
  const [selected, setSelected] = useState("js");

  // Options for the language select dropdown
  const options = [
    { label: "English", value: "english" },
    { label: "Deutsch", value: "deutsch" },
  ];

  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__list">
          {/* First Column: Logo and company links */}
          <div>
            <span className="footer__logo-wrapper">
              {/* Displaying the logo */}
              <SubLogo />
            </span>
            <ul className="footer__item-wrapper">
              {/* List of company related links */}
              <li className="footer__text"><a href="">Company</a></li>
              <li className="footer__text"><a href="">Careers</a></li>
              <li className="footer__text"><a href="">Events</a></li>
              <li className="footer__text"><a href="">Blogs</a></li>
              <li className="footer__text"><a href="">Investor Relations</a></li>
              <li className="footer__text"><a href="">Atlassian Foundation</a></li>
              <li className="footer__text"><a href="">Contact us</a></li>
            </ul>
          </div>

          {/* Second Column: Products list */}
          <div>
            <strong className="footer__title">
              <a href="">PRODUCTS</a>
            </strong>
            <ul className="footer__item-wrapper">
              {/* List of product links */}
              <li><a href="">Rovo</a></li>
              <li><a href="">Jira</a></li>
              <li><a href="">Jira Align</a></li>
              <li><a href="">Jira Service Management</a></li>
              <li><a href="">Confluence</a></li>
              <li><a href="">Trello</a></li>
              <li><a href="">Bitbucket</a></li>
            </ul>
            <p className="footer__link">
              <a href="">See all products</a>
            </p>
          </div>

          {/* Third Column: Resources list */}
          <div>
            <strong className="footer__title">
              <a href="">RESOURCES</a>
            </strong>
            <ul className="footer__item-wrapper">
              {/* List of resource-related links */}
              <li><a href="">Technical support</a></li>
              <li><a href="">Purchasing & licensing</a></li>
              <li><a href="">Atlassian Community</a></li>
              <li><a href="">Knowledge base</a></li>
              <li><a href="">Marketplace</a></li>
              <li><a href="">My account</a></li>
            </ul>
            <p className="footer__link">
              <a href="">Create support ticket</a>
            </p>
          </div>

          {/* Fourth Column: Learn section */}
          <div>
            <strong className="footer__title">
              <a href="">LEARN</a>
            </strong>
            <ul className="footer__item-wrapper">
              {/* List of learning-related links */}
              <li><a href="">Partners</a></li>
              <li><a href="">Training & certification</a></li>
              <li><a href="">Documentation</a></li>
              <li><a href="">Developer resources</a></li>
              <li><a href="">Enterprise services</a></li>
            </ul>
            <p className="footer__link">
              <a href="">See all resources</a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="finished__wrapper">
        <p className="finished__title">Copyright © 2025 Atlassian</p>

        {/* Footer links and language selector */}
        <div className="finished__box">
          <div className="finished__text-wrapper">
            {/* Privacy policy, Terms, and Impressum links */}
            <p>Privacy policy</p>
            <p>Terms</p>
            <p>Impressum</p>
          </div>

          <div>
            {/* Language select dropdown */}
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
