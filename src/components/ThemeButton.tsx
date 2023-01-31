import { useCallback, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
  const { setStorage } = useContext(ThemeContext);
  const change = useCallback(
    (idx: number) => {
      if (idx === 1) {
        setStorage("theme_1");
      } else if (idx === 2) {
        setStorage("theme_2");
      } else if (idx === 3) {
        setStorage("theme_3");
      } else if (idx === 4) {
        setStorage("theme_4");
      } else if (idx === 5) {
        setStorage("theme_5");
      }
    },
    [setStorage]
  );

  const style = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "orange",
    color: "#000",
  };
  const style2 = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "#646464",

    border: "3px solid #000",
    color: "#000",
  };
  const style3 = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "#000",

    border: "3px solid #000",
    color: "#fff",
  };
  const style4 = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "red",

    border: "3px solid #000",
    color: "#fff",
  };
  const style5 = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "green",

    border: "3px solid #000",
    color: "#000",
  };
  return (
    <>
      <button onClick={() => change(1)} style={style2}></button>
      <button onClick={() => change(2)} style={style3}></button>
      <button onClick={() => change(3)} style={style}></button>
      <button onClick={() => change(4)} style={style4}></button>
      <button onClick={() => change(5)} style={style5}></button>
    </>
  );
};

export default ThemeButton;
