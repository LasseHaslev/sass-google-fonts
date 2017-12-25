# sass-google-fonts ![Travis status](https://api.travis-ci.org/LasseHaslev/sass-google-fonts.svg?branch=master)
> Include google fonts to your projects

## Install

```bash
npm install sass-google-fonts
```

## Usage

First you need to import the project.

```scss
// Import the project
@import "node_modules/sass-google-fonts/src/GoogleFonts.scss";
```

Import your [Google font](https://fonts.google.com/) to your project by entering the font name of the font.

```scss
// Include a google font
@include google-font( 'Tintos' );

html, body {
    font-family: 'Tintos';
}
```

You can also specify the weight and language you want to include as follows.

```scss
// If you want to specify sizes of the font
@include google-font( 'Tintos', '400,400i,700' );

// Include languages of fonts
@include google-font( 'Tintos', '400,400i,700', 'greek,latin-ext,vietnamese' );
```

## Development

```bash
# Install dependencies
npm install

# Run tests one time
npm run test

# Run test driven development
npm run tdd
```

### Publish to npm

> Make sure all tests are successful before publishing to NPM

```bash
# Set the version
npm version {type} # major/minor/patch

# Publish to npm
npm publish

# Publish to github
git push && git push --tags
```
