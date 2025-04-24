import { RightIcon } from "../../assets";
import { TemplatedataArr } from "../../data";

import "./template.css";

const Template = () => {
  return (
    <div className="template">
      <h4 className="template__title">Get started with a template</h4>
      <div className="template__list-wrapper">
        <ul className="template__list">
        {TemplatedataArr.map((i , index) => (
          <li key={index} className="template__item">
            <img className="template__img" src={i.url} alt="img" />
            <div className="template__wrapper">
              <h5 className="template__sub-title">{i.title}</h5>
              <p className="template__desc">{i.desc}</p>
              <a className="template__link" href="">
                Try it out <RightIcon/>
              </a>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Template;
