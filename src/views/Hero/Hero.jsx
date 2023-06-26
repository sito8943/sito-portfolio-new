import { useMemo } from "react";

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

  return (
    <section id="hero" className="h-screen flex">
      <article className="padding-left w-full h-full bg-dark-p left-apparition flex flex-col items-start justify-center">
        <PrintAfter delay={1000}>
          <h1 className="text-7xl font-bold text-[white] aGrow">
            {hero.title}
          </h1>
        </PrintAfter>
        <PrintAfter delay={1300}>
          <p className="text-[white] mt-5 text-xl ml-1 aGrow">{hero.body}</p>
        </PrintAfter>
        <div className="flex gap-5 mt-5 ml-1">
          <PrintAfter delay={1400}>
            <a
              className="appear text-[white] text-2xl hover:text-secondary hover:-translate-y-1 transition"
              href="https://github.com/SitoNumbis"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </PrintAfter>
          <PrintAfter delay={1600}>
            <a
              className="appear text-[white] text-2xl hover:text-secondary hover:-translate-y-1 transition"
              href="https://www.facebook.com/carlosandres.moragonzalez.7/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </PrintAfter>
          <PrintAfter delay={1600}>
            <a
              className="appear text-[white] text-2xl hover:text-secondary hover:-translate-y-1 transition"
              href="https://www.instagram.com/sitonumbis/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </PrintAfter>
          <PrintAfter delay={1800}>
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
      <article className="hero-images">
        <PrintAfter delay={1000}>
          <div className="hero-image appear">
            <PrintAfter delay={200}>
              <div className="border-2 border-[white] w-full h-full absolute top-[20px] left-[20px] appear"></div>
            </PrintAfter>
            <div className="hero-image-container">
              <img src={sito1} alt="sito" loading="lazy" className="ease" />
            </div>
          </div>
        </PrintAfter>
        <PrintAfter delay={1200}>
          <div className="hero-image appear">
            <PrintAfter delay={400}>
              <div className="border-2 border-[white] w-full h-full absolute top-[20px] left-[20px] appear"></div>
            </PrintAfter>
            <div className="hero-image-container">
              <img src={sito2} alt="sito" loading="lazy" className="ease" />
            </div>
          </div>
        </PrintAfter>
        <PrintAfter delay={1400}>
          <div className="hero-image appear">
            <PrintAfter delay={600}>
              <div className="border-2 border-[white] w-full h-full absolute top-[20px] left-[20px] appear"></div>
            </PrintAfter>
            <div className="hero-image-container">
              <img src={sito3} alt="sito" loading="lazy" className="ease" />
            </div>
          </div>
        </PrintAfter>
      </article>
    </section>
  );
}

export default Hero;
