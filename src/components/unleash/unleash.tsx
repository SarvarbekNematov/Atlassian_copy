import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";

import "./unleash.css";
const Unleash = () => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  // Animatsiya bo'lganligini kuzatish uchun ref
  const elementRef = useRef<HTMLDivElement | null>(null);
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

  return (
    <div className="unleash">
      <div className="unleash_block">
        <h3 className="unleash_title">
          Unleash the power of
          <span className="unleash_teamwork ">
            {" "}
            teamwork
            <div
              className="unleash_img_block"
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
        <p className="unleash_desc">
          Join millions teaming up on their best work
        </p>
        <div className="unleash_link_block">
          <a href="" className="unleash_link">
            Get started for free
          </a>
        </div>
      </div>
    </div>
  );
};

export default Unleash;
