import {
  HeroSvg
} from "../../assets/icons";
import "./dashboard.css";
import TeamWork from "../../components/team-work/team-work";
import Rovo from "../../components/rovo/rovo";
import GlobeAtlassian from "../../components/globe-atlassian/globeAtlassian";
import Empower from "../../components/empover/empower";
import Template from "../../components/templates/template";
import Customer from "../../components/customers/customer";
import Story from "../../components/story/story";
import Unleash from "../../components/unleash/unleash";
import Jira from "../../components/new-jira/jira";


const Dashboard = () => {
  return (
    <div>
      <div className="dashboard">
        <div className="hero">
          <div className="hero_text_block">
            <span className="hero_text_span">Announcement</span>
            <div className="hero_logo_block">
              <HeroSvg/>
            </div>
            <p className="hero_desc">Atlassian’s most powerful apps: Jira, Confluence, Loom and AI Agents, packaged together to drive your team to success.</p>
            <div className="hero_link_block">
              <a className="hero_link" href="">Learn about Teamwork Collection</a>
            </div>
          </div>
          <div className="hero_img_block">
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
