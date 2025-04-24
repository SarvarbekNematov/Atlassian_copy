import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";

import "./unleash.css";

const Unleash = () => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  const elementRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!elementRef.current) return;

    if (isIntersecting) {
      elementRef.current.classList.add("in-view");

      elementRef.current.classList.remove("animating");
      setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.classList.add("animating");
        }
      }, 10);
    } else {
      elementRef.current.classList.remove("in-view");
      elementRef.current.classList.remove("animating");
    }
  }, [isIntersecting]);

  return (
    <div className="unleash">
      <div className="unleash__wrapper">
        <h3 className="unleash__title">
          Unleash the power of
          <span className="unleash__teamwork ">
            {" "}
            teamwork
            <div
              className="unleash__img-wrapper"
              ref={(el) => {
                ref(el);
                elementRef.current = el;
              }}
            >
              <img
                src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/nbxktx3rcznmxx5mpwx5s3q6/power-of-teamwork-stroke.svg"
                alt="img"
              />
            </div>
          </span>
        </h3>
        <p className="unleash__desc">
          Join millions teaming up on their best work
        </p>
        <div className="unleash__link-wrapper">
          <a href="" className="unleash__link">
            Get started for free
          </a>
        </div>
      </div>
    </div>
  );
};

export default Unleash;
