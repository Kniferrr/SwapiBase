import React from "react";
import "./MainPage.scss"; // Подключаем файл стилей
import ImgComponent from "../ImgComponent/ImgComponent";

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
              <ImgComponent id={"3"} resource={"films"} />
              <h2>Films</h2>
              <p>Information about Star Wars films.</p>
            </a>
          </div>
          <div className="section">
            <a href="#/people">
              <ImgComponent id={"3"} resource={"characters"} />
              <h2>People</h2>
              <p>Details about Star Wars characters.</p>
            </a>
          </div>
          <div className="section">
            <a href="#/planets">
              <ImgComponent id={"3"} resource={"planets"} />
              <h2>Planets</h2>
              <p>Information about planets in Star Wars.</p>
            </a>
          </div>
          <div className="section">
            <a href="#/species">
              <ImgComponent id={"3"} resource={"species"} />
              <h2>Species</h2>
              <p>Data about various Star Wars species.</p>
            </a>
          </div>
          <div className="section">
            <a href="#/starships">
              <ImgComponent id={"5"} resource={"starships"} />
              <h2>Starships</h2>
              <p>Details about Star Wars starships.</p>
            </a>
          </div>
          <div className="section">
            <a href="#/vehicles">
              <ImgComponent id={"4"} resource={"vehicles"} />
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
