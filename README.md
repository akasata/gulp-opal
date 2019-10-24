# Information

<table>
<tr>
  <td>Package</td>
  <td>gulp-opal</td>
</tr>
<tr>
  <td>Description</td>
  <td>A gulp plugin convert Ruby to Javascript(by Opal)</td>
</tr>
<tr>
  <td>Opal Version</td>
  <td>0.7.1</td>
</tr>
<tr>
  <td>Node Version</td>
  <td>>= 0.12</td>
</tr>
</table>

# Usage

```javascript
var opal = require('gulp-opal')
var log = require('fancy-log');

gulp.task('opal', function() {
  gulp.src('./src/*.rb')
    .pipe(opal().on('error', log.error))
    .pipe(gulp.dest('./build/'))
});
```

# License

MIT license

# About Opal

Opal is a ruby to javascript transpiler.

Copyright (C) 2013 by Adam Beynon

https://github.com/opal/opal
