const EnvLog = require('../index');

EnvLog.log('ENV_LOG', 'Testing', 'Success');

EnvLog.log('ENV_LOG') && EnvLog.log('ENV_LOG', ...(() => {
	console.log('Function called');
	return ['Testing', 'Success'];
})());
