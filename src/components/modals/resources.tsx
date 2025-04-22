import { ResourcesData } from '../../data'

import './resources.css'

const ResourcesModal = (props : {active : number}) => {
  return (
    <div className={`modal_resources ${props.active === 4 ? 'modal_resources_activ' : ''}`}>
        <div className={`resources_block ${props.active === 4 ? 'resources_active' : ''}`}>
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
          <div className="resources_footer_list">
            <div className="resources_footer_item">
              <h5 className="resources_title">Support</h5>
              <ul className="resources_footer_block">
                <li>General Inquiries</li>
                <li>Technical Support</li>
                <li>Product Advice</li>
                <li>Pricing and Billing</li>
                <li>Partner Support</li>
                <li>Developer Support</li>
                <li>Enterprise Support</li>
                <li>Pruchasing and Licensing</li>
              </ul>
            </div>
            <div className="resources_footer_item">
              <h5 className="resources_title">Learn</h5>
              <ul className="resources_footer_block">
                <li>Project Management</li>
                <li>Project Collaboration</li>
                <li>Agile</li>
                <li>Team Playbook</li>
                <li>Community</li>
                <li>Product Documentation</li>
                <li>Get Started</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ResourcesModal