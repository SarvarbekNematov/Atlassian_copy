import { AtlassianData } from "../../data"

import './atlassian.css'

const AtlassianModal = (props :{active : number}) => {
  return (
    <div>
         <div className={`atlassian__modal  ${props.active === 3 ? 'atlassian__modal-active' : ''}`}>
        <div className={`atlassian__wrapper ${props.active === 3 ? 'atlassian__active' : ''}`}>
          <ul className="atlassian__list">
              {AtlassianData.map((item , index) => (
                <li className="atlassian__item" key={index}>
                  <a href="">
                    <h4 className="atlassian__title">{item.title} {item.new ? <span className="atlassian__new">{item.new}</span> : ''}</h4>
                    <p className="atlassian__desc">{item.desc}</p>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AtlassianModal