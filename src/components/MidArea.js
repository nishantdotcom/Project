import React, { useState } from "react";

export default function MidArea({
  handleOnDrop,
  handelDragOver,
  widgets,
  setMovement,
  movement,
  coOrdinate,
  setCoOrdinate,
  greet,
  setGreet,
  greetWithTime,
  setGreetWithTime,
}) {
  const handleClick = (widget) => {
    if (widget == "Move 10 steps") {
      setMovement({
        ...movement,
        translateX: movement.translateX + 10,
      });
    }
    if (widget == "Turn 15 degrees anticlockwise") {
      setMovement({
        ...movement,
        rotateAntiClockWise: movement.rotateAntiClockWise - 15,
      });
    }
    if (widget == "Turn 15 degrees clockwise") {
      setMovement({
        ...movement,
        rotateClockWise: movement.rotateClockWise + 15,
      });
    }
    if (widget == "Go to x and y") {
      setMovement({
        ...movement,
        translateX: coOrdinate.x,
        translateY: coOrdinate.y,
      });
    }
    if (widget == "Go to Random Position") {
      let xcord = Math.floor(Math.random() * 100);
      let ycord = Math.floor(Math.random() * 100);

      setMovement({
        ...movement,
        translateX: xcord,
        translateY: ycord,
      });
    }
    if (widget == "Greet") {
      setMovement({
        ...movement,
        text: "Greet",
      });
    }
    if (widget == "Greet text") {
      //  console.log("here");
      setMovement({
        ...movement,
        text: `Hello ${greet}`,
        valid: false,
      });
    }
    if (widget == "Greet text time") {
      console.log("clicked");
      // setMovement({
      //   ...movement,
      //   text: `Hello ${greetWithTime.greet}`,
      //   duration: parseInt(greetWithTime.time),
      //   valid: true,
      // });
      setGreetWithTime({
        ...greetWithTime,
        greet: `Hello ${greetWithTime.greet}`,
      });
    }
  };
  const handleChange = (e) => {
    setCoOrdinate({
      ...coOrdinate,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeText = (e) => {
    console.log(e.target.value);
    setGreet(e.target.value);
  };
  const handleGreetTimeChange = (e) => {
    setGreetWithTime({
      ...greetWithTime,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="flex-1 h-full overflow-auto border border-red-400 "
      onDrop={handleOnDrop}
      onDragOver={handelDragOver}
    >
      {widgets.map((widget, index) => {
        return (
          <div key={index} className="ml-4">
            {widget == "Go to x and y" ? (
              <>
                <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-60 rounded-lg">
                  <p
                    onClick={() => {
                      handleClick(widget);
                    }}
                  >
                    Go To x :
                  </p>
                  <input
                    className="text-black h-6 w-6 rounded-lg pl-1 pr-1 ml-1 mr-1"
                    name="x"
                    value={coOrdinate.x}
                    onChange={(e) => handleChange(e)}
                    placeholder="x"
                  />
                  y :
                  <input
                    className="text-black h-6 w-6 rounded-lg pl-1 pr-1 ml-1 mr-1"
                    name="y"
                    value={coOrdinate.y}
                    onChange={(e) => handleChange(e)}
                    placeholder="y"
                  />
                  cordinate
                </div>
              </>
            ) : (
              <></>
            )}
            {widget != "Greet text" &&
            widget != "Go to x and y" &&
            widget != "Greet text time" ? (
              <>
                <>
                  <div
                    className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 w-60 my-2 text-sm cursor-pointer  rounded-lg "
                    key={index}
                    onClick={() => {
                      handleClick(widget);
                    }}
                  >
                    {widget}
                  </div>
                </>
              </>
            ) : (
              <></>
            )}

            {widget == "Greet text" ? (
              <>
                <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-40 rounded-lg">
                  <p
                    onClick={() => {
                      handleClick(widget);
                    }}
                  >
                    Greet
                  </p>
                  <input
                    className="text-black h-6 w-16 rounded-lg p-2 ml-2"
                    name="text"
                    placeholder="text"
                    value={greet}
                    onChange={handleChangeText}
                  />
                </div>
              </>
            ) : (
              <></>
            )}
            {widget == "Greet text time" ? (
              <>
                <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-60 rounded-lg">
                  <p
                    onClick={() => {
                      handleClick(widget);
                    }}
                  >
                    Greet
                  </p>
                  <input
                    className="text-black h-6 w-16 rounded-lg p-2 ml-2"
                    name="greet"
                    placeholder="text"
                    value={greetWithTime.greet}
                    onChange={handleGreetTimeChange}
                  />
                  for
                  <input
                    className="text-black h-6 w-16 rounded-lg p-2 ml-2"
                    name="time"
                    placeholder="time"
                    value={greetWithTime.time}
                    onChange={handleGreetTimeChange}
                  />
                  sec
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
}
