import { useEffect } from "react";
import styled from "styled-components";
import { calculateLuminance, rgbToHex } from "../utils/utils.js";

const Tint = ({ color, tints, index }) => {
  useEffect(() => {
    tints.forEach((tint) => {
      calculateLuminance(tint.red, tint.green, tint.blue);
    });
  }, [tints]);
  return (
    <>
      <Wrapper index={index} color={color} tints={tints}>
        <p className="rgb">{`${tints[index].red},${tints[index].green},${tints[index].blue}`}</p>
        <p className="hex">{`#${rgbToHex(tints[index].red)}${rgbToHex(
          tints[index].green
        )}${rgbToHex(tints[index].blue)}`}</p>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-width: 25%;
  font-size: 0.9rem;

  display: grid;
  min-height: 30%;
  background: ${(props) => {
    return `rgb(${props.tints[props.index].red},${
      props.tints[props.index].green
    },${props.tints[props.index].blue})`;
  }};
  place-items: center;
  p.rgb {
    margin-top: 15%;
  }
  p.hex {
    margin-bottom: 15%;
  }
`;

export default Tint;
