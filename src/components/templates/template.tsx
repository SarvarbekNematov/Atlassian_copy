import { RightIcon } from "../../assets";
import { TemplatedataArr } from "../../data";

import "./template.css";

const Template = () => {
  return (
    <div className="template">
      <h4 className="template__title">Get started with a template</h4>
      <div className="template__list-wrapper">
        {/* Template item list */}
        <ul className="template__list">
          {TemplatedataArr.map((item, index) => (
            <li key={index} className="template__item">
              {/* Image for template */}
              <img className="template__img" src={item.url} alt={item.title} />

              {/* Wrapper for text content */}
              <div className="template__wrapper">
                {/* Template Title */}
                <h5 className="template__sub-title">{item.title}</h5>

                {/* Template Description */}
                <p className="template__desc">{item.desc}</p>

                {/* Link to try out the template */}
                <a className="template__link" href="">
                  Try it out <RightIcon />
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
