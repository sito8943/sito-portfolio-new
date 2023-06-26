import { useMemo } from "react";

// contexts
import { useLanguage } from "../../../contexts/LanguageProvider";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// components
import PrintAfter from "../../../components/PrintAfter/PrintAfter";

function Left() {
  const { languageState } = useLanguage();

  const { hero } = useMemo(() => {
    return { hero: languageState.texts.hero };
  }, [languageState]);

  return (
    <article className="hero-left-section">
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
  );
}

export default Left;
