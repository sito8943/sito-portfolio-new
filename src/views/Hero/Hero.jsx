import { useEffect, useCallback, useMemo } from "react";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// images
import circles from "../../assets/forms/circles.svg";
import circlesMobiles from "../../assets/forms/circlesMobile.svg";
import sito1 from "../../assets/images/1.jpg";
import sito2 from "../../assets/images/2.jpg";
import sito3 from "../../assets/images/3.jpg";

// components
import PrintAfter from "../../components/PrintAfter/PrintAfter";

// styles
import "./styles.css";

function Hero() {
  const { languageState } = useLanguage();

  const { hero } = useMemo(() => {
    return { hero: languageState.texts.hero };
  }, [languageState]);

  const onScroll = useCallback(() => {}, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <section id="hero" className="h-screen flex bg-dark-p">
      <img
        src={circlesMobiles}
        alt="bg"
        className="absolute top-0 left-0 z-0 w-full h-screen"
      />
      <article className="hero-left-section padding-left">
        <PrintAfter delay={600}>
          <h1 className="aGrow">{hero.title}</h1>
        </PrintAfter>
        <PrintAfter delay={800}>
          <p className="aGrow">{hero.body}</p>
        </PrintAfter>
        <div className="flex gap-5 mt-5 ml-1">
          <PrintAfter delay={1000}>
            <a
              className="appear text-[white] text-2xl hover:text-secondary hover:-translate-y-1 transition"
              href="https://github.com/SitoNumbis"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </PrintAfter>
          <PrintAfter delay={1100}>
            <a
              className="appear text-[white] text-2xl hover:text-secondary hover:-translate-y-1 transition"
              href="https://www.facebook.com/carlosandres.moragonzalez.7/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </PrintAfter>
          <PrintAfter delay={1200}>
            <a
              className="appear text-[white] text-2xl hover:text-secondary hover:-translate-y-1 transition"
              href="https://www.instagram.com/sitonumbis/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </PrintAfter>
          <PrintAfter delay={1300}>
            <a
              className="appear text-[white] text-2xl hover:text-secondary hover:-translate-y-1 transition"
              href="https://twitter.com/sito8943"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </PrintAfter>
        </div>
      </article>
      <article className="z-10 hero-images">
        <div className="hero-image">
          <PrintAfter delay={200}>
            <div className="border-2 border-[white] w-full h-full absolute top-[20px] left-[20px] appear"></div>
          </PrintAfter>
          <div className="hero-image-container appear">
            <img src={sito1} alt="sito" loading="lazy" className="ease" />
          </div>
        </div>

        <div className="hero-image">
          <PrintAfter delay={200}>
            <div className="border-2 border-[white] w-full h-full absolute top-[20px] left-[20px] appear"></div>
          </PrintAfter>
          <div className="hero-image-container appear">
            <img src={sito2} alt="sito" loading="lazy" className="ease" />
          </div>
        </div>

        <div className="hero-image">
          <PrintAfter delay={200}>
            <div className="border-2 border-[white] w-full h-full absolute top-[20px] left-[20px] appear"></div>
          </PrintAfter>
          <div className="hero-image-container appear">
            <img src={sito3} alt="sito" loading="lazy" className="ease" />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Hero;
