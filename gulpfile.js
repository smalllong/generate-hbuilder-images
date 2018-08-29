var gulp = require('gulp')
var imageResize = require('gulp-image-resize')
var rename = require('gulp-rename')


gulp.task('icon-ios', () => {
	var sizes = [40, 58, 60, 80, 87, 120, 180, 1024]
	sizes.forEach((size, index) => {
		gulp.src('icon.png')
			.pipe(imageResize({
				width: size,
				height: size,
				crop: true,
				cover: true,
			}))
			.pipe(rename('icon'+size+'.png'))
			.pipe(gulp.dest('dist'))
	})
})

gulp.task('splash-ios', () => {
	var sizes = [[640, 1136, 568, 2], [750, 1334, 667, 2], [1242, 2208, 736, 3]];
	sizes.forEach((size, index) => {
		gulp.src('splash.png')
			.pipe(imageResize({
				width: size[0],
				height: size[1],
				crop: true,
				cover: true,
				upscale: true,
			}))
			.pipe(rename('Default-'+size[2]+'h@'+size[3]+'x.png'))
			.pipe(gulp.dest('dist'))
	})
})
