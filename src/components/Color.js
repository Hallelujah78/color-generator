import styled, { css } from "styled-components";
import Shade from "./Shade";
import Tint from "./Tints";
import rainbow from "../images/drainbow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { generateRandomColor, copyToClipboard } from "../utils/utils";

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
      border: transparent;

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
    display: ${(props) => (props.isModalOpen ? "grid" : "none")};
    h4 {
      text-align: center;
      padding: 0.25rem 0rem;
      font-weight: 400;
      color: gray;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      background: rgba(50, 255, 50, 0.5);
    }
  }
  .x-icon {
    position: absolute;
    right: 5%;
    top: 5%;
    color: #5e033d;
    font-size: 2rem;
    transition: all 0.5s linear;
    &:hover {
      color: #c377a8;
      transform: scale(1.1);
    }
  }
`;

const Color = ({
  color,
  setColor,
  shades,
  tints,
  globalVars,
  isModalOpen,
  setIsModalOpen,
}) => {
  const handleClick = () => {
    const randomColor = generateRandomColor();
    setColor(randomColor);
  };
  const copyVars = () => {
    setIsModalOpen(true);
    const globalVarsDom = document.querySelector(".global-vars-text");
    copyToClipboard(globalVarsDom);
  };

  return (
    <Wrapper
      dark={
        color.rgb.red < 115 && color.rgb.green < 115 && color.rgb.blue < 115
      }
      color={color.hex}
      shades={shades}
      tints={tints}
      isModalOpen={isModalOpen}
    >
      <div className="shade-container">
        {shades.map((shade, index) => {
          return <Shade key={index} index={index} shades={shades}></Shade>;
        })}
      </div>
      <div className="color-container">
        <div className="copy-container">
          <FontAwesomeIcon
            onClick={() => copyVars()}
            className="copy-vars"
            icon={faCopy}
          />
        </div>
        <div className="button-container">
          <button
            className="generate-colors"
            type="button"
            onClick={handleClick}
          ></button>
          <div className="color-value-container">
            <h5>{color.hex}</h5>
            <h5>{`${color.rgb.red},${color.rgb.green},${color.rgb.blue}`}</h5>
          </div>
        </div>
      </div>
      <div className="tint-container">
        {tints.map((tint, index) => {
          return <Tint key={index} index={index} tints={tints}></Tint>;
        })}
      </div>
      <section className="overlay">
        <FontAwesomeIcon
          onClick={() => setIsModalOpen(false)}
          className="x-icon"
          icon={faTimes}
        />
        <h4>values copied</h4>
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

export default Color;
