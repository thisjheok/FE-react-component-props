import "./Button.css";

const Button = (props) => {
  return <button className="btn"
      style={{backgroundColor:props.color}}
    >{props.buttonText}</button>;
};

export default Button;
