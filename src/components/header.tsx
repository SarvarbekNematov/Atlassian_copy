import { Link } from "react-router-dom";
import { JSX, useEffect, useState } from "react";
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
  const [activeHead , setActiveHead] = useState(0)
  const [noActiveData , setNoActiveData] = useState<MyDataType[]>([])
  const [noActive , setNoActive] = useState(false)

  const handleClickBtn = (id: number) => {
    setActiveId(id);
  };

  useEffect(() => {
    if(!moreActive){
      const notActiveMore = HeaderTitles.slice(0, 2);
      setNoActiveData(notActiveMore)
      setNoActive(true)
    }
    if(moreActive){
      setNoActive(false)
    }
  }, [moreActive])

  const handleClickProduct = (id: number) => {
    if(activeHead != 0 ){
      if(activeHead === id){
        setActiveHead(0) 
        console.log('id' , id);
        console.log('activeHead' , activeHead);
        return
      }
      setActiveHead(id)
    }
     setActiveHead(id)
  };

  const handleClickLess = () => {
    setActiveHead(0)
  }

  return (
    <div className="header">
      <div className="header_block">
        <div className="desctop_logo_block">
          <div className="logo_block">
            <Logo />
          </div>
          <ul className="header_list">
            {noActive ? noActiveData.map(item => (
              <li key={item.id} className="header_item">
              <button
                onClick={() => handleClickProduct(item.id)}
                className="header_item_btn">
                {item.title}{" "}
                <span className="header_bottom_icon">
                  {item.icon}
                </span>
              </button>
            </li>
            )) : HeaderTitles.map(item => (
              <li key={item.id} className="header_item">
              <button
                onClick={() => handleClickProduct(item.id)}
                className="header_item_btn">
                {item.title}{" "}
                <span className="header_bottom_icon">
                  {item.icon}
                </span>
              </button>
            </li>
            ))}
            {noActive ?  <li>
                <button
                  className="header_more_btn"
                  onClick={() => setMoreActive(!moreActive)}
                >
                  More+
                </button>
              </li>: <li className="header_list_item">
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
              </li>}
            </ul>
            <ul className="header_desctop_list">
              {HeaderTitles.map(item => (
              <li key={item.id} className="header_item">
              <button
                onClick={() => handleClickProduct(item.id)}
                className="header_item_btn">
                {item.title}{" "}
                <span className="header_bottom_icon">
                  {item.icon}
                </span>
              </button>
            </li>
            ))}
            <li className="header_list_item">
            <a href="">
                  <button className="header_item_btn">Enterprise</button>
                </a>
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
      <ProductsModal active={activeHead} activeId={activeId} handleClick={handleClickBtn}/>
      <SolutionModal active={activeHead}/>
     <AtlassianModal active={activeHead}/>
      <ResourcesModal active={activeHead}/>
    </div>
  );
};

export default Header;