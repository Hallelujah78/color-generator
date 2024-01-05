import styled from "styled-components";
import {
  calculateLuminance,
  findHighestContrast,
  rgbToHex,
} from "../utils/utils.js";

const Tint = ({ color, tints, index }) => {
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

const Wrapper = styled.div.attrs((props) => ({
  style: {
    background: `rgb(${props.tints[props.index].red},${
      props.tints[props.index].green
    },${props.tints[props.index].blue})`,
    color: findHighestContrast(
      calculateLuminance(
        props.tints[props.index].red,
        props.tints[props.index].green,
        props.tints[props.index].blue
      )
    ),
  },
}))`
  min-width: 25%;
  font-size: 0.9rem;
  display: grid;
  min-height: 30%;
  place-items: center;
  p.rgb {
    margin-top: 15%;
  }
  p.hex {
    margin-bottom: 15%;
  }
`;

export default Tint;
