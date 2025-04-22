import { JSX, useEffect, useState } from "react";
import { modalProductsData, ProductsTitles } from "../../data"
import FeaturedModal from "./products/featured"

import './product.css'
import { RightIcon } from "../../assets";

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
        <div className="modal_product_container">
        <div
          className={`modal_products ${props.active === 1 ? "modalActive" : ""}`}
        >
          <div>
            <ul className="modal_active_list">
              {ProductsTitles.map((item) => (
                <li
                  key={item.id}
                  className={`modal_active_item ${
                    props.activeId === item.id ? "activeLink" : ""
                  }`}
                >
                  <button onClick={() => props.handleClick(item.id)}>
                    {item.title}
                  </button>
                </li>
              ))}
            <div className="links">
              <a className="links_a" href="">See all products <RightIcon/></a>
            </div>
            </ul>
          </div>
          <div>
            {props.activeId === 1 ? <FeaturedModal /> : <ul className="modal-product-sub-list">
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
            </ul>}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsModal