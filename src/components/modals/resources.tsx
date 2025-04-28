import { ResourcesData } from '../../data';

import './resources.css';

interface ResourcesModalProps {
  active: number;
}

const ResourcesModal = ({ active }: ResourcesModalProps) => {
  return (
    <div className={`resources__modal ${active === 4 ? 'resources__modal-active' : ''}`}>
      <div className={`resources__wrapper ${active === 4 ? 'resources__active' : ''}`}>
        <ul className="resources__list">
          {ResourcesData.map((item) => (
            <li key={item.title} className="resources__item">
              <a href="#">
                <h4 className="resources__item-title">{item.title}</h4>
                <p className="resources__item-desc">{item.desc}</p>
              </a>
            </li>
          ))}
        </ul>

        <div className="resources__footer-list">
          <div className="resources__footer-item">
            <h5 className="resources__title">Support</h5>
            <ul className="resources__footer-wrapper">
              <li>General Inquiries</li>
              <li>Technical Support</li>
              <li>Product Advice</li>
              <li>Pricing and Billing</li>
              <li>Partner Support</li>
              <li>Developer Support</li>
              <li>Enterprise Support</li>
              <li>Purchasing and Licensing</li>
            </ul>
          </div>

          <div className="resources__footer-item">
            <h5 className="resources__title">Learn</h5>
            <ul className="resources__footer-wrapper">
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
  );
};

export default ResourcesModal;
