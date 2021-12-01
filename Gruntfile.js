module.exports = function( grunt ) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON( "package.json" ),

		copy: {
			main: {
				options: {
					mode: true
				},
				src: [
					"**",
					"!.git/**",
					"!.gitignore",
					"!.gitattributes",
					"!*.sh",
					"!*.zip",
					"!eslintrc.json",
					"!README.md",
					"!Gruntfile.js",
					"!package.json",
					"!package-lock.json",
					"!composer.json",
					"!composer.lock",
					"!phpcs.xml",
					"!phpcs.xml.dist",
					"!phpunit.xml.dist",
					"!node_modules/**",
					"!vendor/**",
					"!tests/**",
					"!scripts/**",
					"!config/**",
					"!tests/**",
					"!bin/**"
				],
				dest: "tailwind-wp-starter/"
			}
		},
		compress: {
			main: {
				options: {
					archive: "tailwind-wp-starter-<%= pkg.version %>.zip",
					mode: "zip"
				},
				files: [
					{
						src: [ "./tailwind-wp-starter/**" ]
					}
				]
			}
		},
		clean: {
			main: [ "tailwind-wp-starter" ],
			zip: [ "*.zip" ],
		},
	});

	/* Load Tasks */
	grunt.loadNpmTasks( "grunt-contrib-copy" );
	grunt.loadNpmTasks( "grunt-contrib-compress" );
	grunt.loadNpmTasks( "grunt-contrib-clean" );

	/* Register task started */
	grunt.registerTask( "release", [ "clean:zip", "copy", "compress", "clean:main" ] )
};
