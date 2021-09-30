import React, { useState } from "react";
import "./styles.css";

const series = {
  Sitcom: [
    {
      name: "Brooklyn Nine-Nine",
      rating: "5/5",
      description:
        "Brilliant but immature Brooklyn detective Jake Peralta must learn to follow the rules and be a team player when his squad gets an exacting new captain."
    },
    {
      name: "Schitt's Creek",
      rating: "5/5",
      description:
        "Suddenly broke, the formerly filthy-rich Rose family is reduced to living in a ramshackle motel in a town they once bought as a joke: Schitt's Creek."
    },
    {
      name: "Friends",
      rating: "4/5",
      description:
        "This hit sitcom follows the merry misadventures of six 20-something pals as they navigate the pitfalls of work, life and love in 1990s Manhattan."
    }
  ],
  Thriller: [
    {
      name: "Money Heist",
      rating: "4.5/5",
      description:
        "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan."
    },
    {
      name: "You",
      rating: "4/5",
      description:
        "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by."
    }
  ],
  Mystery: [
    {
      name: "Lupin",
      rating: "5/5",
      description:
        "Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family."
    },
    {
      name: "Sherlock",
      rating: "4/5",
      description:
        "In this updated take on Sir Arthur Conan Doyle's beloved mystery tales, the eccentric sleuth prowls the streets of modern London in search of clues."
    }
  ],
  SciFi: [
    {
      name: "The Umbrella Academy",
      rating: "5/5",
      description:
        "Reunited by their father's death, estranged siblings with extraordinary powers uncover shocking family secrets -- and a looming threat to humanity."
    },
    {
      name: "Dark",
      rating: "4.5/5",
      description:
        "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations."
    },
    {
      name: "Stranger things",
      rating: "4/5",
      description:
        "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
    }
  ],
  Horror: [
    {
      name: "The Haunting of Bly Manor",
      rating: "4.5/5",
      description:
        "Dead doesn't mean gone. An au pair plunges into an abyss of chilling secrets in this gothic romance from the creator of The Haunting of Hill House."
    },
    {
      name: "The Haunting of Hill House",
      rating: "3.75/5",
      description:
        "Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it."
    }
  ],
  Drama: [
    {
      name: "Lucifer",
      rating: "5/5",
      description:
        "Bored with being the Lord of Hell, the devil relocates to Los Angeles, where he opens a nightclub and forms a connection with a homicide detective."
    },
    {
      name: "The Good Doctor",
      rating: "4.5/5",
      description:
        "A talented surgeon with autism and savant syndrome joins a prestigious hospital, where he faces skepticism from both the patients and staff."
    },
    {
      name: "The Witcher",
      rating: "5/5",
      description:
        "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts."
    }
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
      <p className="below-heading">Check out some of my favorite series here</p>
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
                <p className="description">{series.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
