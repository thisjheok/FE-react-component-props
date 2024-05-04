import { useState } from "react";
import Button from "../components/Button/Button";

const SelectButtons = () => {
const [color,setcolor] = useState("default")

const handleClick = (newColor)=>{
  setcolor(newColor);
}

  return (<div className="selectBtns">
      <Button buttonText="Primary"
      color={color === "Primary" ? "pink" : "blue"} 
      onClick={() => handleClick("Primary")}></Button>
      <Button buttonText="Secondary"
      color={color === "Secondary" ? "green" : "blue"} 
      onClick={() => handleClick("Secondary")}></Button>
      <Button buttonText="Default"
      color={color === "Default" ? "red" : "blue"} 
      onClick={() => handleClick("Default")}></Button>
  </div>);
};

export default SelectButtons;
