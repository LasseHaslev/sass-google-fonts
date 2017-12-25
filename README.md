# sass-google-fonts
> Include google fonts to your projects

## Install

```bash
npm install sass-google-fonts
```

## Usage

This mixin will include google font of your choice.

```scss
// Import the project
@import "node_modules/sass-google-fonts/src/GoogleFonts.scss";

// Include a google font
@include google-font( 'Tintos' );
// @import url("https://fonts.googleapis.com/css?family=Lobster")

// If you want to specify sizes of the font
@include google-font( 'Tintos', '400,400i,700' );
// @import url("https://fonts.googleapis.com/css?family=Lobster:400,400i,700")

// Include languages of fonts
@include google-font( 'Tintos', '400,400i,700', 'greek,latin-ext,vietnamese' );
// @import url("https://fonts.googleapis.com/css?family=Lobster:400,400i,700&subset=greek,latin-ext,vietnamese")
```
