import {
  HeroSvg,
  RightIcon,
  StrategyIcon,
} from "../../assets";
import { modalData } from "../../data";

import './solution.css';

interface SolutionModalProps {
  active: number;
}

const SolutionModal = ({ active }: SolutionModalProps) => {
  return (
    <div className="solution__modal">
      <div className={`solution__wrapper ${active === 2 ? "solution__active" : ""}`}>
        <div className="solution__sub-wrapper">
          <div className="featured__sub-wrapper solution__box">
            <div className="featured__card">
              <span className="featured__icon-wrapper">
                <HeroSvg />
              </span>
              <p className="featured__desc-card">
                Apps and agents to supercharge teamwork
              </p>
              <ul className="featured__card-list">
                {modalData[0].map((item) => (
                  <li key={item.title} className="featured__card-item">
                    <span className="featured__card-icon">{item.icon}</span>
                    <p className="featured__card-title">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="featured__card">
              <span className="featured__icon-wrapper">
                <StrategyIcon />
              </span>
              <p className="featured__desc-card">
                Powerful apps to optimize strategy
              </p>
              <ul className="featured__card-list">
                {modalData[1].map((item) => (
                  <li key={item.title} className="featured__card-item">
                    <span className="featured__card-icon">{item.icon}</span>
                    <p className="featured__card-title">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="featured__footer">
              <h4 className="featured__footer-title">Atlassian Cloud Platform</h4>
              <p className="featured__footer-desc">
                The connected foundation of your system of work
              </p>
              <a className="featured__footer-link" href="#">
                Learn more <RightIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="solution__footer">
          <div className="solution__list">
            <ul className="solution__item">
              <span className="solution__title">BY TEAM TYPE</span>
              <li>Software</li>
              <li>Marketing</li>
              <li>IT</li>
            </ul>
            <ul className="solution__item">
              <span className="solution__title">BY SOLUTION</span>
              <li>IT Service Management</li>
              <li>Agile & DevOps</li>
            </ul>
            <ul className="solution__item">
              <span className="solution__title">BY TEAM SIZE</span>
              <li>Enterprise</li>
              <li>Small Business</li>
              <li>Startup</li>
              <li>Non-profit</li>
            </ul>
            <ul className="solution__item">
              <span className="solution__title">BY INDUSTRY</span>
              <li>Retail</li>
              <li>Telecommunications</li>
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
