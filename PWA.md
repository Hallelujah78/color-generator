# Creating a PWA

## Typical Steps to Fix Issues Related to the Lighthouse PWA report

- Make sure your `site.webmanifest` has these fields

```js
{
  "name": "Tints & Shades Generator",
  "short_name": "Tints & Shades",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone",
  "start_url": ".",
  "description": "A tint and shade generator that allows the user to copy and paste the values generated straight into their CSS file."
}
```

- you will also need a maskable icon
  - this is an icon that when placed inside various button "silhouettes" will not be cropped by the silhouette
  - it will look good on different devices that may use different icon shapes
- generate a maskable icon [here]("https://progressier.com/maskable-icons-editor" "click to be taken to Progressier, where you can upload a file to create a maskable icon.")
- add your maskable icon to the icons array:

```js
{
      "src": "512x512_maskable.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
```
