import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";

function App() {
  const [colors, setColors] = useState([
    {
      id: 1,
      color: "#0e7c7b",
      audio: new Audio("/audios/A.mp3")
    },
    {
      id: 2,
      color: "#1dd3b0",
      audio: new Audio("/audios/Ab.mp3")
    },
    {
      id: 3,
      color:"#affc41",
      audio:new Audio("/audios/B.mp3")
    },
    {
      id: 4,
      color:"#b2ff9e",
      audio:new Audio("/audios/Bb.mp3")
    },
    {
      id: 5,
      color:"#80ab82",
      audio:new Audio("/audios/C.mp3")
    },
    {
      id: 6,
      color:"#606c38",
      audio:new Audio("/audios/D.mp3")
    },
    {
      id: 7,
      color:"#006494",
      audio:new Audio("/audios/Db.mp3")
    },
    {
      id: 8,
      color:"#a9927d",
      audio:new Audio("/audios/E.mp3")
    },
    {
      id: 9,
      color:"#7d53de",
      audio:new Audio("/audios/Eb.mp3")
    },
    {
      id: 10,
      color:"#4b8f8c",
      audio:new Audio("/audios/F.mp3")
    },
    {
      id: 11,
      color:"#fe9920",
      audio:new Audio("/audios/G.mp3")
    },
    {
      id: 12,
      color:"#ffd400",
      audio:new Audio("/audios/Gb.mp3")
    }
  ]);

  const changeBg = (bgColor,id) => {
    document.querySelector("main").style.background = bgColor;
    const i = colors.findIndex(x => x.id === id);
    colors[i].audio.play();
  };

  return (
    <main>
      <div className="content">
        {colors.map((color) => {
          return <Square color={color.color} key={color.id} id={color.id} changeBg={changeBg} />;
        })}
      </div>
    </main>
  );
}

export default App;
