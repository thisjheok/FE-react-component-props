import Box from "../components/Box/Box";
import Circle from "../components/Circle/Circle";

const circleColorArr = [
  "pink",
  "red",
  "black",
  "gray",
  "green",
  "blue",
  "orange",
];



const BoxAlign = (props) => {
  return (
    <div>
      <Box boxColor="red" text="a"/>
      <Box boxColor="green" text="b"/>
      <Box boxColor="blue" text="c"/>
      <Box boxColor="pink" text="d"/>
    <div style={{display:"flex"}}>
    {
        circleColorArr.map(function(color){
          return <Circle CircleColor={color} />
        })
      }
    </div>

    </div>
  );
};

export default BoxAlign;