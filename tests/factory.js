const envLog = require('../index');

const log = envLog.factory('ENV_LOG');

log && log('Testing', 'Success');

log && log(...(() => {
	console.log('Function called');
	return ['Testing', 'Success'];
})());
