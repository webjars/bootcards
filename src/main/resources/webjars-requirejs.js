requirejs.config({
	paths : {
		"bootcards" : webjars.path("bootcards", "js/bootcards"),

		"bootcards-css" : webjars.path("bootcards", "css/bootcards-desktop"),

		"bootcards-css-android" : webjars.path("bootcards", "css/bootcards-andriod"),

		"bootcards-css-ios" : webjars.path("bootcards", "css/bootcards-ios")
	},
	shim : {
		"bootcards" : [ "jquery", "fastclick" ]
	},
});
