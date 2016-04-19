var gulp = require('gulp');

/*
 * Testing
 */

gulp.task('test-cov', require('gulp-jsx-coverage').createTask({
    src: './src/**/*-spec.js',
    isparta: true,
    istanbul: {
        preserveComments: true,
        coverageVariable: '__MY_TEST_COVERAGE__',
        exclude: /node_modules|-spec/
    },
    threshold: {
        type: 'lines',
        min: 90
    },
    transpile: {
        babel: {
            exclude: /node_modules/
        }
    },
    coverage: {
        reporters: ['text-summary', 'json'],
        directory: 'coverage'
    },
    mocha: {
        reporter: 'spec'
    }
}));