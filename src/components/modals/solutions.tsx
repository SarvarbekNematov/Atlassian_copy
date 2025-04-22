import {
  HeroSvg,
  RightIcon,
  StrategyIcon,
} from "../../assets";
import { modalData } from "../../data";

import './solution.css'


const SolutionModal = (props: { active: number }) => {
  return (
    <div className="modal_slution">
      <div className={`solution_block ${props.active === 2 ? "activeSolution" : ""}`}>
        <div className="solution_sub_block">
          <div className="featured_sub_block solution_box">
            <div className="featured_card">
              <span className="featured_icon_block">
                <HeroSvg />
              </span>
              <p className="featured_desc_card">
                Apps and agents to supercharge teamwork
              </p>
              <ul className="featured_card_list">
                {modalData[0].map((item) => (
                  <li key={item.title} className="featured_card_item">
                    <span className="featured_card_icon">{item.icon}</span>
                    <p className="featured_card_title">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="featured_card">
              <span className="featured_icon_block">
                <StrategyIcon />
              </span>
              <p className="featured_desc_card">
                Powerful apps to optimize strategy
              </p>
              <ul className="featured_card_list">
                {modalData[1].map((item) => (
                  <li key={item.title} className="featured_card_item">
                    <span className="featured_card_icon">{item.icon}</span>
                    <p className="featured_card_title">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="featured_box">
              <h4 className="featured_sub_title">Atlassian Cloud Platform</h4>
              <p className="featured_sub_desc">
                The connected foundation of your system of work
              </p>
              <a className="featured-link" href="">
                Learn more <RightIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="solution_footer">
          <div className="solution_list">
            <ul className="solution_item">
              <span className="solution_title">BY TEAM TYPE</span>
              <li>Software</li>
              <li>Marketing</li>
              <li>IT</li>
            </ul>
            <ul className="solution_item">
              <span className="solution_title">BY SOLUTION</span>
              <li>IT Service Management</li>
              <li>Agile & DevOps</li>
            </ul>
            <ul className="solution_item">
              <span className="solution_title">BY TEAM SIZE</span>
              <li>Enterprise</li>
              <li>Small Business</li>
              <li>Startup</li>
              <li>Non-profit</li>
            </ul>
            <ul className="solution_item">
              <span className="solution_title">BY INDUSTRY</span>
              <li>Retail</li>
              <li>Telecommunications </li>
              <li>Professional service</li>
              <li>Government</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionModal;
