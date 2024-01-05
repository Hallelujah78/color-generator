import React from "react";
import styled from "styled-components";
import {
  rgbToHex,
  calculateLuminance,
  findHighestContrast,
} from "../utils/utils";

const Shade = ({ color, shades, index }) => {
  return (
    <>
      <Wrapper index={index} color={color} shades={shades}>
        <p className="rgb">{`${shades[index].red},${shades[index].green},${shades[index].blue}`}</p>
        <p className="hex">{`#${rgbToHex(shades[index].red)}${rgbToHex(
          shades[index].green
        )}${rgbToHex(shades[index].blue)}`}</p>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div.attrs((props) => ({
  style: {
    background: `rgb(${props.shades[props.index].red},${
      props.shades[props.index].green
    },${props.shades[props.index].blue})`,
    color: findHighestContrast(
      calculateLuminance(
        props.shades[props.index].red,
        props.shades[props.index].green,
        props.shades[props.index].blue
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

export default Shade;
