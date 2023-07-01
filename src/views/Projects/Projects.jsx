import { useCallback, useMemo, useState } from "react";

import { css } from "@emotion/css";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// styles
import "./styles.css";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// components
import Project from "./Project";

function Projects() {
  const { languageState } = useLanguage();

  const [positionX, setPositionX] = useState(0);

  const columns = useMemo(() => {
    return languageState.texts.projects.length;
  }, [languageState]);

  const goRight = useCallback(() => {
    if (positionX !== -1 * 100 * (columns - 1)) setPositionX(positionX - 100);
  }, [positionX, columns]);

  const goLeft = useCallback(() => {
    if (positionX !== 0) setPositionX(positionX + 100);
  }, [positionX]);

  const printProjects = useCallback(() => {
    return languageState.texts.projects.map((project) => (
      <Project {...project} key={project.id} />
    ));
  }, [languageState]);

  return (
    <section id="projects" className="w-full h-screen relative">
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
