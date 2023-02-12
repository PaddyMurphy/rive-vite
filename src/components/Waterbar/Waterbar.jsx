import { useState } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import waterBarDemo from "../../assets/water_bar_demo.riv";

function Waterbar() {
  const [level, setLevel] = useState(0);
  const { rive, RiveComponent } = useRive({
    src: waterBarDemo,
    stateMachines: "State Machine",
    artboard: "waterbar",
    animations: ["Example", "Idle", "Hig"],
    autoplay: true,
  });

  const levelInput = useStateMachineInput(rive, "State Machine", "level");
  console.log(levelInput?.value);

  const handleLevel = (event) => {
    setLevel(event.target.value);
    console.log(event.target.value);
    levelInput.value = event.target.value;
  };

  // console.log(rive?.contents?.artboards[0]);

  return (
    <div className="rive-columns">
      <div className="rive-column rive-column--1">
        <RiveComponent className="riveCanvas riveCanvas--waterbar" />

        <div className="rive-buttons"></div>
      </div>
      <div className="rive-column rive-column--2">
        <input
          type="range"
          id="volume"
          className="waterbar-range"
          name="volume"
          min="0"
          max="100"
          value={level}
          onChange={handleLevel}></input>
      </div>
    </div>
  );
}

export default Waterbar;
