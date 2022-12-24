const AnsiColours = require('ansi-colours');

function envLog(env, ...messages) {
	if (process.env[env]) {
		if (messages.length > 0) {
			console.log(`${AnsiColours.CYAN}${env}${AnsiColours.RESET}`, ...messages);
		}
		return true;
	}

	return false;
}

module.exports = envLog;
