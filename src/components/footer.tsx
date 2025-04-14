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
      <div className="footer_block">
        <ul className="footer_list">
          <li>
            <span className="footer_logo_block">
              <SubLogo />
            </span>
            <div className="footer_item_block">
              <strong>
                <a href="">Company</a>{" "}
              </strong>
              <strong>
                <a href="">Careers</a>{" "}
              </strong>
              <strong>
                <a href="">Events</a>{" "}
              </strong>
              <strong>
                <a href="">Blogs</a>{" "}
              </strong>
              <strong>
                <a href="">Investor Relations</a>{" "}
              </strong>
              <strong>
                <a href="">Attlasian Foundation</a>{" "}
              </strong>
              <strong>
                <a href="">Contact us</a>{" "}
              </strong>
            </div>
          </li>
          <li>
            <strong className="footer_title">
              <a href="">PRODUCTS</a>{" "}
            </strong>
            <div className="footer_item_block">
              <p>
                <a href="">Rovo</a>{" "}
              </p>
              <p>
                <a href="">Jira</a>{" "}
              </p>
              <p>
                <a href="">Jira Align</a>{" "}
              </p>
              <p>
                <a href="">Jira Service Management</a>{" "}
              </p>
              <p>
                <a href="">Confluence</a>{" "}
              </p>
              <p>
                <a href="">Trello</a>{" "}
              </p>
              <p>
                <a href="">Bitbucket</a>{" "}
              </p>
            </div>
            <p className="footer_link">
              <a href="">See all products</a>{" "}
            </p>
          </li>
          <li>
            <strong className="footer_title">
              <a href="">RESOURCES</a>{" "}
            </strong>
            <div className="footer_item_block">
              <p>
                <a href="">Technical support</a>{" "}
              </p>
              <p>
                <a href="">Purchasing & licensing</a>{" "}
              </p>
              <p>
                <a href="">Atlassian Community</a>{" "}
              </p>
              <p>
                <a href="">Knowledge base</a>{" "}
              </p>
              <p>
                <a href="">Marketplace</a>{" "}
              </p>
              <p>
                <a href="">My account</a>{" "}
              </p>
            </div>
            <p className="footer_link">
              <a href="">Create support ticket</a>{" "}
            </p>
          </li>
          <li>
            <strong className="footer_title">
              <a href="">LEARN</a>{" "}
            </strong>
            <div className="footer_item_block">
              <p>
                <a href="">Partners</a>{" "}
              </p>
              <p>
                <a href="">Training & certification</a>{" "}
              </p>
              <p>
                <a href="">Documentation</a>{" "}
              </p>
              <p>
                <a href="">Developer resources</a>{" "}
              </p>
              <p>
                <a href="">Enterprise services</a>{" "}
              </p>
            </div>
            <p className="footer_link">
              <a href="">See all resources</a>{" "}
            </p>
          </li>
        </ul>
      </div>
      <div className="footer_end_block">
        <p className="footer_end_title">Copyright © 2025 Atlassian</p>
        <div className="footer_end_sub">
          <div className="footer_end_text_block">
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
