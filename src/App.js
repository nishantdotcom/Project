import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const [widgets, setWidgets] = useState([]);
  const [movement, setMovement] = useState({
    translateX: 0,
    translateY: 0,
    rotateClockWise: 0,
    rotateAntiClockWise: 0,
    text: "",
    duration: 0,
    valid: false,
  });

  const [coOrdinate, setCoOrdinate] = useState({
    x: 0,
    y: 0,
  });

  const [visible, setisvisible] = useState(true);

  const [size, setsize] = useState(10);
  const [percentage, setpercentage] = useState(20);

  const [greet, setGreet] = useState("");

  const [greetWithTime, setGreetWithTime] = useState({
    greet: "",
    time: 0,
  });

  const handleOnDrag = (e, widgetType) => {
    // console.log(widgetType);
    e.dataTransfer.setData("widgetType", widgetType);
  };

  const handleOnDrop = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    //console.log(widgetType, "dddd");
    setWidgets([...widgets, widgetType]);
  };

  const handelDragOver = (e) => {
    //  console.log(e);
    e.preventDefault();
  };

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen w-1/2 overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar
            handleOnDrag={handleOnDrag}
            coOrdinate={coOrdinate}
            setCoOrdinate={setCoOrdinate}
            greet={greet}
            setGreet={setGreet}
            greetWithTime={greetWithTime}
            setGreetWithTime={setGreetWithTime}
            size={size}
            setsize={setsize}
            visible={visible}
            setisvisible={setisvisible}
            percentage={percentage}
            setpercentage={setpercentage}
          />
          <MidArea
            handleOnDrop={handleOnDrop}
            handelDragOver={handelDragOver}
            widgets={widgets}
            setMovement={setMovement}
            movement={movement}
            coOrdinate={coOrdinate}
            setCoOrdinate={setCoOrdinate}
            greet={greet}
            setGreet={setGreet}
            greetWithTime={greetWithTime}
            setGreetWithTime={setGreetWithTime}
            size={size}
            setsize={setsize}
            visible={visible}
            setisvisible={setisvisible}
            percentage={percentage}
            setpercentage={setpercentage}
          />
        </div>
        <div className="w-1/2  flex flex-row border-t border-l border-gray-200 rounded-tl-xl ml-2 bg-white">
          <PreviewArea
            movement={movement}
            coOrdinate={coOrdinate}
            greetWithTime={greetWithTime}
            size={size}
            visible={visible}
            setCoOrdinate={setCoOrdinate}
            setMovement={setMovement}
          />
        </div>
      </div>
    </div>
  );
}
