import { useState } from "react";
import { useRive } from "@rive-app/react-canvas";
import waterBarDemo from "../../assets/popcorn.riv";

function Popcorn() {
  const { rive, RiveComponent } = useRive({
    src: waterBarDemo,
    stateMachines: "popping",
    artboard: "popcorn-production",
    autoplay: true,
  });

  // console.log(rive?.contents?.artboards[0]);

  return (
    <div className="rive-columns rive-columns--popcorn">
      <div className="rive-column rive-column--1">
        <RiveComponent className="riveCanvas riveCanvas--popcorn" />
      </div>
      <div className="rive-column rive-column--2"></div>
    </div>
  );
}

export default Popcorn;
