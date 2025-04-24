import { useLayoutEffect, useRef, useState } from "react";
import { RightIcon } from "../../assets";
import { EmpowerLinksArr } from "../../data";

import "./empower.css";

const Empower = () => {
  const [activeId, setActiveId] = useState(1);

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
        <h3 className="empower__title">Empower everyone, on every team</h3>
        <ul className="empower__list">
          {EmpowerLinksArr.map((i) => (
            <li
              key={i.id}
              className={
                i.id === activeId ? "empower__item active" : "empower__item"
              }
            >
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
        <div
          className="empower__container"
          style={{ height: activeHeight < 200 ? 400 : activeHeight }}
        >
          {EmpowerLinksArr.map((item) => (
            <div
              key={item.id}
              ref={item.id === activeId ? activeRef : null}
              className={`empower__card ${
                activeId === item.id ? "empower__card-active" : ""
              }`}
            >
              <div className="empower__sub-wrapper">
                <h3 className="empower__sub-title">{item.title}</h3>
                <p className="empower__desc">{item.desc}</p>
                {item.link && (
                  <a className="empower__link" href="">
                    {item.link} <RightIcon />
                  </a>
                )}
              </div>
              <div className="empower__img-wrapper">
                <img src={item.url} alt="img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Empower;
