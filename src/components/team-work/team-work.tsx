import { useEffect, useRef } from "react";
import {
  ConfluenceImg,
  JiraImg,
  ProductDiscoveryImg,
  RightIcon,
  ServiceManagementImg,
} from "../../assets/icons";
import "./teamwork.css";
import { useIntersectionObserver } from "usehooks-ts";

const dataText = [
  {
    logo: <JiraImg />,
    title: "Dream it, plan it, launch it",
    desc: "The #1 tool for agile teams is now for all teams. Plan, track, and deliver your biggest ideas together.",
    links: "Explore Jira",
    cardLogo:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/53m99pcz99q65rk4s8s5q86z/lumen.svg",
    cardTitle: "Lumen",
    cardDesc:
      " used Jira to reduce cycle time and increase throughput by 200%.",
    cardLink: "Read their story.",
  },
  {
    logo: <ConfluenceImg />,
    title: "Scale your knowledge",
    desc: "Connect and consolidate scattered docs and disconnected teammates in one, central source of truth.",
    links: "Explore Confluence",
    cardLogo:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/7j6s5x2x3t5rww75r3p7rpp/dropbox.svg",
    cardTitle: "Dropbox",
    cardDesc:
      " uses Confluence Cloud to create a more open, collaborative way of working.",
    cardLink: "Read their story.",
  },
  {
    logo: <ServiceManagementImg />,
    title: "Deliver service faster",
    desc: "Connect Dev and Ops teams on a single platform with customizable features and AI-powered agents.",
    links: "Explore Jira Service Management",
    cardLogo:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/qtcgrbvw6589fr5zjrrwfhsz/dominos.svg",
    cardTitle: "Teams",
    cardDesc:
      " at Domino’s Pizza Enterprises Ltd use AI to boost individual and team productivity.",
    cardLink: "See their story.",
  },
  {
    logo: <ProductDiscoveryImg />,
    title: "Ideate faster than ever",
    desc: "Capture and prioritize ideas and align everyone with product roadmaps - all in one single Jira platform.",
    links: "Explore Jira Product Discovery",
    cardLogo:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/5k9hmckn9qj55gh3hrr5vcqf/doodle.svg",
    cardTitle: "Doodle",
    cardDesc:
      " uses Jira Product Discovery to translate their entire process into a highly transparent workflow, connected to the work they were already doing in Jira.",
    cardLink: "Read their story.",
  },
];
const videosList = [
  {
    source:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/as/s6r8r5b4k7jnqcgp9g8nvfp/CSD-10721_WAC_Jira_LowBR-crf-30-r-30",
    videos:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/7nt7xmh5h5bcf7mchcssjvxk/CSD-10721_WAC_Jira-4003614779.webp",
    positionImg:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/vwbgqp77qkwpjqzrbrg4rx/lightning.svg",
  },
  {
    source:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/as/3cgxq37kjb4frwmnthhgv9t/CSD-10721_WAC_Confluence_LowBRmp4-crf-30-r-30",
    videos:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/hmf9ccjfg8n2mvsjv2p5cvh/CSD-10721_WAC__Confluence-2040505915.webp",
    positionImg:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/4mr877grr45rkk5xfwm4vp3m/squiggle-2.svg",
  },
  {
    source:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/as/q6rmbzf9xrgsfsnv7m6rbp8b/CSD-10721_WAC_JSM_LowBR-crf-30-r-30",
    videos:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/pbmckng47fsvvb7hbccb8zx5/CSD-10721_WAC__JSM-3020245023.webp",
    positionImg:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/pg9v4sgc2325g4rw8k4nx/star-grp.svg",
  },
];

const TeamWork = () => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  // Animatsiya bo'lganligini kuzatish uchun ref
  const elementRef = useRef<HTMLSpanElement | null>(null);
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

  const { isIntersecting : isIntersectingVideo, ref : refTwo } = useIntersectionObserver({
    threshold: 0.5,
  });

  // Animatsiya bo'lganligini kuzatish uchun ref
  const VideoRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (!VideoRef.current) return;

    if (isIntersectingVideo) {
      // Element ko'rinish maydoniga kirganda
      VideoRef.current.classList.add("in-view");

      // Animatsiyani qayta ishga tushirish uchun
      VideoRef.current.classList.remove("animating");
      // Kichik kechikish bilan class qo'shish orqali animatsiyani yangilash
      setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.classList.add("animating");
        }
      }, 10);
    } else {
      // Element ko'rinish maydonidan chiqqanda
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
            <div className="teamwork_card">
              <div>
                <span className="teamwork_jira_img">
                  <JiraImg />
                </span>
                <h4 className="teamwork_subtitle">
                  Dream it, plan it, launch it
                </h4>
                <p className="teamwork_desc">
                  The #1 tool for agile teams is now for all teams. Plan, track,
                  and deliver your biggest ideas together.
                </p>
                <div className="teamwork_links_block">
                  <span className="teamwork_btn_block">
                    <a className="teamwork_btn" href="">
                      Get it free
                    </a>
                  </span>

                  <a className="teamwork_link" href="">
                    Explore Jira <RightIcon />
                  </a>
                </div>
                <div>
                  <div className="teamwork_mini_card">
                    <img
                      className="teamwork_mini_img"
                      src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/53m99pcz99q65rk4s8s5q86z/lumen.svg"
                      alt=""
                    />
                    <div>
                      <p className="teamwork_mini_desc">
                        <strong>Lumen </strong>
                        used Jira to reduce cycle time and increase throughput
                        by 200%.
                        <a className="teamwork_mini_desc_link" href="">
                          {" "}
                          Read their story.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="teamwork_img">
                  <div className="teamwork_relative">
                    <img
                      className="teamwork_absolute_img"
                      src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/mg2q8gm7kfktk93s7rh7pb/squiggle-1.svg"
                      alt=""
                    />
                  </div>
                  <img
                    src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/7nt7xmh5h5bcf7mchcssjvxk/CSD-10721_WAC_Jira-4003614779.webp?auto=webp"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="teamwork_card">
              <div>
                <span className="teamwork_confluence_img">
                  <ConfluenceImg />
                </span>
                <h4 className="teamwork_subtitle">Scale your knowledge</h4>
                <p className="teamwork_desc">
                  Connect and consolidate scattered docs and disconnected
                  teammates in one, central source of truth.
                </p>
                <div className="teamwork_links_block">
                  <span className="teamwork_btn_block">
                    <a className="teamwork_btn" href="">
                      Get it free
                    </a>
                  </span>

                  <a className="teamwork_link" href="">
                    Explore Confluence <RightIcon />
                  </a>
                </div>
                <div>
                  <div className="teamwork_mini_card">
                    <img
                      className="teamwork_mini_img"
                      src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/7j6s5x2x3t5rww75r3p7rpp/dropbox.svg"
                      alt=""
                    />
                    <div>
                      <p className="teamwork_mini_desc">
                        <strong>Dropbox </strong>
                        uses Confluence Cloud to create a more open,
                        collaborative way of working.
                        <a className="teamwork_mini_desc_link" href="">
                          {" "}
                          Read their story.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="teamwork_img">
                  <div className="teamwork_relative">
                    <img
                      className="teamwork_absolute_img"
                      src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/mg2q8gm7kfktk93s7rh7pb/squiggle-1.svg"
                      alt=""
                    />
                  </div>
                  <img
                    src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/hmf9ccjfg8n2mvsjv2p5cvh/CSD-10721_WAC__Confluence-2040505915.webp?auto=webp"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="teamwork_card">
              <div>
                <span className="teamwork_service_management_img">
                  <ServiceManagementImg />
                </span>
                <h4 className="teamwork_subtitle">Scale your knowledge</h4>
                <p className="teamwork_desc">
                  Connect and consolidate scattered docs and disconnected
                  teammates in one, central source of truth.
                </p>
                <div className="teamwork_links_block">
                  <span className="teamwork_btn_block">
                    <a className="teamwork_btn" href="">
                      Get it free
                    </a>
                  </span>

                  <a className="teamwork_link_service_management" href="">
                    Explore Jira Service Management <RightIcon />
                  </a>
                </div>
                <div>
                  <div className="teamwork_mini_card">
                    <img
                      className="teamwork_mini_img"
                      src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/qtcgrbvw6589fr5zjrrwfhsz/dominos.svg"
                      alt=""
                    />
                    <div>
                      <p className="teamwork_mini_desc">
                        <strong>Teams </strong>
                        at Domino’s Pizza Enterprises Ltd use AI to boost
                        individual and team productivity.
                        <a className="teamwork_mini_desc_link" href="">
                          {" "}
                          See their story.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="teamwork_img">
                  <div className="teamwork_relative">
                    <img
                      className="teamwork_absolute_img"
                      src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/mg2q8gm7kfktk93s7rh7pb/squiggle-1.svg"
                      alt=""
                    />
                  </div>
                  <img
                    src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/pbmckng47fsvvb7hbccb8zx5/CSD-10721_WAC__JSM-3020245023.webp?auto=webp"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="teamwork_card">
              <div>
                <div className="teamwork_service_discovery_block">
                  <span className="teamwork_service_discovery_img">
                    <ProductDiscoveryImg />
                  </span>
                </div>
                <h4 className="teamwork_subtitle">Ideate faster than ever</h4>
                <p className="teamwork_desc">
                  Capture and prioritize ideas and align everyone with product
                  roadmaps - all in one single Jira platform.
                </p>
                <div className="teamwork_links_block">
                  <span className="teamwork_btn_block">
                    <a className="teamwork_btn" href="">
                      Get it free
                    </a>
                  </span>

                  <a className="teamwork_link_service_management" href="">
                    Explore Jira Product Discovery
                    <RightIcon />
                  </a>
                </div>
                <div>
                  <div className="teamwork_mini_card">
                    <img
                      className="teamwork_mini_img"
                      src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/5k9hmckn9qj55gh3hrr5vcqf/doodle.svg"
                      alt=""
                    />
                    <div>
                      <p className="teamwork_mini_desc">
                        <strong>Doodle </strong>
                        uses Jira Product Discovery to translate their entire
                        process into a highly transparent workflow, connected to
                        the work they were already doing in Jira.
                        <a className="teamwork_mini_desc_link" href="">
                          {" "}
                          Read their story.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="teamwork_img">
                  <div className="teamwork_relative">
                    <img
                      className="teamwork_absolute_img"
                      src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/mg2q8gm7kfktk93s7rh7pb/squiggle-1.svg"
                      alt=""
                    />
                  </div>
                  <img
                    src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/6vkbxssxhq8mgkhpbq9qrjk/CSD-10721_WAC__JPD-286968629.webp?auto=webp"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="teamwork_desctop_container">
          <ul className="teamwork_desctop_list">
            {dataText.map((item , index) => (
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
            {videosList.map((item , index) => (
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
