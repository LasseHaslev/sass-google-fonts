import test from 'ava';
import sass from 'node-sass';
import path from 'path';

test( 'it can load google font', t => {

    var result = sass.renderSync({
        includePaths: [
            path.resolve( '.' ),
        ],
        outputStyle: 'compressed',
        data: `
            @import 'src/GoogleFonts.scss';

            .test {
                font-family: 'test';
            }
        `
    });

    console.log(result.css.toString());

} );
