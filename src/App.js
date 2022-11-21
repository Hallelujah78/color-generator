import Color from "./components/Color";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#7d3d62");
  return (
    <div>
      <Color color={color} setColor={setColor} />
    </div>
  );
}

export default App;
