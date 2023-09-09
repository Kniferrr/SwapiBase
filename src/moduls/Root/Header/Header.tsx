import React from "react";
import "./Header.scss"; // Импорт SCSS стилей

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#/ ">SwapiBase</a>
          </li>
          <li>
            <a href="#/Films">Films</a>
          </li>
          <li>
            <a href="#/People">People</a>
          </li>
          <li>
            <a href="#/Planets">Planets</a>
          </li>
          <li>
            <a href="#/Species">Species</a>
          </li>
          <li>
            <a href="#/Starships">Starships</a>
          </li>
          <li>
            <a href="#/Vehicles">Vehicles</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default React.memo(Header);
