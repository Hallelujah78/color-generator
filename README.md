# :rainbow: Tints & Shades Generator

---

## Description

This is a tints and shades generator inspired by the [Shadowlord](https://noeldelgado.github.io/shadowlord/ "click to visit the Shadowlord tint and shade generator") tints and shades generator website.

My site differs in that you can't pick a base color; you can only generate a random color and tints and shades are created based on that random color.

---

## Running It

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run `npm start` which runs the app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Usage

Click the color wheel button to generate a random color and the corresponding tints and shades.

Click the `copy` button to copy the generated colors to the clipboard. You can then paste these values into your project as global variables like so:

```css
--primary-100: #f7b298;
--primary-200: #f6a586;
--primary-300: #f59671;
--primary-400: #f48459;
--primary-500: #f15c22;
--primary-600: #d8521e;
--primary-700: #c2491b;
--primary-800: #ae4118;
--primary-900: #9c3a15;
```

---

## Cool Stuff

I created a `calculateLuminance` function that calculates the relative luminance of each color. We can then dynamically set the font color to be white or black, depending on which offers the best contrast ratio with the background.

I calculate relative luminance for the sRGB colorspace as set out in [WCAG 2.x](https://www.w3.org/WAI/GL/wiki/Relative_luminance "click to view a w3.org page about relative luminance")

## Next Commit Notes

---

## To Do

- migrate to Vite from CRA perchance?

---
