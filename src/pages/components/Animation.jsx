import React, { useEffect} from "react";
import { TimelineMax } from 'gsap'
import { Power2 } from "gsap/TweenMax";

const Animation = ({imgSrc,imgName}) => {
  useEffect(() => {
    let animation = document.querySelector("section.animation-wrapper");
    let hero = document.querySelector(".pic-zone");
    let slider = document.querySelector(".animation-slider");

    const time_line = new TimelineMax();
    // param 1 欲控制對象
    // param 2 動畫執行時間
    // param 3 是控制對象的狀態調整
    // param 4 是控制對象的動畫結束後的狀態
    // param 5 提早多少開始跑 e.g.: -=1.2 (提早1.2秒開始跑)
    time_line
      .fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
      .fromTo(
        hero,
        1.2,
        { width: "80%" },
        { width: "100%", ease: Power2.easeInOut }
      )
      .fromTo(
        slider,
        1,
        { x: "-100%" },
        { x: "0%", ease: Power2.easeInOut },
        "-=1.2"
      )
      .fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 });

    setTimeout(() => {
      animation.style.pointerEvents = "none";
    }, 2500);
  }, [])



  return (
    <>
      {/* 開場動畫 */}
      <section className="animation-wrapper" >
        <section className="animation-zone">
          <div className="pic-zone">
            <img src={imgSrc} alt={imgName} />
          </div>
        </section>
        <div className="animation-slider" />
      </section>
    </>
  )
};

export default Animation;
