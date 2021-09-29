import React, { useState } from "react";
import "./styles.css";

const series = {
  Sitcom: [
    { name: "Brooklyn Nine-Nine", rating: "5/5" },
    { name: "Schitt's Creek", rating: "5/5" },
    { name: "Friends", rating: "4/5" }
  ],
  Thriller: [
    { name: "Money Heist", rating: "4.5/5" },
    { name: "You", rating: "4/5" }
  ],
  Mystery: [
    { name: "Lupin", rating: "5/5" },
    { name: "Sherlock Holmes", rating: "4/5" }
  ],
  SciFi: [
    { name: "The Umbrella Academy", rating: "5/5" },
    { name: "Dark", rating: "4.5/5" },
    { name: "Stranger things", rating: "4/5" }
  ],
  Horror: [
    { name: "The Haunting of Bly Manor", rating: "4.5/5" },
    { name: "The Haunting of Hill House", rating: "3.75/5" }
  ],
  Drama: [
    { name: "Lucifer", rating: "5/5" },
    { name: "The Good Doctor", rating: "4.5/5" },
    { name: "The Witcher", rating: "5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Sitcom");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Good Series</h1>
      <p>Check out some of my favorite series here</p>
      <div className="center">
        {Object.keys(series).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <div className="center">
        <ul className="non-bullet">
          {series[selectedGenre].map((series) => (
            <li key={series.name}>
              {" "}
              <div className="series">
                {" "}
                {series.name}, {series.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
