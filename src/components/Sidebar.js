import React, { useState } from "react";
import Icon from "./Icon";
export default function Sidebar({
  handleOnDrag,
  coOrdinate,
  setCoOrdinate,
  greet,
  setGreet,
  greetWithTime,
  setGreetWithTime,
}) {
  //console.log(handleOnDrag, "handle on drag");

  const handleChange = (e) => {
    setCoOrdinate({
      ...coOrdinate,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeText = (e) => {
    setGreet(e.target.value);
  };

  const handleGreetTimeChange = (e) => {
    setGreetWithTime({
      ...greetWithTime,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer "
        draggable
        onDragStart={(e) => {
          // console.log("here");
          handleOnDrag(e, "Move 10 steps");
        }}
      >
        {"Move 10 steps"}
      </div>

      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => {
          handleOnDrag(e, "Turn 15 degrees anticlockwise");
        }}
      >
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => {
          handleOnDrag(e, "Turn 15 degrees clockwise");
        }}
      >
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => {
          handleOnDrag(e, "Go to Random Position");
        }}
      >
        {"Go to Random Position"}
      </div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => {
          handleOnDrag(e, `Go to x and y`);
        }}
      >
        Go To x :{" "}
        <input
          className="text-black h-6 w-6 rounded-lg pl-1 pr-1 ml-1 mr-1"
          name="x"
          value={coOrdinate.x}
          onChange={(e) => handleChange(e)}
          placeholder="x"
        />{" "}
        y :
        <input
          className="text-black h-6 w-6 rounded-lg pl-1 pr-1 ml-1 mr-1"
          name="y"
          value={coOrdinate.y}
          onChange={(e) => handleChange(e)}
          placeholder="y"
        />{" "}
        cordinate
      </div>
      <div className="font-bold"> {"Looks"} </div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => {
          handleOnDrag(e, `Greet`);
        }}
      >
        Greet
      </div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => {
          handleOnDrag(e, `Greet text`);
        }}
      >
        Greet
        <input
          className="text-black h-6 w-16 rounded-lg p-2 ml-2"
          name="text"
          placeholder="text"
          value={greet}
          onChange={handleChangeText}
        />
      </div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => {
          handleOnDrag(e, `Greet text time`);
        }}
      >
        Greet
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
        />{" "}
        sec
      </div>
    </div>
  );
}
