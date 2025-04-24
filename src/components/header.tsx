import { Link } from "react-router-dom";
import { JSX, useEffect, useState, useRef } from "react";
import SolutionModal from "./modals/solutions";
import AtlassianModal from "./modals/atlassian";
import { Logo, MenuIcon, SearchIcon } from "../assets";
import ProductsModal from "./modals/products";
import ResourcesModal from "./modals/resources";
import { HeaderTitles } from "../data";

import "./header.css";

type MyDataType = {
    icon: JSX.Element;
    title: string;
    id: number
};

const Header = () => {
  const [moreActive, setMoreActive] = useState(false);
  const [activeId, setActiveId] = useState(1);
  const [activeHead, setActiveHead] = useState(0);
  const [noActiveData, setNoActiveData] = useState<MyDataType[]>([]);
  const [noActive, setNoActive] = useState(false);
  const [isHoveringModal, setIsHoveringModal] = useState(false);
  
  // Ref for tracking timeouts
  const timeoutRef = useRef<number | null>(null);

  const handleClickBtn = (id: number) => {
    setActiveId(id);
  };

  useEffect(() => {
    if(!moreActive){
      const notActiveMore = HeaderTitles.slice(0, 2);
      setNoActiveData(notActiveMore);
      setNoActive(true);
    }
    if(moreActive){
      setNoActive(false);
    }
  }, [moreActive]);

  const handleClickProduct = (id: number) => {
    if(activeHead !== 0){
      if(activeHead === id){
        setActiveHead(0);
        return;
      }
      setActiveHead(id);
    } else {
      setActiveHead(id);
    }
  };

  const handleClickLess = () => {
    setActiveHead(0);
  };

  // Handle mouse enter on menu item
  const handleMenuItemEnter = (id: number) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveHead(id);
  };

  // Handle mouse leave on menu item
  const handleMenuItemLeave = () => {
    // Set a timeout before closing the modal
    // This gives time to move to the modal
    timeoutRef.current = window.setTimeout(() => {
      if (!isHoveringModal) {
        setActiveHead(0);
      }
    }, 100);
  };

  // Handle mouse enter on modal
  const handleModalEnter = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsHoveringModal(true);
  };

  // Handle mouse leave on modal
  const handleModalLeave = () => {
    setIsHoveringModal(false);
    setActiveHead(0);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return <>
     {activeHead > 0 && (
      <div 
        className="header-modal-overlay"
        onClick={() => setActiveHead(0)} // Overlay bosilganda modallar yopiladi
      />
    )}
    <div className="header">
      <div className="header__wrapper">
        <div className="header__logo-wrapper">
          <div className="header__logo">
            <a href="">
               <Logo />
            </a>
          </div>
          <ul className="header__list">
            {noActive ? noActiveData.map(item => (
              <li key={item.id} className="header__item">
              <button
                onMouseEnter={() => handleMenuItemEnter(item.id)}
                onMouseLeave={handleMenuItemLeave}
                onClick={() => handleClickProduct(item.id)}
                className="header__item-button">
                {item.title}{" "}
                <span className="header__bottom-icon">
                  {item.icon}
                </span>
              </button>
            </li>
            )) : HeaderTitles.map(item => (
              <li key={item.id} className="header__item">
              <button
                onMouseEnter={() => handleMenuItemEnter(item.id)}
                onMouseLeave={handleMenuItemLeave}
                className="header__item-button">
                {item.title}{" "}
                <span className="header__bottom-icon">
                  {item.icon}
                </span>
              </button>
            </li>
            ))}
            {noActive ?  <li>
                <button
                  className="header__more-button"
                  onClick={() => setMoreActive(!moreActive)}
                >
                  More+
                </button>
              </li>: <li className="header__list-item">
              <div>
                  <button className="header__item-button">Enterprise</button>
                </div>
                <div className="">
                  <button
                    onClick={() =>{ setMoreActive(!moreActive) , handleClickLess()}}
                    className="header__less-button"
                  >
                    Less-
                  </button>
                </div>
              </li>}
            </ul>
            <ul className="header__desctop-list">
              {HeaderTitles.map(item => (
              <li key={item.id} className="header__item">
              <button
                onMouseEnter={() => handleMenuItemEnter(item.id)}
                onMouseLeave={handleMenuItemLeave}
                className="header__item-button">
                {item.title}{" "}
                <span className="header__bottom-icon">
                  {item.icon}
                </span>
              </button>
            </li>
            ))}
            <li className="header__list-item">
            <a href="">
                  <button className="header__item-button">Enterprise</button>
                </a>
            </li>
            </ul>
        </div>

        <div className="menu__wrapper">
          {moreActive ? (
            ""
          ) : (
            <div className="menu__sub-wrapper">
              <button className="search__icon">
                <SearchIcon />
              </button>
              <span className="header__center-line"></span>
              <Link className="header__signin-link" to={"/"}>
                Sign in
              </Link>
              <span className="header__border-line"></span>
            </div>
          )}
          <div className="header__menu-desctop">
            <button className="search__icon">
              <SearchIcon />
            </button>
            <span className="header__center-line"></span>
            <Link className="header__signin-link" to={"/"}>
              Sign in
            </Link>
          </div>
          <button className="header__menu">
            <MenuIcon />
            <MenuIcon />
            <MenuIcon />
          </button>
        </div>
      </div>
      {/* Modal components with mouse event handlers */}
      <div 
        onMouseEnter={handleModalEnter} 
        onMouseLeave={handleModalLeave}
      >
        <ProductsModal active={activeHead} activeId={activeId} handleClick={handleClickBtn}/>
      </div>
      
      <div 
        onMouseEnter={handleModalEnter} 
        onMouseLeave={handleModalLeave}
      >
        <SolutionModal active={activeHead}/>
      </div>
      
      <div 
        onMouseEnter={handleModalEnter} 
        onMouseLeave={handleModalLeave}
      >
        <AtlassianModal active={activeHead}/>
      </div>
      
      <div 
        onMouseEnter={handleModalEnter} 
        onMouseLeave={handleModalLeave}
      >
        <ResourcesModal active={activeHead}/>
      </div>
    </div>
    
    </>
};

export default Header;