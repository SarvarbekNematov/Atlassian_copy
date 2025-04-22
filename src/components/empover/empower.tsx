import {  useLayoutEffect, useRef, useState } from "react";
import "./empower.css";
import { EmpowerLinksArr } from "../../data";



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
          {EmpowerLinksArr.map((i) => (
            <li key={i.id} className={i.id === activeId ? "empower_item active" : "empower_item"}>
              <button
                onClick={() => {
                  handleClickBtn(i.id);
                }}>
                {i.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="card_container" style={{height: activeHeight < 200 ? 400 : activeHeight }}>
          {
            EmpowerLinksArr.map(item=>(
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
