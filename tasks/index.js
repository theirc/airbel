import gulp from 'gulp'
import suite from '@cloudcannon/suite'
import { scripts } from './webpack'

suite.dev(gulp);

export const build = gulp.series(scripts)