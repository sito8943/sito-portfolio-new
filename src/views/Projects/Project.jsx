import { useMemo, memo, useEffect, useState } from "react";

import PropTypes from "prop-types";

// contexts
import { useActive } from "./ActiveProvider";
import { useLanguage } from "../../contexts/LanguageProvider";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

// components
import PrintAfter from "../../components/PrintAfter/PrintAfter";

function Project({ title, id, body, image, url, buttonClass, i }) {
  const { activeState } = useActive();

  const { languageState } = useLanguage();

  const { buttons } = useMemo(
    () => ({
      buttons: languageState.texts.buttons,
    }),
    [languageState]
  );

  const [see, setSee] = useState(false);

  useEffect(() => {
    if (activeState === i) setSee(true);
    else
      setTimeout(() => {
        setSee(false);
      }, 699);
  }, [activeState, i]);

  return (
    <div className={`cell ${id}`}>
      <img
        loading="lazy"
        src={image}
        alt={`${id} header image`}
        className="image"
      />
      <div className={`info ${activeState === i ? "opacity-1" : "opacity-0"}`}>
        {see ? (
          <>
            <PrintAfter delay={500} animation="appear">
              <h1 className="text-[white]">{title}</h1>
            </PrintAfter>
            <PrintAfter
              delay={700}
              animation="appear w-full flex items-center justify-start"
            >
              <p className="text-[white] w-[80%]">{body}</p>
            </PrintAfter>
            <PrintAfter delay={900} animation="appear">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={`go-button ${buttonClass}`}
              >
                {buttons.visit}
                <FontAwesomeIcon
                  className="text-sm mt-[1px]"
                  icon={faExternalLink}
                />
              </a>
            </PrintAfter>
          </>
        ) : null}
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  buttonClass: PropTypes.string,
  i: PropTypes.number,
};

const ProjectMemo = memo((props) => <Project {...props} />, arePropsEqual);
ProjectMemo.displayName = "Project";

function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.title === newProps.title &&
    oldProps.id === newProps.id &&
    oldProps.body === newProps.body &&
    oldProps.image === newProps.image &&
    oldProps.url === newProps.url &&
    oldProps.buttonClass === newProps.buttonClass &&
    oldProps.i === newProps.i
  );
}

export default ProjectMemo;
