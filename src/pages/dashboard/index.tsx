import {
  HeroSvg,
  RightIcon
} from "../../assets/icons";
import TeamWork from "../../components/team-work/team-work";
import Rovo from "../../components/rovo/rovo";
import GlobeAtlassian from "../../components/globe-atlassian/globeAtlassian";
import Empower from "../../components/empover/empower";
import Template from "../../components/templates/template";
import Customer from "../../components/customers/customer";
import Story from "../../components/story/story";
import Unleash from "../../components/unleash/unleash";
import Jira from "../../components/new-jira/jira";

import "./dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard">
        <div className="hero">
          <div className="hero__text-wrapper">
            <span className="hero__text-span">Announcement</span>
            <div className="hero__logo-wrapper">
              <HeroSvg/>
            </div>
            <p className="hero__desc">Atlassian’s most powerful apps: Jira, Confluence, Loom and AI Agents, packaged together to drive your team to success.</p>
            <div className="hero__link-wrapper">
              <a className="hero__link" href="">Learn about Teamwork Collection <RightIcon/></a>
            </div>
          </div>
          <div className="hero__img-wrapper">
            <img src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/mwhwnwgxjkp87psgkztmgv/gwp-5421-illustration.png?auto=webp" alt="" />
          </div>  
        </div>          
          <Jira/>
          <TeamWork/>
          <Rovo/>
          <GlobeAtlassian/>
          <Empower/>
          <Template/>
          <Customer/>
          <Story/>
          <Unleash/>
      </div>
    </div>
  );
};

export default Dashboard;
