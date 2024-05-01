import { useState } from "react";
import Button from "../components/Button/Button";

const SelectButtons = () => {
const [btn,setcolor] = useState('')

  return (<div className="selectBtns">
      <Button buttonText="Primary" onclick={()=>{
        return color="red";
      }}></Button>
      <Button buttonText="Secondary"></Button>
      <Button buttonText="Default"></Button>

  </div>);
};

export default SelectButtons;
