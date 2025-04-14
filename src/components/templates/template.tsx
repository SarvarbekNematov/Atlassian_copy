import "./template.css";

const dataArr = [
  {
    title: "Scrum",
    desc: "Easily plan, track, and manage work across sprints",
    url: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/87k7qf43q3mb4f37pm766j9r/software-card-1.webp?auto=webp",
  },
  {
    url: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/6s69f99c8n4b4fvxgpgck99b/software-card-2.webp?auto=webp",
    title: "Bug Tracking",
    desc: "Seamlessly report, track, and prioritize bugs to address development issues",
  },
  {
    title: "DevOps",
    desc: "Develop, deploy, and manage applications with an open tools approach",
    url: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/m8btbfgbv9k6b8jr3ff9zpk/software-card-3.webp?auto=webp",
  },
];
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
