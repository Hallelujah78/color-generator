import Color from "./components/Color";
import { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import {
  generateRandomColor,
  generateShades,
  generateTints,
  generateGlobalVars,
} from "./utils/utils";

function App() {
  const startingColor = generateRandomColor();

  const [color, setColor] = useState(startingColor);
  const [tints, setTints] = useState(generateTints(startingColor));
  const [shades, setShades] = useState(generateShades(startingColor));
  const [globalVars, setGlobalVars] = useState(
    generateGlobalVars(tints, shades, startingColor)
  );

  useEffect(() => {
    const newTints = generateTints(color);
    const newShades = generateShades(color);
    setShades(newShades);
    setTints(newTints);
    setGlobalVars(generateGlobalVars(newTints, newShades, color));
  }, [color]);

  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Color
        tints={tints}
        setTints={setTints}
        color={color}
        setColor={setColor}
        shades={shades}
        globalVars={globalVars}
      />
    </>
  );
}

export default App;
