import { RightIcon, RovoImg } from "../../assets/icons";

import "./rovo.css";

const Rovo = () => {
  return (
    <div className="rovo">
      <div className="rovo__wrapper">
        <div className="rovo__logo-wrapper">
            <RovoImg />
        </div>
        <h3 className="rovo__title">
          Transform teamwork with human-AI collaboration
        </h3>
        <a className="rovo__link" href="">
          Explore Rovo <RightIcon/>
        </a>
        <div></div>
      </div>
      <div className="rovo__video-wrapper">
        <video
          playsInline
          muted
          preload="auto"
          loop
          poster="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/jghzmt5nq49hs6h7nzj4b537/CSD-10721_WAC__AI-3298633667.webp"
          autoPlay
          className="rovo__video"
        >
          <source
            src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/as/qzr5q6w57q58fpbgzvt7b39/CSD-10721_WAC_AI_LowBR-crf-27-r-30"
            type="video/mp4"
          />
          Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.
        </video>
      </div>
    </div>
  );
};

export default Rovo;
