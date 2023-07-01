import { useMemo } from "react";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

function DescubreTrinidad() {
  const { languageState } = useLanguage();

  const { buttons, descubreTrinidad } = useMemo(
    () => ({
      descubreTrinidad: languageState.texts.projects.descubreTrinidad,
      buttons: languageState.texts.buttons,
    }),
    [languageState]
  );

  return (
    <div className="cell descubre-trinidad flex items-center justify-center gap-5">
      <img
        src="https://ik.imagekit.io/tx6beroitnm/descubretrinidad/Header_Home_mtHJ2I8dS.jpg"
        alt="descubre trinidad header image"
        className="image"
      />
      <div className="info">
        <h1 className="text-[white]">{descubreTrinidad.title}</h1>
        <p className="text-[white] w-[80%]">
          {descubreTrinidad.bodies.body1}
        </p>
        <a
          href="https://descubretrinidad.com/"
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 bg-primary px-5 py-2 items-center justify-center rounded-3xl text-[white]"
        >
          {buttons.visit}
          <FontAwesomeIcon className="text-sm mt-[1px]" icon={faExternalLink} />
        </a>
      </div>
    </div>
  );
}

export default DescubreTrinidad;
