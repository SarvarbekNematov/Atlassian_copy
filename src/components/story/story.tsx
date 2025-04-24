import { useIntersectionObserver } from "usehooks-ts";
import { useEffect, useRef } from "react";

import "./story.css";

const Story = () => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  const elementRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (!elementRef.current) return;

    if (isIntersecting) {
      // Element ko'rinish maydoniga kirganda
      elementRef.current.classList.add("in-view");

      // Animatsiyani qayta ishga tushirish uchun
      elementRef.current.classList.remove("animating");
      // Kichik kechikish bilan class qo'shish orqali animatsiyani yangilash
      setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.classList.add("animating");
        }
      }, 10);
    } else {
      // Element ko'rinish maydonidan chiqqanda
      elementRef.current.classList.remove("in-view");
      elementRef.current.classList.remove("animating");
    }
  }, [isIntersecting]);

  const { isIntersecting: isIntersectingCheck, ref: refTwo } =
    useIntersectionObserver({
      threshold: 0.5,
    });

  const checkedRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (!checkedRef.current) return;

    if (isIntersectingCheck) {
      // Element ko'rinish maydoniga kirganda
      checkedRef.current.classList.add("in-view");

      // Animatsiyani qayta ishga tushirish uchun
      checkedRef.current.classList.remove("animating");
      // Kichik kechikish bilan class qo'shish orqali animatsiyani yangilash
      setTimeout(() => {
        if (checkedRef.current) {
          checkedRef.current.classList.add("animating");
        }
      }, 10);
    } else {
      // Element ko'rinish maydonidan chiqqanda
      checkedRef.current.classList.remove("in-view");
      checkedRef.current.classList.remove("animating");
    }
  }, [isIntersecting]);
  return (
    <div className="story">
      <div className="story__wrapper">
        <div
          className="story__check-img"
          ref={(el) => {
            refTwo(el);
            checkedRef.current = el;
          }}
        >
          <img
            src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/x8cck4gs6wxq6bp56mpgng3f/circle-checkmark.svg"
            alt="img"
          />
        </div>

        <div
          className="story__img-wrapper"
          ref={(el) => {
            ref(el);
            elementRef.current = el;
          }}
        >
          <div className="story__yellow-img">
            <img
              src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/7ps99877wpxwhx8xncghqg5/big-star.svg"
              alt=""
            />
          </div>
          <div className="story__black-img">
            <img
              src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/nqhrc8jfm39crsj3xwc7g2b/sm-star.svg"
              alt=""
            />
          </div>
        </div>

        <h3 className="story__title">
          Help us shape <strong>the future of teamwork</strong>
        </h3>
        <p className="story__desc">
          At Atlassian, we believe the impossible is possible - together. Join
          us today to help us inspire teamwork anywhere and everywhere,
          worldwide.
        </p>
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
