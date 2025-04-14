import { useEffect, useRef, useState } from "react";
import { JiraBottomImg } from "../../assets/icons";
import "./jira.css";
import { useIntersectionObserver } from "usehooks-ts";

const dataAll = [
  {
    icons:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/j9r7crv6mz8g566kwqh9zv5/software.svg",
    title: "Software",
    img: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/8s4fkfnvtcv5xrbj39vst2c/Jira-Board-Software-3233077719.webp?auto=webp",
    id: 1,
  },
  {
    id: 2,
    img: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/j9x4n5kzxffpvvv7fwbs7chr/wac-hero-jpd-1156977422.webp?auto=webp",
    icons:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/tvm6cp9vpg8v9t8fkx4fjg7k/prod-management.svg",
    title: "Product management",
  },
  {
    id: 3,
    img: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/r5j6vhttwxqgn6z67bjr/Jira-Calendar-Marketing-4146978900.webp?auto=webp",
    title: "Marketing",
    icons:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/vx2wsv5v63s6q83q7kpq8m7g/marketing.svg",
  },
  {
    id: 4,
    img: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/ftwm2885zt6s4smbcq344b/Jira-Timeline-Project_Management-2679766879.webp?auto=webp",
    icons:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/pcj85zfcgbmqmjknc8s753hn/proj-management.svg",
    title: "Project management",
  },
  {
    id: 5,
    img: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/q96n93xq4bvbcxbscvj3njm6/Jira-List-Design-1069502226.webp?auto=webp",
    icons:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/q98jrzxzgsgk7n4q33v23c3/design.svg",
    title: "Design",
  },
  {
    id: 6,
    img: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/mjhrvw6x5n566z6kw84bt8b/Jira-On-call-IT-3030871761.webp?auto=webp",
    icons:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/2whn29rt5pf356jzcs5nbz/it.svg",
    title: "IT",
  },
];

const Jira = () => {
  const [data, setData] = useState(dataAll.filter((i) => i.id === 1));
  const [activeId, setActiveId] = useState(0);
  const handleClickBtn = (id: number) => {
    const FilteredData = dataAll.filter((i) => i.id === id);
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
      <h2 className="jira_title">
        The new Jira: <br />
        from{" "}
        <span className="jira_block">
          teams
          <span
            className="jira_bg_absolute"
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
      <div className="jira_link_block">
        <a className="jira_link" href="">
          Get started
        </a>
      </div>
      <ul className="jira_list">
        {dataAll.map((i, index) => (
          <li
            key={index}
            className={
              i.id === activeId ? "jira_cards jira_active" : "jira_cards"
            }
            onClick={() => {
              handleClickBtn(i.id);
            }}
          >
            <span className="jira_icon">
              <img src={i.icons} alt="" />
            </span>
            <p className="jira_sub_title">{i.title}</p>
          </li>
        ))}
      </ul>
      <div className="jira_vid_img_block">
        {activeId === 0 ? (
          <div className="jira_vid_block">
            <video
              playsInline
              muted
              preload="auto"
              loop
              poster="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/7m6czqqkjbq8rztkbgntgh/CSD-10721_WAC_Hero_A_HD.webp"
              autoPlay
              className="hero-video"
            >
              <source
                src="https://wac-cdn.atlassian.com/misc-assets/webp-images/CSD-10721_WAC_Hero_FULL_LowBR.mp4"
                type="video/mp4"
              />
              Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.
            </video>
          </div>
        ) : (
          <div className="jira_img" onClick={() => setActiveId(0)}>
            <img src={data[0].img} alt="" />
          </div>
        )}
        <div className="jira_bg"></div>
      </div>
    </div>
  );
};

export default Jira;
