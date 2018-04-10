
const gulp = require('gulp');
const ghPages = require('./gulp-gh-pages');

gulp.task('deploy', () => gulp.src('./_site/**/*')
  .pipe(ghPages({
    branch: 'master',
  })));
