import { useEffect, useRef, useState } from "react";
import { JiraBottomImg } from "../../assets/icons";
import { useIntersectionObserver } from "usehooks-ts";
import { JiradataAll } from "../../data";

import "./jira.css";

const Jira = () => {
  const [activeId, setActiveId] = useState(0);
  
  // Get data for the active ID directly
  const activeData = JiradataAll.find(item => item.id === activeId);

  const handleClickBtn = (id: number) => {
    setActiveId(id);
  };

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  // Animatsiya bo'lganligini kuzatish uchun ref
  const elementRef = useRef<HTMLSpanElement | null>(null);
  
  useEffect(() => {
    if (!elementRef.current) return;

    const handleAnimation = () => {
      if (elementRef.current) {
        elementRef.current.classList.add("in-view");
        elementRef.current.classList.remove("animating");

        setTimeout(() => {
          if (elementRef.current) {
            elementRef.current.classList.add("animating");
          }
        }, 10);
      }
    };

    if (isIntersecting) {
      handleAnimation();
    } else {
      if (elementRef.current) {
        elementRef.current.classList.remove("in-view", "animating");
      }
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
        {JiradataAll.map((i) => (
          <li
            key={i.id}
            className={`jira__card ${i.id === activeId ? "jira__active" : ""}`}
            onClick={() => handleClickBtn(i.id)}
          >
            <span className="jira__icon">
              <img src={i.icons} alt={i.title} />
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
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          // Ensure the image is only rendered when data exists
          activeData ? (
            <div className="jira__img" onClick={() => setActiveId(0)}>
              <img src={activeData.img} alt={activeData.title} />
            </div>
          ) : null // If no data is found, return null to avoid errors
        )}
        <div className="jira__bg"></div>
      </div>
    </div>
  );
};

export default Jira;
