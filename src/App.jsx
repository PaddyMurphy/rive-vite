import { useState } from "react";
import { useRive } from "@rive-app/react-canvas";
import riveTest from "./assets/jobby.riv";
import Waterbar from "./components/Waterbar";
import Popcorn from "./components/Popcorn";
import "./App.css";

function App() {
  // const [isPlaying, setIsPlaying] = useState(true);
  const [isWalking, setIsWalking] = useState(false);

  const { rive, RiveComponent: RiveComponentJobby } = useRive({
    src: riveTest,
    stateMachines: "jobby",
    artboard: "Test 4",
    autoplay: true,
    onPause: () => {
      console.log("pause");
    },
    onPlay: () => {
      console.log("play");
    },
  });

  const handleWalking = () => {
    setIsWalking(!isWalking);
    // rive?.playingAnimationNames.includes("walking")
    if (isWalking) {
      rive?.pause("walking");
    } else {
      rive?.play("walking");
    }
  };

  // view artboard properties
  // console.log(rive, rive?.contents?.artboards[0]);

  // const togglePlaying = () => {
  //   if (isPlaying) {
  //     rive.pause();
  //     setIsPlaying(false);
  //   } else {
  //     rive.play();
  //     setIsPlaying(true);
  //   }
  // };

  return (
    <div className="rive">
      <Popcorn />
      <Waterbar />
      <div className="rive-columns">
        <div className="rive-column rive-column--1">
          <RiveComponentJobby className="riveCanvas riveCanvas--jobby" />
          <div className="rive-buttons">
            {/* <button onClick={togglePlaying}>{isPlaying ? "Pause" : "Play"}</button>
            <button onClick={() => handleWalking()}>
              {isWalking ? "Stop walking" : "Walk"}
            </button> */}
          </div>
        </div>
        <div className="rive-column rive-column--2">col 2</div>
      </div>
    </div>
  );
}

export default App;
