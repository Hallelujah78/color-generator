import styled from "styled-components";

const Wrapper = styled.div`
  background: ${(props) => props.color || "red"};
  text-transform: capitalize;
  width: 100%;
  height: 100vh;
`;

const Color = ({ color, setColor }) => {
  const handleClick = () => {
    //red
    const randomRedA = Math.floor(Math.random() * 17).toString(16);
    const randomRedB = Math.floor(Math.random() * 17).toString(16);
    const randomGreenA = Math.floor(Math.random() * 17).toString(16);
    const randomGreenB = Math.floor(Math.random() * 17).toString(16);
    const randomBlueA = Math.floor(Math.random() * 17).toString(16);
    const randomBlueB = Math.floor(Math.random() * 17).toString(16);
    const hexColor = `#${randomRedA}${randomRedB}${randomGreenA}${randomGreenB}${randomBlueA}${randomBlueB}
  `;
    console.log(hexColor);
    setColor(hexColor);
  };
  return (
    <Wrapper color={color}>
      <button onClick={handleClick}>Random Color</button>
    </Wrapper>
  );
};

export default Color;
