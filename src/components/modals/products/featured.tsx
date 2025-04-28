import { HeroSvg, RightIcon, StrategyIcon } from "../../../assets";
import { modalData } from "../../../data";

import "./featured.css";

const FeaturedModal = () => {
  return (
    <div className="featured__wrapper">
      <h4 className="featured__title">
        Atlassian Collections <span>NEW</span>
      </h4>

      <p className="featured__desc">
        A curated set of apps designed to solve your specific challenges
      </p>

      <div className="featured__sub-wrapper">
        {/* First Card */}
        <FeaturedCard
          Icon={HeroSvg}
          description="Apps and agents to supercharge teamwork"
          items={modalData[0]}
        />

        {/* Second Card */}
        <FeaturedCard
          Icon={StrategyIcon}
          description="Powerful apps to optimize strategy"
          items={modalData[1]}
        />
      </div>

      <span className="featured__line-wrapper" />

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
  );
};

// Sub Component for Cards
interface FeaturedCardProps {
  Icon: React.FC;
  description: string;
  items: { icon: React.ReactNode; title: string }[];
}

const FeaturedCard = ({ Icon, description, items }: FeaturedCardProps) => {
  return (
    <div className="featured__card">
      <span className="featured__icon-wrapper">
        <Icon />
      </span>

      <p className="featured__desc-card">{description}</p>

      <ul className="featured__card-list">
        {items.map((item) => (
          <li key={item.title} className="featured__card-item">
            <span className="featured__card-icon">{item.icon}</span>
            <p className="featured__card-title">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedModal;
