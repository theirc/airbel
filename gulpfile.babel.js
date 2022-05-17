const gulp = require("gulp")
const suite = require('@cloudcannon/suite')
const { scripts } = require('./tasks/scripts')

suite.dev(gulp)
suite.state(gulp)
suite.proofer(gulp)

gulp.task('default', gulp.parallel('scripts', 'dev'));

exports.scripts = scripts

