var fs = require('fs');
var path = require('path');

const DIR_PATH = process.argv[2];
const EXTENSION = '.txt';



function createSummaryScript() {
    fs.writeFile(
    	`${DIR_PATH}\\summary.js`,
    		'const fs = require(\'fs\');\n' +
    		'const path = require(\'path\');\n' +
    		'\n' +
    		'(function getFiles(baseDir) {\n' +
    		'    fs.readdir(baseDir, function (e, files){\n' +
    		'        for (let i in files) {\n' +
    		'            let CURDIR = baseDir + path.sep + files[i];\n' +
		    '            fs.stat(CURDIR, (e, stats) => {\n' +
		    '                    if (stats.isDirectory()) {\n' +
		    '                        getFiles(CURDIR);\n' +
		    '                    } else {\n' +
		    '                        console.log(path.relative(__dirname, CURDIR));\n' +
		    '                    }\n' +
		    '                }\n' +
		    '            );\n' +
		    '        }\n' +
		    '    });\n' +
		    '})(__dirname, null);',
    	(callback) => {
	        if (callback) { console.log("Error create summary script: " + callback); }
	    }
	);
}