# Cipherstream Landing

A scroll-driven landing page for a fictional tech company called CipherStream. It has a video hero, feature cards, a team section, stacking service cards and a footer.

## Features

- **Hero:** two stacked videos with clip-path masks that morph as you scroll, while the headline swaps for a second one.
- **Header:** the logo draws itself on a loop, and the header shrinks and gets a solid background once the hero scrolls away.
- **Feature cards:** five cards fly in with a 3D perspective and settle into a row.
- **Team:** a sticky section that turns vertical scrolling into a horizontal slide through the team, with rotating avatars.
- **Services:** cards stack on top of each other as you scroll, with the earlier ones scaling down and blurring.
- **Accessibility:** all motion is turned off and the videos are paused when `prefers-reduced-motion` is set.

All scroll effects use CSS scroll-driven animations (`animation-timeline`), so a browser with support for them is required.

## Run

Open `index.html` in a browser.

## Project structure

```
index.html   page markup
styles.css   imports the stylesheets from css/
css/         one stylesheet per page section
script.js    background video and logo behavior
assets/      videos, icons and photos
```
