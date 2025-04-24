import { useEffect, useRef, useState } from "react";
import { JiraBottomImg } from "../../assets/icons";
import { useIntersectionObserver } from "usehooks-ts";
import { JiradataAll } from "../../data";

import "./jira.css";

const Jira = () => {
  const [data, setData] = useState(JiradataAll.filter((i) => i.id === 1));
  const [activeId, setActiveId] = useState(0);
  const handleClickBtn = (id: number) => {
    const FilteredData = JiradataAll.filter((i) => i.id === id);
    setData(FilteredData);
    setActiveId(id);
  };

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  // Animatsiya bo'lganligini kuzatish uchun ref
  const elementRef = useRef<HTMLSpanElement  | null>(null);
  useEffect(() => {
    if (!elementRef.current) return;

    if (isIntersecting) {
      // Element ko'rinish maydoniga kirganda
      elementRef.current.classList.add("in-view");

      // Animatsiyani qayta ishga tushirish uchun
      elementRef.current.classList.remove("animating");
      // Kichik kechikish bilan class qo'shish orqali animatsiyani yangilash
      setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.classList.add("animating");
        }
      }, 10);
    } else {
      // Element ko'rinish maydonidan chiqqanda
      elementRef.current.classList.remove("in-view");
      elementRef.current.classList.remove("animating");
    }
  }, [isIntersecting]);

  return (
    <div className="jira">
      <h2 className="jira__title">
        The new Jira: <br />
        from{" "}
        <span className="jira__sub-wrapper">
          teams
          <span
            className="jira__background-animate"
            ref={(el) => {
              ref(el);
              elementRef.current = el;
            }}
          >
            <JiraBottomImg />
          </span>
        </span>{" "}
        to dreams
      </h2>
      <div className="jira__link-wrapper">
        <a className="jira__link" href="">
          Get started
        </a>
      </div>
      <ul className="jira__list">
        {JiradataAll.map((i, index) => (
          <li
            key={index}
            className={
              i.id === activeId ? "jira__card jira__active" : "jira__card"
            }
            onClick={() => {
              handleClickBtn(i.id);
            }}
          >
            <span className="jira__icon">
              <img src={i.icons} alt="" />
            </span>
            <p className="jira__sub-title">{i.title}</p>
          </li>
        ))}
      </ul>
      <div className="jira__wrapper">
        {activeId === 0 ? (
          <div className="jira__video-wrapper">
            <video
              playsInline
              muted
              preload="auto"
              loop
              poster="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/7m6czqqkjbq8rztkbgntgh/CSD-10721_WAC_Hero_A_HD.webp"
              autoPlay
              className="hero__video"
            >
              <source
                src="https://wac-cdn.atlassian.com/misc-assets/webp-images/CSD-10721_WAC_Hero_FULL_LowBR.mp4"
                type="video/mp4"
              />
              Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.
            </video>
          </div>
        ) : (
          <div className="jira__img" onClick={() => setActiveId(0)}>
            <img src={data[0].img} alt="" />
          </div>
        )}
        <div className="jira__bg"></div>
      </div>
    </div>
  );
};

export default Jira;
