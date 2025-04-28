import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";

import "./unleash.css";

const Unleash = () => {
  // Intersection observer hook for detecting visibility
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  // Reference for the element to be animated
  const elementRef = useRef<HTMLDivElement | null>(null);

  // Effect to trigger animation based on intersection status
  useEffect(() => {
    if (!elementRef.current) return;

    // If the element is in view, add animation classes
    if (isIntersecting) {
      elementRef.current.classList.add("in-view");
      elementRef.current.classList.remove("animating");

      // Adding animation after a brief delay to trigger CSS animation
      setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.classList.add("animating");
        }
      }, 10);
    } else {
      // Remove animation classes when the element is out of view
      elementRef.current.classList.remove("in-view");
      elementRef.current.classList.remove("animating");
    }
  }, [isIntersecting]);

  return (
    <div className="unleash">
      <div className="unleash__wrapper">
        {/* Title with teamwork text and animated image */}
        <h3 className="unleash__title">
          Unleash the power of
          <span className="unleash__teamwork">
            teamwork
            {/* Wrapper for the animated image */}
            <div
              className="unleash__img-wrapper"
              ref={(el) => {
                ref(el);
                elementRef.current = el;
              }}
            >
              <img
                src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/nbxktx3rcznmxx5mpwx5s3q6/power-of-teamwork-stroke.svg"
                alt="Power of teamwork"
              />
            </div>
          </span>
        </h3>

        {/* Description text */}
        <p className="unleash__desc">
          Join millions teaming up on their best work
        </p>

        {/* Call to action link */}
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
