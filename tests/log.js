const envLog = require('../index');

envLog('ENV_LOG', 'Testing', 'Success');

envLog('ENV_LOG') && envLog('ENV_LOG', ...(() => {
	console.log('Function called');
	return ['Testing', 'Success'];
})());
