import * as AnsiColours from 'ansi-colours';

// ----------
// MAKE PREFIX
// ----------

function makePrefix(env) {
	return `${AnsiColours.MAGENTA}${env}${AnsiColours.RESET}`;
}

// ----------
// LOG
// ----------

export function log(env, ...messages) {
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

export function factory(env) {
	if (process.env[env]) {
		const prefix = makePrefix(env);
		return function(...messages) {
			console.log(prefix, ...messages);
		};
	}
}
