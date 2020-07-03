// =========================================================
// Gulp Task: Deploy
// =========================================================
let folder = 'welldom-blue';
let projectName = 'welldom-blue';
let ftpData = require('../settings/ftp.json');

module.exports = function(gulp, plugins) {

    return () => {

		return gulp.src(__filename)
	        	.pipe(plugins.open({uri: `http://${projectName}.${ftpData.domain}/`}));

    };
};