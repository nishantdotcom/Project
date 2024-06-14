import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({ movement, coOrdinate, greetWithTime }) {
  // console.log(movement);
  // console.log(greetWithTime);
  return (
    <div className="flex-none h-[100%] w-2/3 overflow-y-auto p-2 ">
      <CatSprite
        movement={movement}
        coOrdinate={coOrdinate}
        greetWithTime={greetWithTime}
      />
    </div>
  );
}
