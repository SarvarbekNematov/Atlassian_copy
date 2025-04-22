import { dataArr } from "../../data";

import "./template.css";


const Template = () => {
  return (
    <div className="template">
      <h4 className="template_title">Get started with a template</h4>
      <div className="template_block_list">
        <ul className="template_list">
        {dataArr.map((i , index) => (
          <li key={index} className="template_item">
            <img className="template_img" src={i.url} alt="img" />
            <div className="template_block">
              <h5 className="template_sub_title">{i.title}</h5>
              <p className="template_desc">{i.desc}</p>
              <a className="template_link" href="">
                Try it out
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
