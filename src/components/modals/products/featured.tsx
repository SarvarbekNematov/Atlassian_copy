import { HeroSvg, RightIcon } from '../../../assets/icons'
import { AgentsIcon, AgentsYellowIcon, AlignIcon, ConfluenceIcon, FocusIcon, JiraIcon, LoomIcon, StrategyIcon, TalentIcon } from '../../../assets/modalIcons'
import './featured.css'

const FeaturedModal = () => {
  return (
    <div>
      <div className="featured_block">
        <h4 className='featured_title'>Atlassian Collections <span>NEW</span> </h4>
        <p className='featured_desc'>A curated set of apps designed to solve your specific challenges</p>
        <div className="featured_sub_block">
          <div className="featured_card">
            <span className='featured_icon_block'>
              <HeroSvg/>
            </span>
            <p className='featured_desc_card'>Apps and agents to supercharge teamwork</p>
            <ul className='featured_card_list'>
              <li className='featured_card_item'>
                <span className='featured_card_icon'><JiraIcon/></span>
                <p className='featured_card_title'>Jira</p>
              </li>
              <li className='featured_card_item'>
                <span className='featured_card_icon'><ConfluenceIcon/></span>
                <p className='featured_card_title'>Confluence</p>
              </li>
              <li className='featured_card_item'>
                <span className='featured_card_icon'><LoomIcon/></span>
                <p className='featured_card_title'>Loom</p>
              </li>
              <li className='featured_card_item'>
                <span className='featured_card_icon'><AgentsIcon/></span>
                <p className='featured_card_title'>Agents</p>
              </li>
            </ul>
          </div>
          <div className="featured_card">
            <span className='featured_icon_block'>
              <StrategyIcon/>
            </span>
            <p className='featured_desc_card'>Powerful apps to optimize strategy</p>
            <ul className='featured_card_list'>
              <li className='featured_card_item'>
                <span className='featured_card_icon'><AlignIcon/></span>
                <p className='featured_card_title'>Align</p>
              </li>
              <li className='featured_card_item'>
                <span className='featured_card_icon'><FocusIcon/></span>
                <p className='featured_card_title'>Focus</p>
              </li>
              <li className='featured_card_item'>
                <span className='featured_card_icon'><TalentIcon/></span>
                <p className='featured_card_title'>Talent</p>
              </li>
              <li className='featured_card_item'>
                <span className='featured_card_icon'><AgentsYellowIcon/></span>
                <p className='featured_card_title'>Agents</p>
              </li>
            </ul>
          </div>
        </div>

        <span className='featured_libe_block'></span>

        <div className='featured_box'>
          <h4 className='featured_sub_title'>Atlassian Cloud Platform</h4>
          <p className='featured_sub_desc'>The connected foundation of your system of work</p>
          <a className='featured-link' href="">Learn more <RightIcon/></a>
        </div>
      </div>
    </div>
  )
}

export default FeaturedModal