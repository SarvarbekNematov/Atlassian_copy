import { Link } from "react-router-dom";
import {
  HeaderBottomIcon,
  HeroSvg,
  Logo,
  MenuIcon,
  RightIcon,
  SearchIcon,
} from "../assets/icons";
import "./header.css";
import { JSX, useEffect, useState } from "react";
import FeaturedModal from "./modals/products/featured";
import { modalProductsData } from "./data";
import {
  AgentsIcon,
  AgentsYellowIcon,
  AlignIcon,
  ConfluenceIcon,
  FocusIcon,
  JiraIcon,
  LoomIcon,
  StrategyIcon,
  TalentIcon,
} from "../assets/modalIcons";

const ProductsTitles = [
  {
    id: 1,
    title: "Featured",
  },
  {
    id: 2,
    title: "Developers",
  },
  {
    id: 3,
    title: "Product Managers",
  },
  {
    id: 4,
    title: "IT professionals",
  },
  {
    id: 5,
    title: "Business Teams",
  },
  {
    id: 6,
    title: "Leadership Teams",
  },
];

type MyDataType = {
  icons: JSX.Element;
  title: string;
  desc: string;
  new: string;
};

const AtlassianData = [
  {
    title: 'System of Work',
    desc: "Atlassian's blueprint for how teams work together",
    new: 'NEW'
  },
  {
    title: 'Integrations',
    desc: 'Connect thousands of apps to your Atlassian products',
    new: ''
  },
  {
    title: 'Customers',
    desc: 'Case studies & stories powered by teamwork',
    new: ''
  },
  {
    title: 'FedRAMP',
    desc: 'Compliant solutions for the public sector',
    new: ''
  },
  {
    title: 'Resilience',
    desc: 'Enterprise-grade & highly performant infrastructure',
    new: ''
  },
  {
    title: 'Platform',
    desc: 'Our deeply integrated, reliable & secure platform',
    new: ''
  },
  {
    title: 'Trust center',
    desc: "Ensure your data’s security, compliance & availability",
    new: ''
  }
]
const ResourcesData = [
  {
    title: 'Customer Support',
    desc: 'Ask questions, report bugs & give us feedback'
  },
  {
    title: 'Find Partners',
    desc: 'Consulting, training & product customization support'
  },
  {
    title: 'Migration Program',
    desc: 'Step-by-step guidance for your Atlassian cloud migration'
  },
  {
    title: 'University',
    desc: 'Learn and expand your skill set for all things Atlassian'
  }
]

const Header = () => {
  const [moreActive, setMoreActive] = useState(false);
  const [data, setData] = useState<MyDataType[]>([]);
  const [productsActive, setProductActive] = useState(false);
  const [solutionsActive, setSolutionsActive] = useState(false);
  const [atlassianActive, setAtlassianActive] = useState(false);
  const [resourcesActive, setResourcesActive] = useState(false);
  const [activeId, setActiveId] = useState(1);

  const handleClickBtn = (id: number) => {
    setActiveId(id);
  };

  
  useEffect(() => {
    modalProductsData.map((item) => {
      if (item.id === activeId) {
        return setData(item.data);
      }
    });
  }, [activeId]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClickProduct = (title: string) => {
      if (title === "product") {
      if (!productsActive) {
        setProductActive(true);
        setSolutionsActive(false);
        setAtlassianActive(false);
        setResourcesActive(false);
      } else {
        setProductActive(false);
      }
    }
    if (title === "solution") {
      if (!solutionsActive) {
        setProductActive(false);
        setSolutionsActive(true);
        setAtlassianActive(false);
        setResourcesActive(false);
      } else {
        setSolutionsActive(false);
      }
    }
    if (title === "atlassian") {
      if(!atlassianActive){
              setProductActive(false);
      setSolutionsActive(false);
      setAtlassianActive(true);
      setResourcesActive(false);
      }
      else{
        setAtlassianActive(false)
      }
    }
    if (title === "resources") {
      if(!resourcesActive){
         setProductActive(false);
      setSolutionsActive(false);
      setAtlassianActive(false);
      setResourcesActive(true);
      }
     else{
      setResourcesActive(false)
     }
    }
  };

  const handleMouseEnter = () => {
    if (windowWidth >= 1240) {
      // Hover funksiyasi shu yerda ishlaydi
    }
  };
  

  const handleClickLess = () => {
    setAtlassianActive(false);
    setResourcesActive(false);
  }

  return (
    <div className="header">
      <div className="header_block">
        <div className="desctop_logo_block">
          <div className="logo_block">
            <Logo />
          </div>
          <ul className="header_list">
            <li className="header_item">
              <button
                onMouseEnter={handleMouseEnter}
                onClick={() => handleClickProduct("product")}
                className="header_item_btn products_hover"
              >
                Products{" "}
                <span className="header_bottom_icon">
                  <HeaderBottomIcon />
                </span>{" "}
              </button>
            </li>
            <li className="header_item">
              <button
                onClick={() => handleClickProduct("solution")}
                className="header_item_btn"
              >
                Solutions{" "}
                <span className="header_bottom_icon">
                  <HeaderBottomIcon />
                </span>
              </button>
            </li>
            {moreActive ? (
              <li className="header_list_item">
                <div>
                  <button
                    onClick={() => handleClickProduct("atlassian")}
                    className="header_item_btn"
                  >
                    Why Atlassian?{" "}
                    <span className="header_bottom_icon">
                      <HeaderBottomIcon />
                    </span>
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleClickProduct("resources")}
                    className="header_item_btn"
                  >
                    Resources{" "}
                    <span className="header_bottom_icon">
                      <HeaderBottomIcon />
                    </span>
                  </button>
                </div>
                <div>
                  <button className="header_item_btn">Enterprise</button>
                </div>
                <div className="">
                  <button
                    onClick={() =>{ setMoreActive(!moreActive) , handleClickLess()}}
                    className="header_less_btn"
                  >
                    Less-
                  </button>
                </div>
              </li>
            ) : (
              <li>
                <button
                  className="header_more_btn"
                  onClick={() => setMoreActive(!moreActive)}
                >
                  More+
                </button>
              </li>
            )}
            <li className="header_list_item_desctop">
              <div>
                <button
                  onClick={() => handleClickProduct("atlassian")}
                  className="header_item_btn"
                >
                  Why Atlassian?{" "}
                  <span className="header_bottom_icon">
                    <HeaderBottomIcon />
                  </span>
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleClickProduct("resources")}
                  className="header_item_btn"
                >
                  Resources{" "}
                  <span className="header_bottom_icon">
                    <HeaderBottomIcon />
                  </span>
                </button>
              </div>
              <div>
                <button className="header_item_btn">Enterprise</button>
              </div>
            </li>
          </ul>
        </div>

        <div className="menu_block">
          {moreActive ? (
            ""
          ) : (
            <div className="menu_sub_block">
              <button className="search_icon">
                <SearchIcon />
              </button>
              <span className="border_center_line"></span>
              <Link className="signIn_link" to={"/"}>
                Sign in
              </Link>
              <span className="border_line"></span>
            </div>
          )}
          <div className="menu_sub_block_desctop">
            <button className="search_icon">
              <SearchIcon />
            </button>
            <span className="border_center_line"></span>
            <Link className="signIn_link" to={"/"}>
              Sign in
            </Link>
          </div>
          <button className="menu">
            <MenuIcon />
            <MenuIcon />
            <MenuIcon />
          </button>
        </div>
      </div>
      <div className="modal_product_container">
        <div
          className={`modal_products ${productsActive ? "modalActive" : ""}`}
        >
          <div>
            <ul className="modal_active_list">
              {ProductsTitles.map((item) => (
                <li
                  key={item.id}
                  className={`modal_active_item ${
                    activeId === item.id ? "activeLink" : ""
                  }`}
                >
                  <button onClick={() => handleClickBtn(item.id)}>
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {activeId === 1 ? <FeaturedModal /> : ""}
            <ul className="modal-product-sub-list">
              {data?.map((item, index) => (
                <li key={index} className="modal-product-sub-item">
                  <div className="modal-product-icon-block">
                    <span className="modal-product-icon">{item.icons}</span>
                  </div>
                  <div>
                    <h5 className="modal-product-title">
                      {item.title}{" "}
                      {item.new ? (
                        <span className="modal-product-new">{item.new}</span>
                      ) : (
                        ""
                      )}{" "}
                    </h5>
                    <p className="modal-product-desc">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="modal_slution">
        <div className={`solution_block ${solutionsActive ? 'activeSolution' : ''}`}>
          <div className="solution_sub_block">
          <div className="featured_sub_block solution_box">
            <div className="featured_card">
              <span className="featured_icon_block">
                <HeroSvg />
              </span>
              <p className="featured_desc_card">
                Apps and agents to supercharge teamwork
              </p>
              <ul className="featured_card_list">
                <li className="featured_card_item">
                  <span className="featured_card_icon">
                    <JiraIcon />
                  </span>
                  <p className="featured_card_title">Jira</p>
                </li>
                <li className="featured_card_item">
                  <span className="featured_card_icon">
                    <ConfluenceIcon />
                  </span>
                  <p className="featured_card_title">Confluence</p>
                </li>
                <li className="featured_card_item">
                  <span className="featured_card_icon">
                    <LoomIcon />
                  </span>
                  <p className="featured_card_title">Loom</p>
                </li>
                <li className="featured_card_item">
                  <span className="featured_card_icon">
                    <AgentsIcon />
                  </span>
                  <p className="featured_card_title">Agents</p>
                </li>
              </ul>
            </div>
            <div className="featured_card">
              <span className="featured_icon_block">
                <StrategyIcon />
              </span>
              <p className="featured_desc_card">
                Powerful apps to optimize strategy
              </p>
              <ul className="featured_card_list">
                <li className="featured_card_item">
                  <span className="featured_card_icon">
                    <AlignIcon />
                  </span>
                  <p className="featured_card_title">Align</p>
                </li>
                <li className="featured_card_item">
                  <span className="featured_card_icon">
                    <FocusIcon />
                  </span>
                  <p className="featured_card_title">Focus</p>
                </li>
                <li className="featured_card_item">
                  <span className="featured_card_icon">
                    <TalentIcon />
                  </span>
                  <p className="featured_card_title">Talent</p>
                </li>
                <li className="featured_card_item">
                  <span className="featured_card_icon">
                    <AgentsYellowIcon />
                  </span>
                  <p className="featured_card_title">Agents</p>
                </li>
              </ul>
            </div>
            <div className="featured_box">
              <h4 className="featured_sub_title">Atlassian Cloud Platform</h4>
              <p className="featured_sub_desc">
                The connected foundation of your system of work
              </p>
              <a className="featured-link" href="">
                Learn more <RightIcon />
              </a>
            </div>
          </div>
          </div>

          <div className="solution_footer">
            <ul className="solution_list">
              <li className="solution item">
                <h4 className="solution_title">BY TEAM TYPE</h4>
                <p className="solution_text">Software</p>
                <p className="solution_text">Marketing</p>
                <p className="solution_text">IT</p>
              </li>
              <li className="solution item">
                <h4 className="solution_title">BY SOLUTION</h4>
                <p className="solution_text">IT Service Management</p>
                <p className="solution_text">Agile & DevOps</p>
              </li>
              <li className="solution item">
                <h4 className="solution_title">BY TEAM SIZE</h4>
                <p className="solution_text">Enterprise</p>
                <p className="solution_text">Small Business</p>
                <p className="solution_text">Startup</p>
                <p className="solution_text">Non-profit</p>
              </li>
              <li className="solution item">
                <h4 className="solution_title">BY INDUSTRY</h4>
                <p className="solution_text">Retail</p>
                <p className="solution_text">Telecommunications </p>
                <p className="solution_text">Professional service</p>
                <p className="solution_text">Government</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`modal_atlassian  ${atlassianActive ? 'atlassian_modal_active' : ''}`}>
        <div className={`atlassian_block ${atlassianActive ? 'atlassian_active' : ''}`}>
          <ul className="atlassian_list">
              {AtlassianData.map((item , index) => (
                <li className="atlassian_item" key={index}>
                  <a href="">
                    <h4 className="atlassian_title">{item.title} {item.new ? <span className="atlassian_new">{item.new}</span> : ''}</h4>
                    <p className="atlassian_desc">{item.desc}</p>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className={`modal_resources ${resourcesActive ? 'modal_resources_activ' : ''}`}>
        <div className={`resources_block ${resourcesActive ? 'resources_active' : ''}`}>
          <ul className="resources_list">
            {ResourcesData.map((item , index) => (
              <li key={index} className="resources_item">
                <a href="">
                  <h4 className="resources_item_title">{item.title}</h4>
                  <p className="resources_item_desc">{item.desc}</p>
                </a>
              </li>
            ))}
          </ul>
          <ul className="resources_footer_list">
            <li className="resources_footer_item">
              <h5 className="resources_title">Support</h5>
              <div className="resources_footer_block">
                <p>General Inquiries</p>
                <p>Technical Support</p>
                <p>Product Advice</p>
                <p>Pricing and Billing</p>
                <p>Partner Support</p>
                <p>Developer Support</p>
                <p>Enterprise Support</p>
                <p>Pruchasing and Licensing</p>
              </div>
            </li>
            <li className="resources_footer_item">
              <h5 className="resources_title">Learn</h5>
              <div className="resources_footer_block">
                <p>Project Management</p>
                <p>Project Collaboration</p>
                <p>Agile</p>
                <p>Team Playbook</p>
                <p>Community</p>
                <p>Product Documentation</p>
                <p>Get Started</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
