import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "4fa02d5a";
  const APP_KEY = "bc90ade1e6be7d14dab595206551b450";

  useEffect(() => {
    console.log("something");
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
