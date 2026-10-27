# Color Switcher

A simple color scheme switcher built with HTML, CSS and vanilla JavaScript (DOM). Click a button and the whole page changes its theme.

## Features

- Switch between Light, Dark and Blue themes
- Themes are built with CSS variables
- JavaScript changes the `data-theme` attribute on the `<html>` tag using the DOM

## Tech Used

- HTML
- CSS (custom properties / variables)
- JavaScript (DOM manipulation, event listeners)

## How It Works

1. Each button has a `data-theme` attribute (`light`, `dark` or `blue`).
2. When a button is clicked, JavaScript reads that value and sets it as `data-theme` on the `<html>` element.
3. CSS sees the new `data-theme` and applies the matching color variables.

## Project Structure

```
color-switcher/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/shindenimisha/color-switcher.git
   ```
2. Open the folder and double-click `index.html` in your browser.

## Live Demo

https://shindenimisha.github.io/color-switcher/

## What I Learned

- Selecting elements with `querySelectorAll`
- Handling clicks with `addEventListener`
- Changing attributes with `setAttribute`
- Using CSS variables for theming
- Using Git and GitHub to version and publish a project

## Ideas to Improve

- Highlight the active theme button
- Remember the selected theme with `localStorage`
- Add more themes
