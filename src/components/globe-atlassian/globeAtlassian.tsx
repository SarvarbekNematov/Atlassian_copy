import { useEffect, useRef, useState } from "react";
import { LightningIcon } from "../../assets/icons";
import "./globeAtlassian.css";
import { useIntersectionObserver } from "usehooks-ts";
const GlobeAtlassian = () => {
    const [count300k, setCount300k] = useState<number>(0);
    const [count200, setCount200] = useState<number>(0);
    const [count80, setCount80] = useState<number>(0);
    
    const section300kRef = useRef<HTMLDivElement | null>(null);
    const section200Ref = useRef<HTMLDivElement | null>(null);
    const section80Ref = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
      const options: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      
      const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === section300kRef.current) {
              animateCounter(0, 300000, 2000, setCount300k);
            } else if (entry.target === section200Ref.current) {
              animateCounter(0, 200, 1500, setCount200);
            } else if (entry.target === section80Ref.current) {
              animateCounter(0, 80, 1500, setCount80);
            }
            observer.unobserve(entry.target);
          }
        });
      };
      
      const observer = new IntersectionObserver(handleIntersect, options);
      
      if (section300kRef.current) observer.observe(section300kRef.current);
      if (section200Ref.current) observer.observe(section200Ref.current);
      if (section80Ref.current) observer.observe(section80Ref.current);
      
      return () => {
        if (section300kRef.current) observer.unobserve(section300kRef.current);
        if (section200Ref.current) observer.unobserve(section200Ref.current);
        if (section80Ref.current) observer.unobserve(section80Ref.current);
      };
    }, []);
    
    const animateCounter = (
      start: number, 
      end: number, 
      duration: number, 
      setterFunction: React.Dispatch<React.SetStateAction<number>>
    ): void => {
      const startTime: number = Date.now();
      const endTime: number = startTime + duration;
      
      const runAnimation = (): void => {
        const now: number = Date.now();
        const remaining: number = Math.max(0, endTime - now);
        const progress: number = 1 - remaining / duration;
        
        const value: number = Math.floor(start + easeOutQuad(progress) * (end - start));
        
        setterFunction(value);
        
        if (remaining > 0) {
          requestAnimationFrame(runAnimation);
        } else {
          setterFunction(end); 
        }
      };
      
      runAnimation();
    };
    
    const easeOutQuad = (x: number): number => {
      return 1 - (1 - x) * (1 - x);
    };
    
    const formatNumber = (num: number): string => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const { isIntersecting, ref } = useIntersectionObserver({
      threshold: 0.5,
    });
  
    const elementRef = useRef<HTMLSpanElement  | null>(null);
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
    <div className="section_globe">
      <div className="globe">
        <div className="globe_block" ref={(el) => {
                ref(el);
                elementRef.current = el;
              }}>
                <div className="globe_double_block">
          <div className="globe_title_block">
            <h3 className="globe_title">
              Teams across the globe run on Atlassian
            </h3>
            <div ref={section300kRef}>
              <span  className="plusIcon">{formatNumber(count300k)}+</span>
            </div>
            <p className="globe_desc">
              companies power team collaboration with Atlassian
            </p>
          </div>
          <div className="globe_sub_block">
            <div ref={section200Ref} className="globe_lining_block">
              <span className="plusIcon media_plusicon">{count200}+</span>
              <p className="globe_sub_desc">
                countries have companies that use Atlassian
              </p>
            </div>
            <div ref={section80Ref} className="globe_lining_block">
              <span  className="foizIcon">{count80}%</span>
              <p className="globe_sub_desc">
                of Fortune 500 companies use Atlassian products
              </p>
            </div>
          </div>
          </div>
          <div className="globe_img_block">
            <span className="circularIcon"></span>
              <span className="lightningIcon">
                <LightningIcon />
              </span>
            <div className="globe_img_sub_block">
              <img
                className="globe_img"
                src="https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/q338n5stm9x4j5mq7tb43m/earth_1.webp?auto=webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobeAtlassian;
