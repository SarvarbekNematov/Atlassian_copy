import {  useLayoutEffect, useRef, useState } from "react";
import "./empower.css";

const LinksArr = [
  {
    name: "Software",
    id: 1,
    title: "Supercharge dev productivity",
    desc: "Plan, track, and release world-class software with the number one software development tool for agile teams",
    url: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/h4mh7krtmbcwgnqsmxp9cpr/software-main.webp?auto=webp&format=png?auto=webp",
    link: "Learn more about Software",
  },
  {
    name: "Product management",
    id: 2,
    title: "Build products like the best of them",
    desc: "Prioritize your most impactful ideas, build roadmaps to engage stakeholders, and plan and track your work with end-to-end visibility",
    url: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/xf833v3hrt9n2smp49b7pr/pm-main.webp?auto=webp",
    link: "",
  },
  {
    name: "Marketing",
    id: 3,
    title: "Bring marketing closer to product",
    desc: "Track your work easily, run cross-functional marketing projects, and remove silos so you deliver real impact.",
    url: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/c7q8xhfvphjwnhm8ffxc66/marketing-main.webp?auto=webp",
    link: "Learn more about Marketing",
  },
  {
    name: "Project management",
    id: 4,
    title: "Perfect your project management",
    desc: "Plan, track, and measure any project - from simple to complex - to ensure a smooth delivery.",
    url: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/8sfk5jq4rtx68scp5tpf7489/projm-main.webp?auto=webp",
    link: "",
  },
  {
    name: "Design",
    id: 5,
    title: "Design with all the right context",
    desc: "Organize work, synchronize teams, and meet deadlines - all without sacrificing creativity",
    url: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/6rg85zw7b45k83s6jgk4cfbq/design-main.webp?auto=webp",
    link: "",
  },
  {
    name: "IT",
    id: 6,
    title: "Unlock high-velocity service for all",
    desc: "Connect Dev, IT, and business teams to quickly respond to change and deliver exceptional service experiences",
    url: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/tm64mjgxx3cnwzvfwwpcbgc/it-main.webp?auto=webp",
    link: "Learn more about IT",
  },
];

const Empower = () => {
  const [activeId , setActiveId] = useState(1);

  const handleClickBtn = (id: number) => {    
    setActiveId(id);
  };


  const [activeHeight, setActiveHeight] = useState(0);
const activeRef = useRef<HTMLDivElement | null>(null);

useLayoutEffect(() => {
  const handleResize = () => {
    if (activeRef.current) {
      setActiveHeight(activeRef.current.offsetHeight);
    }
  };

  handleResize();

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [activeId]);
  
  
  return (
    <div className="empower">
      <div>
        <h3 className="empower_title">Empower everyone, on every team</h3>
        <ul className="empower_list">
          {LinksArr.map((i) => (
            <li key={i.id} className={i.id === activeId ? "empower_item active" : "empower_item"}>
              <button
                onClick={() => {
                  handleClickBtn(i.id);
                }}
              >
                {i.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="card_container" style={{height: activeHeight < 200 ? 400 : activeHeight }}>
          {
            LinksArr.map(item=>(
              <div key={item.id} ref={item.id === activeId ? activeRef : null} className={`empower_card ${activeId === item.id ? "card_active" : ""}`}>
              <div className="empower_sub_block">
                <h3 className="empower_sub_title">{item.title}</h3>
                <p className="empower_desc">{item.desc}</p>
                <a className="empower_link" href="">{item.link}</a>
              </div>
              <div className="empower_img_block">
                <img src={item.url} alt="img" />
              </div>
            </div>
            ))
          }
        </div>


      </div>
    </div>
  );
};

export default Empower;
