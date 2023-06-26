import { useEffect, useState } from "react";

function PrintAfter({ children, delay }) {
  const [see, setSee] = useState(false);

  useEffect(() => {
    setTimeout(() => setSee(true), delay);
  }, [delay]);

  return see ? <>{children}</> : <span />;
}

export default PrintAfter;
