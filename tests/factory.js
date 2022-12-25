const EnvLog = require('../index');

const log = EnvLog.factory('ENV_LOG');

log && log('Testing', 'Success');

log && log(...(() => {
	console.log('Function called');
	return ['Testing', 'Success'];
})());
