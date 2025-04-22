import { AtlassianData } from "../../data"

import './atlassian.css'

const AtlassianModal = (props :{active : number}) => {
  return (
    <div>
         <div className={`modal_atlassian  ${props.active === 3 ? 'atlassian_modal_active' : ''}`}>
        <div className={`atlassian_block ${props.active === 3 ? 'atlassian_active' : ''}`}>
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
    </div>
  )
}

export default AtlassianModal