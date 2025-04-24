import { useEffect, useRef } from "react";
import { RightIcon } from "../../assets/icons";
import { useIntersectionObserver } from "usehooks-ts";
import {
  TeamwokdataText,
  TeamworkAllData,
  TeamworkvideosList,
} from "../../data";

import "./teamwork.css";

const TeamWork = () => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  const elementRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (!elementRef.current) return;

    if (isIntersecting) {
      elementRef.current.classList.add("in-view");

      elementRef.current.classList.remove("animating");
      setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.classList.add("animating");
        }
      }, 10);
    } else {
      elementRef.current.classList.remove("in-view");
      elementRef.current.classList.remove("animating");
    }
  }, [isIntersecting]);

  const { isIntersecting: isIntersectingVideo, ref: refTwo } =
    useIntersectionObserver({
      threshold: 0.5,
    });

  const VideoRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (!VideoRef.current) return;

    if (isIntersectingVideo) {
      VideoRef.current.classList.add("in-view");

      VideoRef.current.classList.remove("animating");
      setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.classList.add("animating");
        }
      }, 10);
    } else {
      VideoRef.current.classList.remove("in-view");
      VideoRef.current.classList.remove("animating");
    }
    console.log("VideoRef", VideoRef);
  }, [isIntersectingVideo]);

  return (
    <div>
      <div className="teamwork">
        <div>
          <div className="teamwork__wrapper">
            <div
              className="teamwork__animate-wrapper"
              ref={(el) => {
                ref(el);
                elementRef.current = el;
              }}
            >
              <img
                src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/7hhmjs66t33f8n3snssrzrr/sparkle-sm.svg"
                alt=""
                className="teamwork__first-img"
              />
              <img
                src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/2knh43qwmst9b7tffmz5b9/sparkle-md.svg"
                alt=""
                className="teamwork__second-img"
              />
              <img
                src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/w7xksbqzqj4b8jrz3z6vbtt4/sparkle-lg.svg"
                alt=""
                className="teamwork__third-img"
              />
            </div>
            <h3 className="teamwork__title">
              Teamwork solutions for high-performing teams
            </h3>
          </div>
          <div className="teamwork__container">
            <ul className="teamwork__list">
              {TeamworkAllData.map((item) => (
                <li key={item.title} className="teamwork__card">
                  <div>
                    <div className="teamwork__logo-wrapper">
                      <span className="teamwork__logo">{item.logo}</span>
                    </div>
                    <h4 className="teamwork__sub-title">{item.title}</h4>
                    <p className="teamwork__desc">{item.desc}</p>
                    <div className="teamwork__link-wrapper">
                      <span className="teamwork__button-wrapper">
                        <a className="teamwork__button" href="">
                          Get it free
                        </a>
                      </span>

                      <a className="teamwork__link" href="">
                        {item.links}
                        <RightIcon />
                      </a>
                    </div>
                    <div>
                      <div className="teamwork__mini-card">
                        <img
                          className="teamwork__mini-img"
                          src={item.cardLogo}
                          alt=""
                        />
                        <div>
                          <p className="teamwork__mini-desc">
                            <strong>{item.cardTitle} </strong>
                            {item.cardDesc}
                            <a className="teamwork__mini-link" href="">
                              {" "}
                              {item.cardLink}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="teamwork__img-wrapper">
                      <div className="teamwork__relative-wrapper">
                        <img
                          className="teamwork__absolute-img"
                          src={item.absoluteImg}
                          alt=""
                        />
                      </div>
                      <img className="teamwork__img" src={item.img} alt="img" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="desctop__container">
            <ul className="desctop__list">
              {TeamwokdataText.map((item, index) => (
                <li
                  ref={(el) => {
                    refTwo(el);
                    VideoRef.current = el;
                  }}
                  key={index}
                  className={`desctop__item desctop__item${index}`}
                >
                  <div className="desctop__text-wrapper">
                    <span className={`desctop__item-logo${index}`}>
                      {item.logo}
                    </span>
                    <h3 className="desctop__item-title">{item.title}</h3>
                    <div className="desctop__item-wrapper">
                      <p className="desctop__item-desc">{item.desc}</p>
                    </div>
                    <div className="desctop__link-wrapper">
                      <a className="desctop__button" href="">
                        Get it free
                      </a>
                      <a className="desctop__link" href="">
                        {item.links} <RightIcon />
                      </a>
                    </div>
                  </div>
                  <div className="desctop__card">
                    <img
                      className="desctop__card-logo"
                      src={item.cardLogo}
                      alt=""
                    />
                    <div className="desctop__card-wrapper">
                      <p className="desctop__card-desc">
                        <strong>{item.cardTitle} </strong>
                        {item.cardDesc}
                        <a className="desctop__card-link" href="">
                          {" "}
                          {item.cardLink}
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="desctop__video-list">
              {TeamworkvideosList.map((item, index) => (
                <li key={index} className={`desctop__video-item${index}`}>
                  <div>
                    <img src={item.positionImg} alt="" />
                  </div>
                  <video
                    playsInline
                    muted
                    preload="auto"
                    loop
                    poster={item.videos}
                    autoPlay
                    className="desctop__video"
                  >
                    <source src={item.source} type="video/mp4" />
                    Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.
                  </video>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamWork;
