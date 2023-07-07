import { useCallback, useMemo, useState } from "react";

import { css } from "@emotion/css";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// styles
import "./styles.css";

// contexts
import { useActive } from "./ActiveProvider";
import { useLanguage } from "../../contexts/LanguageProvider";

// components
import Project from "./Project";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  const { languageState } = useLanguage();
  const { activeState, setActiveState } = useActive();

  const [positionX, setPositionX] = useState(0);

  const columns = useMemo(() => {
    return languageState.texts.projects.items.length;
  }, [languageState]);

  const goRight = useCallback(() => {
    if (positionX !== -1 * 100 * (columns - 1)) {
      setPositionX(positionX - 100);
      setActiveState(activeState + 1);
    }
  }, [positionX, columns, activeState, setActiveState]);

  const goLeft = useCallback(() => {
    if (positionX !== 0) {
      setPositionX(positionX + 100);
      setActiveState(activeState - 1);
    }
  }, [positionX, activeState, setActiveState]);

  const printProjects = useCallback(() => {
    return languageState.texts.projects.items.map((project, i) => (
      <Project {...project} key={project.id} i={i} />
    ));
  }, [languageState]);

  return (
    <>
      <div className="w-full h-[400px] flex items-center justify-center padding-left padding-right z-10 bg-dark-p flex-col gap-3">
        <h2 className="text-[white] text-4xl font-bold">
          {languageState.texts.projects.title}
        </h2>
        <p className="text-[white] text-center mt-2">
          {languageState.texts.projects.body}
        </p>
        <a
          href="https://github.com/SitoNumbis"
          target="_blank"
          rel="noreferrer"
          className="text-[white] transition ease-in-out hover:-translate-y-1"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-2xl translate-y-[3px] mr-2"
          />
          Github
        </a>
        <p className="text-[white] mt-1 text-center">
          {languageState.texts.projects.body1}
        </p>
      </div>
      <section
        id="projects"
        className="w-full h-screen relative overflow-x-hidden"
      >
        <div className="">
          {positionX !== -1 * 100 * (columns - 1) ? (
            <button
              onClick={goRight}
              className="-translate-y-[50%] top-[50%] right-2 arrow-button"
            >
              <FontAwesomeIcon className="text-2xl" icon={faArrowRight} />
            </button>
          ) : null}

          {positionX !== 0 ? (
            <button
              onClick={goLeft}
              className="-translate-y-[50%] top-[50%] left-2 arrow-button"
            >
              <FontAwesomeIcon className="text-2xl" icon={faArrowLeft} />
            </button>
          ) : null}
        </div>
        <div
          className={`main ${css({
            gridTemplateColumns: `repeat(${columns}, 100vw)`,
            transform: `translateX(${positionX}vw)`,
          })}`}
        >
          {printProjects()}
        </div>
      </section>
    </>
  );
}

export default Projects;
