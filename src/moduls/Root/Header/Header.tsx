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
            <a href="#/films">Films</a>
          </li>
          <li>
            <a href="#/characters/page/1">Characters</a>
          </li>
          <li>
            <a href="#/planets">Planets</a>
          </li>
          <li>
            <a href="#/species">Species</a>
          </li>
          <li>
            <a href="#/starships">Starships</a>
          </li>
          <li>
            <a href="#/vehicles">Vehicles</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default React.memo(Header);
