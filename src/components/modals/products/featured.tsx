import {
  HeroSvg,
  RightIcon,
  StrategyIcon,
} from "../../../assets";
import { modalData } from "../../../data";

import "./featured.css";

const FeaturedModal = () => {
  return (
    <div>
      <div className="featured__wrapper">
        <h4 className="featured__title">
          Atlassian Collections <span>NEW</span>{" "}
        </h4>

        <p className="featured__desc">
          A curated set of apps designed to solve your specific challenges
        </p>

        <div className="featured__sub-wrapper">
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
        </div>

        <span className="featured__line-wrapper"></span>

        <div className="featured__footer">
          <h4 className="featured__footer-title">Atlassian Cloud Platform</h4>
          <p className="featured__footer-desc">
            The connected foundation of your system of work
          </p>
          <a className="featured__footer-link" href="">
            Learn more <RightIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedModal;
