import { useMemo } from "react";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

function Project({ title, id, body, image, url, buttonClass }) {
  const { languageState } = useLanguage();

  const { buttons } = useMemo(
    () => ({
      buttons: languageState.texts.buttons,
    }),
    [languageState]
  );

  return (
    <div className={`cell ${id}`}>
      <img src={image} alt={`${id} header image`} className="image" />
      <div className="info">
        <h1 className="text-[white]">{title}</h1>
        <p className="text-[white] w-[80%]">{body}</p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={`go-button ${buttonClass} `}
        >
          {buttons.visit}
          <FontAwesomeIcon className="text-sm mt-[1px]" icon={faExternalLink} />
        </a>
      </div>
    </div>
  );
}

export default Project;
