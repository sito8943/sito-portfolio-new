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
    <section id="projects" className="w-full h-screen relative overflow-x-hidden">
     {/*  <div className="w-full h-[300px] flex items-center justify-center padding-left padding-right z-10">
        <h2 className="text-[white] text-4xl">
          {languageState.texts.projects.title}
        </h2>
      </div> */}
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
  );
}

export default Projects;
