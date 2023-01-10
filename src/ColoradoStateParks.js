import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks() // =>42

  console.log(trees);
// => "Aspen and Pine"

wildlife();
// => "Elk, Bighorn Sheep, Moose"
console.log(RMFunctions.trees);
// => "Aspen and Pine"

RMFunctions.wildlife();
// => "Elk, Bighorn Sheep, Moose"

// RMFunctions.elevation();
// // => Attempted import error
  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
    </div>
  );
}


export default ColoradoStateParks;
