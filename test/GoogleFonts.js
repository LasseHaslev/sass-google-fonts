import test from 'ava';
import sass from 'node-sass';
import path from 'path';

var renderSass = function( content ) {
    var result = sass.renderSync({
        includePaths: [
            path.resolve( '.' ),
        ],
        outputStyle: 'compressed',
        data: content,
    });
    return result.css.toString().slice( 0, -1 );
}

test( 'it can load google font', t => {


    var sass = renderSass( `
        @import 'src/GoogleFonts.scss';
        @include google-font( 'Lobster' );
    ` );

    t.is( sass, '@import url("https://fonts.googleapis.com/css?family=Lobster")' );

} );

test( 'it is replacing spaces in names to pluss sign', t => {

    var sass = renderSass( `
        @import 'src/GoogleFonts.scss';
        @include google-font( 'Lobster Party' );
    ` );

    t.is( sass, '@import url("https://fonts.googleapis.com/css?family=Lobster+Party")' );
} );

test( 'it can set the font weights to include', t => {
    var sass = renderSass( `
        @import 'src/GoogleFonts.scss';
        @include google-font( 'Lobster', '300,500' );
    ` );

    t.is( sass, '@import url("https://fonts.googleapis.com/css?family=Lobster:300,500")' );
} );

// it can set the language

// it got a include and use mixin
// it is only including the fonts one time
