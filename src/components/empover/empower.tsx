import { useLayoutEffect, useRef, useState } from "react";
import { RightIcon } from "../../assets";
import { EmpowerLinksArr } from "../../data";

import "./empower.css";

const Empower = () => {
  const [activeId, setActiveId] = useState(1);
  const [activeHeight, setActiveHeight] = useState(0);
  const activeRef = useRef<HTMLDivElement | null>(null);

  const handleClickBtn = (id: number) => {
    setActiveId(id);
  };

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (activeRef.current) {
        setActiveHeight(activeRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [activeId]);

  return (
    <div className="empower">
      <div>
        <h3 className="empower__title">Empower everyone, on every team</h3>

        <ul className="empower__list">
          {EmpowerLinksArr.map((item) => (
            <li
              key={item.id}
              className={`empower__item ${item.id === activeId ? "active" : ""}`}
            >
              <button onClick={() => handleClickBtn(item.id)}>
                {item.name}
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
