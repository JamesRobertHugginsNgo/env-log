const AnsiColours = require('ansi-colours');

// ----------
// MAKE PREFIX
// ----------

function makePrefix(env) {
	return `${AnsiColours.CYAN}${env}${AnsiColours.RESET}`;
}

// ----------
// LOG
// ----------

function log(env, ...messages) {
	if (process.env[env]) {
		if (messages.length > 0) {
			console.log(makePrefix(env), ...messages);
		}
		return true;
	}

	return false;
}

// ----------
// FACTORY
// ----------

function factory(env) {
	if (process.env[env]) {
		const prefix = makePrefix(env);
		return function(...messages) {
			console.log(prefix, ...messages);
		};
	}
}

// ----------
// EXPORTS
// ----------

module.exports = {
	factory,
	log
};
