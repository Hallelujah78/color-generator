// libraries
import styled from "styled-components";
import { FaRegCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Shade from "./Shade";
import Tint from "./Tints";

// assets
import rainbow from "../images/colorwheel_100x100.webp";

// utils
import {
  generateRandomColor,
  copyToClipboard,
  findHighestContrast,
  calculateLuminance,
} from "../utils/utils";

const Color = ({ color, setColor, shades, tints, globalVars }) => {
  const handleClick = () => {
    const randomColor = generateRandomColor();

    setColor(randomColor);
  };
  const copyVars = () => {
    toast(
      <div
        className="toast-message"
        style={{ display: "grid", placeContent: "center" }}
      >
        <br />
        <h4>Values Copied to Clipboard!</h4>
        <br />
        {globalVars.map((colorVar, index) => {
          return (
            <p key={globalVars[index].color}>
              {globalVars[index].var}: {globalVars[index].color}
            </p>
          );
        })}
        <br />
      </div>
    );
    const globalVarsDom = document.querySelector(".global-vars-text");
    copyToClipboard(globalVarsDom);
  };

  return (
    <Wrapper color={color} shades={shades} tints={tints}>
      <div className="shade-container">
        {shades.map((shade, index) => {
          return <Shade key={index} index={index} shades={shades}></Shade>;
        })}
      </div>
      <div className="color-container">
        <div className="copy-container" style={{ background: `${color.hex}` }}>
          <button
            aria-label="copy color values to clipboard"
            style={{ background: `${color.hex}` }}
          >
            <FaRegCopy
              style={{
                color: `${findHighestContrast(
                  calculateLuminance(
                    color.rgb.red,
                    color.rgb.green,
                    color.rgb.blue
                  )
                )}`,
              }}
              onClick={() => copyVars()}
              className="copy-vars"
            />
          </button>
          copy
        </div>
        <div className="button-container">
          <button
            aria-label="generate colors"
            className="generate-colors"
            type="button"
            onClick={handleClick}
          ></button>
          <div className="color-value-container">
            <h5>{`${color.rgb.red},${color.rgb.green},${color.rgb.blue}`}</h5>
            <h5>{color.hex}</h5>
          </div>
        </div>
      </div>
      <div className="tint-container">
        {tints.map((tint, index) => {
          return <Tint key={index} index={index} tints={tints}></Tint>;
        })}
      </div>
      <section className="overlay">
        {/* text area for global variable output */}
        <textarea
          readOnly
          className="global-vars-text"
          cols="21"
          rows="10"
          value={globalVars
            .map((colorVar, index) => {
              return `${globalVars[index].var}: ${globalVars[index].color};\n`;
            })
            .join("")}
        ></textarea>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs(({ color }) => ({
  style: {
    background: `${color.hex}`,
    color: findHighestContrast(
      calculateLuminance(color.rgb.red, color.rgb.green, color.rgb.blue)
    ),
  },
}))`
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    max-width: 100%;
  }

  .color-container {
    text-align: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    max-width: 100%;

    button.generate-colors {
      border: 1px solid rgba(255, 255, 255, 0.7);
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
    .copy-container {
      button {
        border: transparent;
      }

      width: 100%;
      height: 100%;
      display: grid;
      align-content: center;
      justify-content: right;
    }
    .copy-vars {
      font-size: 2rem;
      background: transparent;
      color: rgba(80, 80, 80, 0.7);
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1);
        color: rgba(30, 30, 30, 0.9);
        cursor: pointer;
      }
    }
    h5 {
      padding: 0.5rem;
    }
  }

  .global-vars-text {
    resize: none;
    border: none;
    width: 80vw;
    height: 40vh;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    text-align: center;
    padding-top: 1.5rem;
    background: rgb(220, 220, 220);
  }
  .tint-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  section {
    position: absolute;
    place-content: center;
    left: 5vw;
    top: 5vh;
    width: 90vw;
    height: 90vh;
    z-index: 999;
    background: white;
    border-radius: 0.5rem;
    display: none;
  }
`;

export default Color;
