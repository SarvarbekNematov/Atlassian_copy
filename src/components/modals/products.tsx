import { JSX, useEffect, useState } from "react";
import { modalProductsData, ProductsTitles } from "../../data"
import FeaturedModal from "./products/featured"
import { RightIcon } from "../../assets";

import './product.css'

type MyDataType = {
    icons: JSX.Element;
    title: string;
    desc: string;
    new: string;
  };

const ProductsModal = (props : {active : number , activeId : number , handleClick : (id : number) => void}) => {
  const [data, setData] = useState<MyDataType[]>([]);

    useEffect(() => {
      modalProductsData.map((item) => {
        if (item.id === props.activeId) {
          return setData(item.data);
        }
      });
    }, [props.activeId]);
    
  return (
    <div>
        <div className="product__modal-container">
        <div
          className={`product__modal ${props.active === 1 ? "product__active" : ""}`}
        >
          <div>
            <ul className="product__active-list">
              {ProductsTitles.map((item) => (
                <li
                  key={item.id}
                  className={`product__active-item ${
                    props.activeId === item.id ? "product__active-link" : ""
                  }`}
                >
                  <button onClick={() => props.handleClick(item.id)}>
                    {item.title}
                  </button>
                </li>
              ))}
            <div className="product__link-wrapper">
              <a className="product__link" href="">See all products <RightIcon/></a>
            </div>
            </ul>
          </div>
          <div>
            {props.activeId === 1 ? <FeaturedModal /> : <ul className="product__list">
              {data?.map((item, index) => (
                <li key={index} className="product__item">
                  <div className="product__icon-wrapper">
                    <span className="product__icon">{item.icons}</span>
                  </div>
                  <div>
                    <h5 className="product__title">
                      {item.title}{" "}
                      {item.new ? (
                        <span className="product__new">{item.new}</span>
                      ) : (
                        ""
                      )}{" "}
                    </h5>
                    <p className="product__desc">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsModal