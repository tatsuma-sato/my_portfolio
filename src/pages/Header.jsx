import React from "react";
import { useGlobalContext } from "../context/context";

const Header = () => {
  const { theme } = useGlobalContext();

  return (
    <header className="header" id="header">
      <div className="header__container">
        {/* header left */}
        <div className="header__left">
          <div className="header__title">
            <h2>
              <span className={`header__title ${theme}`}>Ta</span>
              tsuma
            </h2>
          </div>
        </div>

        {/* header right */}
        <div className="header__right">
          <nav className="header__nav">
            <ul className="header__nav__list">
              <li className="header__nav__item">
                <a href="#">Home</a>
              </li>
              <li className="header__nav__item">
                <a href="#">About</a>
              </li>
              <li className="header__nav__item">
                <a href="#">Work</a>
              </li>
              <li className="header__nav__item">
                <a href="#">Skill</a>
              </li>
              <li className="header__nav__item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header;
