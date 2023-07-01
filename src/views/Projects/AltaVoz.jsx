import { useMemo } from "react";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

function AltaVoz() {
  const { languageState } = useLanguage();

  const { buttons, altaVoz } = useMemo(
    () => ({
      altaVoz: languageState.texts.projects.altaVoz,
      buttons: languageState.texts.buttons,
    }),
    [languageState]
  );

  return (
    <div className="cell alta-voz flex items-center justify-center gap-10">
      <img
        src="https://ik.imagekit.io/lgqp0wffgtp/SitoPortafolio/altavoz_EB7INjK3Q.jpg?updatedAt=1688226805633"
        alt="alta voz header image"
        className="image"
      />
      <div className="info">
        <h1 className="text-[white]">{altaVoz.title}</h1>
        <p className="text-[white] w-[80%]">{altaVoz.bodies.body1}</p>
        <a
          href="https://alta-voz-d4a05.web.app/"
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 bg-[#a83e19] transition hover:bg-[#f15a24] px-5 py-2 items-center justify-center rounded-3xl text-[white]"
        >
          {buttons.visit}
          <FontAwesomeIcon className="text-sm mt-[1px]" icon={faExternalLink} />
        </a>
      </div>
    </div>
  );
}

export default AltaVoz;
