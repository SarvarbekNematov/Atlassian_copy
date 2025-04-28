import { useIntersectionObserver } from "usehooks-ts";
import { useEffect, useRef } from "react";
import "./story.css";

const Story = () => {
  // Using Intersection Observer to track visibility of an element
  const { isIntersecting: isIntersectingElement, ref: elementRef } = useIntersectionObserver({
    threshold: 0.5, // Trigger when 50% of the element is in the viewport
  });

  // Using useRef and useEffect to handle animations
  const elementToAnimateRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!elementToAnimateRef.current) return;

    if (isIntersectingElement) {
      // When the element enters the viewport, apply animation
      elementToAnimateRef.current.classList.add("in-view");

      // Remove the animation class to reset animation
      elementToAnimateRef.current.classList.remove("animating");

      // Reapply the animation class after a slight delay
      setTimeout(() => {
        if (elementToAnimateRef.current) {
          elementToAnimateRef.current.classList.add("animating");
        }
      }, 10);
    } else {
      // When the element leaves the viewport, stop animation
      elementToAnimateRef.current.classList.remove("in-view");
      elementToAnimateRef.current.classList.remove("animating");
    }
  }, [isIntersectingElement]);

  // Second intersection observer for another element
  const { isIntersecting: isIntersectingChecked, ref: checkedRef } = useIntersectionObserver({
    threshold: 0.5, // Trigger when 50% of the element is in the viewport
  });

  // Another useRef for handling animation of the checked element
  const checkedElementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!checkedElementRef.current) return;

    if (isIntersectingChecked) {
      // When the checked element enters the viewport, apply animation
      checkedElementRef.current.classList.add("in-view");

      // Remove the animation class to reset animation
      checkedElementRef.current.classList.remove("animating");

      // Reapply the animation class after a slight delay
      setTimeout(() => {
        if (checkedElementRef.current) {
          checkedElementRef.current.classList.add("animating");
        }
      }, 10);
    } else {
      // When the checked element leaves the viewport, stop animation
      checkedElementRef.current.classList.remove("in-view");
      checkedElementRef.current.classList.remove("animating");
    }
  }, [isIntersectingChecked]);

  return (
    <div className="story">
      <div className="story__wrapper">
        
        {/* Checkmark icon */}
        <div
          className="story__check-img"
          ref={(el) => {
            checkedRef(el);  // Link the element with the intersection observer
            checkedElementRef.current = el; // Reference the DOM element using useRef
          }}
        >
          <img
            src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/x8cck4gs6wxq6bp56mpgng3f/circle-checkmark.svg"
            alt="checkmark"
          />
        </div>

        {/* Wrapper for images and animations */}
        <div
          className="story__img-wrapper"
          ref={(el) => {
            elementRef(el);  // Link the element with the intersection observer
            elementToAnimateRef.current = el; // Reference the DOM element using useRef
          }}
        >
          <div className="story__yellow-img">
            <img
              src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/7ps99877wpxwhx8xncghqg5/big-star.svg"
              alt="yellow star"
            />
          </div>
          <div className="story__black-img">
            <img
              src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/nqhrc8jfm39crsj3xwc7g2b/sm-star.svg"
              alt="black star"
            />
          </div>
        </div>

        {/* Main content */}
        <h3 className="story__title">
          Help us shape <strong>the future of teamwork</strong>
        </h3>
        <p className="story__desc">
          At Atlassian, we believe the impossible is possible - together. Join
          us today to help us inspire teamwork anywhere and everywhere,
          worldwide.
        </p>

        {/* Share your story link */}
        <div className="story__share-wrapper">
          <a className="story__share" href="">
            Share your story
          </a>
        </div>
      </div>
    </div>
  );
};

export default Story;
