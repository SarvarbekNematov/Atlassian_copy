import { useEffect, useRef, useState } from "react";
import "./customer.css";

const dataAll = [
  {
    url: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/qqc4sgmkh4h8jgh4shpk7nmj/MercedesBenz-357676847.webp?auto=webp",
    title: "Large enterprise",
    desc: "“With Atlassian cloud, everything regarding server maintenance is done for us, and there’s less downtime and better performance.”",
    name: "Mehmet Sari",
    workplace: "Modern Collaboration Platform Team, Mercedes Benz",
    link: "Read Mercedes-Benz’s case study",
    btnUrl:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/nmczw2q3m2cq6tvf89pbgk/mercedes-benz-brand-logo1.svg",
    id: 1,
  },
  {
    url: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/2w4xm9kcvzqnr73shng42crj/Roblox-3121607094.webp?auto=webp",
    title: "Enterprise",
    desc: "“For the two teams we have already migrated from Wrike to Jira, each of those will amount to $150,000/year in savings.”",
    name: "Joe Cotant",
    workplace: "Senior Technical Program Manager, Roblox",
    link: "Read Roblox’s case study",
    btnUrl:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/5mkrmss54fpt5k4jfkm9pmv7/roblox-brand-logo.svg",
    id: 2,
  },
  {
    url: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/xx97fwkmxjkfbprnsk6nspkc/RoyalCaribbean-2310931816.webp?auto=webp",
    title: "Large enterprise",
    desc: "“By leveraging Jira and Confluence for automated reporting, we’re saving over 800 hours and $500k per year in management consulting costs.”",
    name: "Wais Mojaddidi",
    workplace: "Director of Agile Delivery, Global E-commerce, Royal Caribbean",
    link: "Read Royal Caribbean’s case study",
    btnUrl:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/4c5644m7hcrq3htc58t82m/royal-caribbean-brand-logo.svg",
    id: 3,
  },
  {
    url: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/9hp62jfcmq8kqkx8b7b8pg5/Lumen-381040365.webp?auto=webp",
    title: "Enterprise",
    desc: "“We’ve been able to increase throughput by 200%, which means we’re delivering capabilities faster and increasing customer satisfaction.”",
    name: "Mai Lian Scarlett",
    workplace: "Former Senior Director, Agile Transformation Office, Lumen",
    link: "Read Lumen’s case study",
    btnUrl:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/x8jnc8bq75gfg2gcs87ff29/lumen-brand-logo.svg",
    id: 4,
  },
  {
    url: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/p7fw65xf78hkjrkck7q387c/Doodle-3562754075.webp?auto=webp",
    title: "Small medium business",
    desc: "“Jira Product Discovery translated our entire process into a highly transparent workflow. That was a mind-blowing moment.”",
    name: "Stephanie Leue",
    workplace: "Former Chief Product Officer, Doodle",
    link: "Read Doodle’s case study",
    btnUrl:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/knqwfjq5tkr5wrjxfg9f6jb/doodle-brand-logo.svg",
    id: 5,
  },
  {
    url: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/smrbg5nc693bk36vw47m7kp5/DropBox-4186472046.webp?auto=webp",
    title: "Enterprise",
    desc: "“The big win that we have seen through Confluence Cloud is definitely collaboration. It is a very open way of working.”",
    name: "Damien Davis",
    workplace: "Lead Atlassian Administrator, Dropbox",
    link: "Read Dropbox’s case study",
    btnUrl:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/br3xvhttrk3fnmhh9hnc33cb/dropbox-brand-logo.svg",
    id: 6,
  },
  {
    url: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/47t7nv3bkc7hfsgmgcqncrp/DHCS-1703508494.webp?auto=webp",
    title: "Enterprise",
    desc: "“By tracking in Jira and our developer tools, we reduced the cost to get the team set up and deliver from $2.8 million to $600,000.”",
    name: "Ryan Mosley",
    workplace: "Chief of Factory & Engineering Modernization, DHCS",
    link: "Read DHCS’s case study",
    btnUrl:
      "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/q454vhjsknnkmxf8pqwj5rg7/hcs-brand-logo.svg",
    id: 7,
  },
];
const Customer = () => {
  const [activeId, setActiveId] = useState(1);

  const handleClickBtn = (id: number) => {
    setActiveId(id);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextId = activeId >= dataAll.length ? 1 : activeId + 1;
      setActiveId(nextId);
    }, 4500);

    return () => clearInterval(interval);
  }, [activeId, dataAll]);

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
        {dataAll.map((item) => (
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
          {dataAll.map((i) => (
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
