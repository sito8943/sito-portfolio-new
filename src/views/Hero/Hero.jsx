import { Suspense, useEffect, useCallback } from "react";
import loadable from "@loadable/component";

// images
import circlesMobiles from "../../assets/forms/circlesMobile.svg";

// styles
import "./styles.css";

// components
const Left = loadable(() => import("./Articles/Left"));
const Right = loadable(() => import("./Articles/Right"));

function Hero() {
  const onScroll = useCallback(() => {
    console.log()
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <section id="hero" className="hero">
      <Suspense>
        <img
          src={circlesMobiles}
          alt="bg"
          className="entrance absolute top-0 left-0 z-0 w-full h-screen"
        />
        <Left />
        <Right />
      </Suspense>
    </section>
  );
}

export default Hero;
