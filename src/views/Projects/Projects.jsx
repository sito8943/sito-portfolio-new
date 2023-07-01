import { useCallback, useState } from "react";

import { css } from "@emotion/css";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUp,
  faArrowLeft,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

// styles
import "./styles.css";

// components
import DescubreTrinidad from "./DescubreTrinidad";

function Projects() {
  const [positionX, setPositionX] = useState(0);

  const columns = 2;

  const goRight = useCallback(() => {
    if (positionX !== -1 * 100 * (columns - 1)) setPositionX(positionX - 100);
  }, [positionX, columns]);

  const goLeft = useCallback(() => {
    if (positionX !== 0) setPositionX(positionX + 100);
  }, [positionX]);

  return (
    <section id="projects" className="w-full h-screen relative">
      <div className="">
        <button
          onClick={goRight}
          className="-translate-y-[50%] top-[50%] right-2 arrow-button"
        >
          <FontAwesomeIcon className="text-2xl" icon={faArrowRight} />
        </button>

        <button
          onClick={goLeft}
          className="-translate-y-[50%] top-[50%] left-2 arrow-button"
        >
          <FontAwesomeIcon className="text-2xl" icon={faArrowLeft} />
        </button>
      </div>
      <div
        className={`main ${css({
          transform: `translateX(${positionX}vw)`,
        })}`}
      >
        <DescubreTrinidad />
      </div>
    </section>
  );
}

export default Projects;
