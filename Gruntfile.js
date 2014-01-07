module.exports = function(grunt) {

    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"), 
        bower: {
            install: {
                options: {
                    targetDir: './lib',
                    layout: 'byType',
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false
                }
            }
        }, 
        karma: {
            unit: {
                configFile: 'karma.conf.js', 
                autoWatch: true
            }
        }, 
        requirejs: {
            compile: {
                options: {
                    name: "Heatband", 
                    baseurl: "src", 
                    mainConfigFile: "src/config.js", 
                    out: "heatband.v0.js"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-requirejs');

    grunt.registerTask('default', ['bower:install']);
};
