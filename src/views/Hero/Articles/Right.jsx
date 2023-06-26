// components
import PrintAfter from "../../../components/PrintAfter/PrintAfter";

// images
import sito1 from "../../../assets/images/1.jpg";
import sito2 from "../../../assets/images/2.jpg";
import sito3 from "../../../assets/images/3.jpg";

function Right() {
  return (
    <article className="hero-right-section">
      <div className="z-10 hero-images">
        <div className="hero-image">
          <PrintAfter delay={200}>
            <div className="border-2 border-[white] w-full h-full absolute top-[20px] left-[20px] appear"></div>
          </PrintAfter>
          <div className="hero-image-container appear">
            <img src={sito1} alt="sito" loading="lazy" className="ease" />
          </div>
        </div>
        <div className="hero-image">
          <PrintAfter delay={200}>
            <div className="border-2 border-[white] w-full h-full absolute top-[20px] left-[20px] appear"></div>
          </PrintAfter>
          <div className="hero-image-container appear">
            <img src={sito2} alt="sito" loading="lazy" className="ease" />
          </div>
        </div>
        <div className="hero-image">
          <PrintAfter delay={200}>
            <div className="border-2 border-[white] w-full h-full absolute top-[20px] left-[20px] appear"></div>
          </PrintAfter>
          <div className="hero-image-container appear">
            <img src={sito3} alt="sito" loading="lazy" className="ease" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Right;
