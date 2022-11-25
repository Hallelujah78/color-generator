//generate random color object with hex and rgb properties

export const generateRandomColor = () => {
  const randomRedA = Math.floor(Math.random() * 16).toString(16);
  const randomRedB = Math.floor(Math.random() * 16).toString(16);

  const randomGreenA = Math.floor(Math.random() * 16).toString(16);
  const randomGreenB = Math.floor(Math.random() * 16).toString(16);
  const randomBlueA = Math.floor(Math.random() * 16).toString(16);
  const randomBlueB = Math.floor(Math.random() * 16).toString(16);
  const hexColor = `#${randomRedA}${randomRedB}${randomGreenA}${randomGreenB}${randomBlueA}${randomBlueB}`;
  // red RGB value 0-255
  const red = parseInt(randomRedA.concat(randomRedB), 16);
  //green RGB value 0-255
  const green = parseInt(randomGreenA.concat(randomGreenB), 16);
  //blue RGB value 0-255
  const blue = parseInt(randomBlueA.concat(randomBlueB), 16);

  return { hex: hexColor, rgb: { red: red, green: green, blue: blue } };
};

//generate shades
export const generateShades = (color) => {
  const shades = [
    { red: 0, green: 0, blue: 0 },
    { red: 0, green: 0, blue: 0 },
    { red: 0, green: 0, blue: 0 },
    { red: 0, green: 0, blue: 0 },
  ];
  //rgb max value 255, min 0

  shades.forEach((shade, index) => {
    if (index === 0) {
      shade.red = Math.floor(color.rgb.red * 0.9);
      shade.green = Math.floor(color.rgb.green * 0.9);
      shade.blue = Math.floor(color.rgb.blue * 0.9);
    } else {
      shade.red = Math.floor(shades[index - 1].red * 0.9);
      shade.green = Math.floor(shades[index - 1].green * 0.9);
      shade.blue = Math.floor(shades[index - 1].blue * 0.9);
    }
  });
  return shades;
};

//convert RGB color value to hexadecimal
export const rgbToHex = (color) => {
  const hexColor = color.toString(16);
  return hexColor.length === 1 ? "0" + hexColor : hexColor;
};

//generate tints
export const generateTints = (color) => {
  const tints = [
    { red: 0, green: 0, blue: 0 },
    { red: 0, green: 0, blue: 0 },
    { red: 0, green: 0, blue: 0 },
    { red: 0, green: 0, blue: 0 },
  ];
  //rgb max value 255, min 0

  tints.forEach((tint, index) => {
    // rt = r + (0.25 * (255 - r))
    if (index === 0) {
      tint.red = Math.floor(color.rgb.red + 0.25 * (255 - color.rgb.red));
      tint.green = Math.floor(color.rgb.green + 0.25 * (255 - color.rgb.green));
      tint.blue = Math.floor(color.rgb.blue + 0.25 * (255 - color.rgb.blue));
    } else {
      tint.red = Math.floor(
        tints[index - 1].red + 0.15 * (255 - tints[index - 1].red)
      );
      tint.green = Math.floor(
        tints[index - 1].green + 0.15 * (255 - tints[index - 1].green)
      );
      tint.blue = Math.floor(
        tints[index - 1].blue + 0.15 * (255 - tints[index - 1].blue)
      );
    }
  });
  return tints;
};

// given an RGB color value, calculate the rgb value for the complementary color
export const complementaryColor = (color) => {
  const complementary = { red: 0, green: 0, blue: 0 };
  const {
    rgb: { red, green, blue },
  } = color;
  complementary.red = 255 - red;
  complementary.green = 255 - green;
  complementary.blue = 255 - blue;

  return complementary;
};
