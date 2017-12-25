import test from 'ava';
import sass from 'node-sass';
import path from 'path';

var stringIs = function( whatWeGet, whatWeWant ) {

    whatWeGet = whatWeGet.slice( 0, -1 );

    return whatWeGet == whatWeWant;
}

test( 'it can load google font', t => {

    var result = sass.renderSync({
        includePaths: [
            path.resolve( '.' ),
        ],
        outputStyle: 'compressed',
        data: `
            @import 'src/GoogleFonts.scss';
            @include google-font( 'Lobster' );
        `
    });

    t.true( stringIs( result.css.toString(), '@import url("https://fonts.googleapis.com/css?family=Lobster")' ) );

} );

test( 'it is replacing spaces in names to pluss sign', t => {
    var result = sass.renderSync({
        includePaths: [
            path.resolve( '.' ),
        ],
        outputStyle: 'compressed',
        data: `
            @import 'src/GoogleFonts.scss';
            @include google-font( 'Lobster Party' );
        `
    });

    t.true( stringIs( result.css.toString(), '@import url("https://fonts.googleapis.com/css?family=Lobster+Party")' ) );
} );
