import ReactDOM from "react-dom/client";

// contexts
import { LanguageProvider } from "./contexts/LanguageProvider.jsx";

// app
import App from "./App.jsx";

// styles
import "./index.css";
import "./assets/animations/hover-underline.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
