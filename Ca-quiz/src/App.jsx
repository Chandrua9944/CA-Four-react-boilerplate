import { useEffect, useState } from "react";
import "./App.css";
import QuestionBox from "./Components/QuestionBox";

function App() {
  const [theme, setTheme] = useState(true);
  const [themeName, setThemeName] = useState("Light");

  const background = {
    background: theme ? "#e7eaf6" : "#222831",
    color: theme ? "#000" : "#fff",
    width: "100vw",
    height: "100vh",
  };

  useEffect(() => {
    if (themeName === "Dark") {
      setThemeName("Light");
    } else {
      setThemeName("Dark");
    }
  }, [theme]);

  let handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div style={background} className="container">
      <div className="header">
        <h1>Quiz App</h1>
        <button onClick={handleTheme} className="themeBtn">{themeName}</button>
      </div>
      <QuestionBox props={theme} />
    </div>
  );
}

export default App;
