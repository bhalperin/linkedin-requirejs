/**
* Created with Node Primer.
* User: bhalperin
* Date: 2014-05-02
* Time: 01:46 PM
* To change this template use Tools | Templates.
*/

var gulp = require("gulp"),
	less = require("gulp-less"),
	paths = {
		style: "style/*.less"
	};

gulp.task("less", function() {
	gulp.src("style/*.less")
	.pipe(less())
	.pipe(gulp.dest("style"));
});

gulp.task("watch", function() {
	gulp.watch(paths.style, [ "less" ]);
});

gulp.task("default", [ "watch" ])