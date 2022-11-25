import styled, { css } from "styled-components";
import Shade from "./Shade";
import Tint from "./Tints";
import rainbow from "../images/drainbow.png";

import { generateRandomColor } from "../utils/utils";

const Wrapper = styled.div`
  ${({ dark }) => {
    return dark
      ? css`
          color: #fff;
        `
      : css`
          color: black;
        `;
  }}

  background: ${(props) => props.color || "red"};

  width: 100%;
  min-width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  h5 {
    width: 100%;
  }

  .shade-container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    width: 100%;
    max-width: 100%;
  }

  .color-container {
    /* position: relative; */
    text-align: center;
    align-items: center;
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 100%;
    /* place-content: center; */

    button {
      border: transparent;

      /* left: calc(50% - 25px); */
      margin-top: 1rem;
      background: url(${rainbow});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      height: 50px;
      width: 50px;
      cursor: pointer;
      border-radius: 50%;
      transition: 0.5s linear all;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
          rgba(0, 0, 0, 0.22) 0px 15px 12px;
        background-color: rgba(128, 128, 128, 0.4);
      }
    }
    h5 {
      padding: 0.5rem;
    }
  }
  .tint-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Color = ({ color, setColor, shades, tints, complementary }) => {
  const handleClick = () => {
    const randomColor = generateRandomColor();
    setColor(randomColor);
  };

  return (
    <Wrapper
      dark={
        color.rgb.red < 115 && color.rgb.green < 115 && color.rgb.blue < 115
      }
      color={color.hex}
      shades={shades}
      tints={tints}
      complementary={complementary}
    >
      <div className="shade-container">
        {shades.map((shade, index) => {
          return <Shade key={index} index={index} shades={shades}></Shade>;
        })}
      </div>
      <div className="color-container">
        <div classname="button-container">
          <button type="button" onClick={handleClick}></button>
        </div>
        <div className="color-value-container">
          <h5>{color.hex}</h5>
          <h5>{`${color.rgb.red},${color.rgb.green},${color.rgb.blue}`}</h5>
        </div>
      </div>
      <div className="tint-container">
        {tints.map((tint, index) => {
          return <Tint key={index} index={index} tints={tints}></Tint>;
        })}
      </div>
    </Wrapper>
  );
};

export default Color;
