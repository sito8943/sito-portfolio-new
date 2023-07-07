import { useEffect, useState } from "react";

// @emotion/css
import { css } from "@emotion/css";

function PrintAfter({ children, delay, animation }) {
  const [see, setSee] = useState(false);

  useEffect(() => {
    setTimeout(() => setSee(true), delay);
  }, [delay]);

  return (
    <div className={see ? animation : css({ visibility: "hidden" })}>{children}</div>
  );
}

export default PrintAfter;
