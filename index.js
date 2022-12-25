const AnsiColours = require('ansi-colours');

function makePrefix(env) {
	return `${AnsiColours.CYAN}${env}${AnsiColours.RESET}`;
}

function envLog(env, ...messages) {
	if (process.env[env]) {
		if (messages.length > 0) {
			console.log(makePrefix(env), ...messages);
		}
		return true;
	}

	return false;
}

function factory(env) {
	if (process.env[env]) {
		const prefix = makePrefix(env);
		return function(...messages) {
			console.log(prefix, ...messages);
		};
	}
}

envLog.factory = factory;

module.exports = envLog;
