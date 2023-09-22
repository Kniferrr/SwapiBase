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
            <a href="#/films/page/1">Films</a>
          </li>
          <li>
            <a href="#/characters/page/1">Characters</a>
          </li>
          <li>
            <a href="#/planets/page/1">Planets</a>
          </li>
          <li>
            <a href="#/species/page/1">Species</a>
          </li>
          <li>
            <a href="#/starships/page/1">Starships</a>
          </li>
          <li>
            <a href="#/vehicles/page/1">Vehicles</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default React.memo(Header);
