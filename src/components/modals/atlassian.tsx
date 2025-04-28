import { AtlassianData } from "../../data";

import "./atlassian.css";

interface AtlassianModalProps {
  active: number;
}

const AtlassianModal = ({ active }: AtlassianModalProps) => {
  const isActive = active === 3;

  return (
    <div className={`atlassian__modal ${isActive ? "atlassian__modal-active" : ""}`}>
      <div className={`atlassian__wrapper ${isActive ? "atlassian__active" : ""}`}>
        <ul className="atlassian__list">
          {AtlassianData.map((item, index) => (
            <li key={index} className="atlassian__item">
              <a href="#">
                <h4 className="atlassian__title">
                  {item.title}{" "}
                  {item.new && <span className="atlassian__new">{item.new}</span>}
                </h4>
                <p className="atlassian__desc">{item.desc}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AtlassianModal;
