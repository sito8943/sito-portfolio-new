/* eslint-disable no-undef */
import { Suspense, useState, useEffect, useCallback } from "react";
import loadable from "@loadable/component";

// images
import circlesMobiles from "../../assets/forms/circlesMobile.svg";

// styles
import "./styles.css";

// components
const Left = loadable(() => import("./Articles/Left"));
const Right = loadable(() => import("./Articles/Right"));

function Hero() {
  const [turnBalls, setTurnBalls] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTurnBalls(true);
    }, 400);
  }, []);

  return (
    <section id="hero" className="hero relative overflow-hidden">
      <Suspense>
        <img
          src={circlesMobiles}
          alt="bg"
          className={`${
            turnBalls ? "float-inv-radial" : "entrance"
          }  absolute top-[50%] left-[50%] z-0 -translate-y-[50%] -translate-x-[50%] w-[200vw] h-[200vh]`}
        />
        <Left />
        <Right />
      </Suspense>
    </section>
  );
}

export default Hero;
