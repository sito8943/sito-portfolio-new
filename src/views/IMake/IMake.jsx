import { useCallback, useMemo } from "react";
import Marquee from "react-fast-marquee";

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
    <section id="i-make" className="h-screen bg-red-bg flex-col gap-3">
      <Marquee gradient={false} speed="50" className="overflow-y-hidden">
        <h2 className="text-[white] text-9xl font-bold uppercase">
          <span className="mr-5">{iMake.title}</span>
          <span className="mr-5">{iMake.title}</span>
          <span className="mr-5">{iMake.title}</span>
          <span className="mr-5">{iMake.title}</span>
          <span className="mr-5">{iMake.title}</span>
        </h2>
      </Marquee>
      <div className="padding-left padding-right">{printIMakes()}</div>
    </section>
  );
}

export default IMake;
