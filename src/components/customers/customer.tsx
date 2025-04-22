import { useEffect, useRef, useState } from "react";
import "./customer.css";
import { CustomerdataAll } from "../../data";


const Customer = () => {
  const [activeId, setActiveId] = useState(1);

  const handleClickBtn = (id: number) => {
    setActiveId(id);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextId = activeId >= CustomerdataAll.length ? 1 : activeId + 1;
      setActiveId(nextId);
    }, 4500);

    return () => clearInterval(interval);
  }, [activeId, CustomerdataAll]);

  const [activeHeight, setActiveHeight] = useState(0);
  const activeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
    <div className="cutomer">
      <div className="customer_block">
        <h3 className="customer_title">For teams of all sizes</h3>
        <p className="customer_desc">
          Everyone from start-ups to large enterprises prefer Atlassian
        </p>
        <a className="customer_link" href="">
          Explore all customers stories
        </a>
      </div>
      
      <div className="customer_card">
      <div className="customer_card_container" style={{ height: activeHeight === 0 ? '840px' : activeHeight}}>
        {CustomerdataAll.map((item) => (
          <div key={item.id} ref={item.id === activeId ? activeRef : null}
          className={`customer_card_block ${
            activeId === item.id ? "customer_card_active" : ""
          }`} >
          <div className="customer_sub_card">
            <div className="customer_img_block">
              <img className="customer_img" src={item.url} alt="img" />
            </div>
            <div className="customer_sub_block">
              <p className="customer_sub_title">{item.title}</p>
              <p className="customer_sub_desc">{item.desc}</p>
              <div>
                <strong className="customer_name">{item.name}</strong>
                <p className="customer_workplace">{item.workplace}</p>
              </div>
              <a className="customer_card_link" href="">
                {item.link}
              </a>
            </div>
          </div>
          </div>
        ))}
      </div>
        <ul className="customer_list">
          {CustomerdataAll.map((i) => (
            <li
              key={i.id}
              className={
                i.id === activeId
                  ? "customer_item customer_active"
                  : "customer_item"
              }
            >
              <button onClick={() => handleClickBtn(i.id)}>
                <img src={i.btnUrl} alt="" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Customer;
