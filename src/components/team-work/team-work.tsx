import { useEffect, useRef } from "react";
import {
  RightIcon,
} from "../../assets/icons";
import { useIntersectionObserver } from "usehooks-ts";
import "./teamwork.css";
import { TeamwokdataText , TeamworkAllData, TeamworkvideosList } from "../../data";

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

  const { isIntersecting : isIntersectingVideo, ref : refTwo } = useIntersectionObserver({
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
    console.log('VideoRef', VideoRef);
    
  }, [isIntersectingVideo]);

  return (
    <div>
      <div className="team_work">
        <div>
          <div className="teamwork_block">
            <div
              className="teamwork_animate"
              ref={(el) => {
                ref(el);
                elementRef.current = el;
              }}
            >
              <img
                src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/7hhmjs66t33f8n3snssrzrr/sparkle-sm.svg"
                alt=""
                className="teamwork_img_absolute_one"
              />
              <img
                src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/2knh43qwmst9b7tffmz5b9/sparkle-md.svg"
                alt=""
                className="teamwork_img_absolute_two"
              />
              <img
                src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/w7xksbqzqj4b8jrz3z6vbtt4/sparkle-lg.svg"
                alt=""
                className="teamwork_img_absolute_three"
              />
            </div>
            <h3 className="teamwork_title">
              Teamwork solutions for high-performing teams
            </h3>
          </div>
          <div className="teamwork_container">
            <ul className="teamwork_list">
              {TeamworkAllData.map(item => (
                <li key={item.title} className="teamwork_card">
                <div>
                  <div className="teamwork_service_discovery_block">
                    <span className="teamwork_service_discovery_img">
                      {item.logo}
                    </span>
                  </div>
                  <h4 className="teamwork_subtitle">{item.title}</h4>
                  <p className="teamwork_desc">
                    {item.desc}
                  </p>
                  <div className="teamwork_links_block">
                    <span className="teamwork_btn_block">
                      <a className="teamwork_btn" href="">
                        Get it free
                      </a>
                    </span>
  
                    <a className="teamwork_link_service_management" href="">
                      {item.links}
                      <RightIcon />
                    </a>
                  </div>
                  <div>
                    <div className="teamwork_mini_card">
                      <img
                        className="teamwork_mini_img"
                        src={item.cardLogo}
                        alt=""
                      />
                      <div>
                        <p className="teamwork_mini_desc">
                          <strong>{item.cardTitle} </strong>
                          {item.cardDesc}
                          <a className="teamwork_mini_desc_link" href="">
                            {" "}
                            {item.cardLink}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="teamwork_img">
                    <div className="teamwork_relative">
                      <img
                        className="teamwork_absolute_img"
                        src={item.absoluteImg}
                        alt=""
                      />
                    </div>
                    <img
                      className="team_img_big"
                      src={item.img}
                      alt="img"
                    />
                  </div>
                </div>
              </li>
              ))}
            </ul>
          </div>
          <div className="teamwork_desctop_container">
          <ul className="teamwork_desctop_list">
            {TeamwokdataText.map((item , index) => (
              <li ref={(el) => {
                refTwo(el);
                VideoRef.current = el;
              }} key={index} className={`desctop_item desctop_item${index}`}>
                <div className="desctop_text_block">
                  <span className={`desctop_item_logo${index}`}>{item.logo}</span>
                  <h3 className="desctop_item_title">{item.title}</h3>
                  <div className="desctop_item_desc_block">
                    <p className="desctop_item_desc">{item.desc}</p>
                  </div>
                  <div className="desctop_link_block">
                    <a className="desctop_fist_link" href="">
                      Get it free
                    </a>
                    <a className="desctop_second_link" href="">
                      {item.links}
                    </a>
                  </div>
                </div>
                <div className="desctop_card">
                    <img className="desctop_card_logo" src={item.cardLogo} alt="" />
                  <div className="desctop_card_block">
                    <p className="desctop_card_desc">
                      <strong>{item.cardTitle} </strong>
                      {item.cardDesc}
                      <a className="desctop_card_link" href="">
                        {" "}
                        {item.cardLink}
                      </a>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul className="teamwork_videos_list">
            {TeamworkvideosList.map((item , index) => (
              <li key={index} className={`teamwork_videos_item${index}`}>
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
                  className="rovo-video"
                >
                  <source
                    src={item.source}
                    type="video/mp4"
                  />
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
