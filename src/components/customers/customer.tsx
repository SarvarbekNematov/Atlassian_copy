import { useEffect, useRef, useState } from "react";
import { CustomerData } from "../../data";

import "./customer.css";

const Customer = () => {
  const [activeId, setActiveId] = useState(1);
  const [activeHeight, setActiveHeight] = useState(0);
  const activeRef = useRef<HTMLDivElement | null>(null);

  // Aktiv ID ni 4.5 sekundda bir o'zgartirish
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prevId) => (prevId >= CustomerData.length ? 1 : prevId + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Aktiv kartaning balandligini olish va window resize da yangilash
  useEffect(() => {
    const updateActiveHeight = () => {
      if (activeRef.current) {
        setActiveHeight(activeRef.current.offsetHeight);
      }
    };

    updateActiveHeight();
    window.addEventListener("resize", updateActiveHeight);

    return () => window.removeEventListener("resize", updateActiveHeight);
  }, [activeId]);

  const handleClickBtn = (id: number) => {
    setActiveId(id);
  };

  return (
    <div className="customer">
      <div className="customer__wrapper">
        <h3 className="customer__title">For teams of all sizes</h3>
        <p className="customer__desc">
          Everyone from start-ups to large enterprises prefer Atlassian
        </p>
        <a className="customer__link" href="">
          Explore all customers stories
        </a>
      </div>

      <div className="customer__card">
        <div className="customer__clip-container"></div>

        <div
          className="customer__card-container"
          style={{ height: activeHeight === 0 ? "840px" : activeHeight }}
        >
          {CustomerData.map((item) => (
            <div
              key={item.id}
              ref={item.id === activeId ? activeRef : null}
              className={`customer__card-wrapper ${
                activeId === item.id ? "customer__card-active" : ""
              }`}
            >
              <div className="customer__sub-card">
                <div className="customer__img-wrapper">
                  <img className="customer__img" src={item.url} alt="img" />
                </div>
                <div className="customer__sub-wrapper">
                  <p className="customer__sub-title">{item.title}</p>
                  <p className="customer__sub-desc">{item.desc}</p>
                  <div>
                    <strong className="customer__name">{item.name}</strong>
                    <p className="customer__workplace">{item.workplace}</p>
                  </div>
                  <a className="customer__card-link" href="">
                    {item.link}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ul className="customer__list">
          {CustomerData.map((item) => (
            <li
              key={item.id}
              className={`customer__item ${
                item.id === activeId ? "customer__active" : ""
              }`}
            >
              <button onClick={() => handleClickBtn(item.id)}>
                <img src={item.btnUrl} alt="" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Customer;
