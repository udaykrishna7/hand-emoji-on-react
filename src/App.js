import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "👋": "waving",
  "👌": "perfect",
  "✌️": "peace",
  "👍": "like",
  "👎": "dislike",
  "👊": "punching",
  "👏": "clapping"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "the symbol does not exist in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1> decoding hand emojis </h1>
      <input onChange={emojiHandler} />
      <h2>{meaning}</h2>
      <h3>emojis in our database</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
