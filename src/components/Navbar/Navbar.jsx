import { useMemo, useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import "./styles.css";

function Navbar() {
  const location = useLocation();

  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const closeOffCanvas = useCallback(() => {
    setShowOffCanvas(false);
  }, []);

  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const { hash } = location;
    setActiveLink(hash.length ? hash : activeLink);
  }, [location]);

  const onScroll = useCallback(() => {
    let sec = document.querySelectorAll("section");
    sec.forEach((section) => {
      let top = window.scrollY;
      let offset = section.offsetTop;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");

      if (top >= offset && top < offset + height) {
        setActiveLink(`#${id}`);
      }
    });
  }, [setActiveLink]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  const { languageState } = useLanguage();

  const { links } = useMemo(() => {
    return { links: languageState.texts.links };
  }, [languageState]);

  const printLinks = useCallback(() => {
    return (
      <ul className="flex gap-10">
        {links.map((link) => (
          <li key={link.to}>
            <a
              href={link.to}
              className={`${
                link.to === activeLink ? "text-secondary" : "text-primary"
              } transition hover:text-secondary`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }, [links, activeLink]);

  return (
    <header className="fixed top-0 left-0 w-full h-[60px] flex justify-between items-center bg-opacity-secondary-background backdrop-blur-[20px] navbar">
      <Link to="/" className="text-secondary font-bold text-xl">
        {"<Sito />"}
      </Link>
      <nav className="links">{printLinks()}</nav>
      <button className="text-primary toggle-drawer">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
}

export default Navbar;
