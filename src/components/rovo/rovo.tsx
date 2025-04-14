import { RovoImg } from "../../assets/icons";
import "./rovo.css";
const Rovo = () => {
  return (
    <div className="rovo">
      <div className="rovo_sub">
        <div className="rovo_logo_block">
            <RovoImg />
        </div>
        <h3 className="rovo_title">
          Transform teamwork with human-AI collaboration
        </h3>
        <a className="rovo_link" href="">
          Explore Rovo
        </a>
        <div></div>
      </div>
      <div className="rovo_bg">
        <video
          playsInline
          muted
          preload="auto"
          loop
          poster="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/jghzmt5nq49hs6h7nzj4b537/CSD-10721_WAC__AI-3298633667.webp"
          autoPlay
          className="rovo-video"
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
