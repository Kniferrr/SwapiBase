import React from "react";
import "./MainPage.scss"; // Подключаем файл стилей

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <div className="header">
          <h1>SwapiBase</h1>
          <p>Your source for Star Wars information</p>
        </div>
        <div className="section-links">
          <div className="section">
            <a href="#/films">
              <img
                src="https://starwars-visualguide.com/assets/img/films/3.jpg"
                alt="Films"
                className="section-image"
              />
              <h2>Films</h2>
              <p>Information about Star Wars films.</p>
            </a>
          </div>
          <div className="section">
            <a href="#/people">
              <img
                src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
                alt="People"
                className="section-image"
              />
              <h2>People</h2>
              <p>Details about Star Wars characters.</p>
            </a>
          </div>
          <div className="section">
            <a href="#/planets">
              <img
                src="https://starwars-visualguide.com/assets/img/planets/3.jpg"
                alt="Planets"
                className="section-image"
              />
              <h2>Planets</h2>
              <p>Information about planets in Star Wars.</p>
            </a>
          </div>
          <div className="section">
            <a href="#/species">
              <img
                src="https://starwars-visualguide.com/assets/img/species/3.jpg"
                alt="Species"
                className="section-image"
              />
              <h2>Species</h2>
              <p>Data about various Star Wars species.</p>
            </a>
          </div>
          <div className="section">
            <a href="#/starships">
              <img
                src="https://starwars-visualguide.com/assets/img/starships/5.jpg"
                alt="Starships"
                className="section-image"
              />
              <h2>Starships</h2>
              <p>Details about Star Wars starships.</p>
            </a>
          </div>
          <div className="section">
            <a href="#/vehicles">
              <img
                src="https://starwars-visualguide.com/assets/img/vehicles/4.jpg"
                alt="Vehicles"
                className="section-image"
              />
              <h2>Vehicles</h2>
              <p>Information about Star Wars vehicles.</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
