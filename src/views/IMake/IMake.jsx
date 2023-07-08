import { useCallback, useMemo } from "react";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

function IMake() {
  const { languageState } = useLanguage();

  const { iMake } = useMemo(() => {
    return { iMake: languageState.texts.iMake };
  }, [languageState]);

  const printIMakes = useCallback(() => {
    return iMake.work.map((make) => (
      <article key={make.id}>
        <h3 className="text-2xl font-bold text-secondary">{make.title}</h3>
        <p className="text-secondary">{make.body}</p>
      </article>
    ));
  }, [iMake]);

  return (
    <section
      id="i-make"
      className="h-screen bg-red-bg padding-left padding-right z-10 flex-col gap-3"
    >
      <h2 className="text-[white] text-4xl font-bold">{iMake.title}</h2>
      {printIMakes()}
    </section>
  );
}

export default IMake;
