import Color from "./components/Color";
import { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";

import {
  generateRandomColor,
  generateShades,
  generateTints,
  complementaryColor,
} from "./utils/utils";

function App() {
  const [color, setColor] = useState(generateRandomColor());
  const [tints, setTints] = useState([]);
  const [shades, setShades] = useState([]);
  const [complementary, setComplementary] = useState({});

  useEffect(() => {
    setShades(generateShades(color));
    setTints(generateTints(color));
    setComplementary(complementaryColor(color));
    window.scrollTo(0, 1);
  }, [color]);

  return (
    <>
      <GlobalStyle />
      <Color
        tints={tints}
        setTints={setTints}
        color={color}
        setColor={setColor}
        shades={shades}
        complementary={complementary}
      />
    </>
  );
}

export default App;
