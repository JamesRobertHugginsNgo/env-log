# env-log

Version 1.1.0

Logging utility that is enabled by setting selected environment variable.

## Installation

```
npm install git+https://github.com/JamesRobertHugginsNgo/env-log.git#1.1.0
```

## EnvLog.log(env[, ...messages])

- env _\<string>_ Environmental variable.
- messages _\<any[]>_ One or more messages, similar to console.log arguments.
- Returns: _\<boolean>_ Use to check if the log will be displayed or not.

A `console.log` wrapper, calling the function only when the environment variable has a value.

``` JavaScript
const EnvLog = require('env-log');

EnvLog.log('ENV_VAR', 'Hello', 'World');

// Omit messages arg to check if ENV_VAR is set
// This can be used to prevent calculation when ENV_VAR is not set
EnvLog.log('ENV_VAR') && EnvLog.log('ENV_VAR', ...(() => {
    console.log('Function was called');
    return ['Hello', 'World'];
})());
```

## EnvLog.factory(env)

- env _\<string>_ Environmental variable.
- Returns: _\<undefined>|\<function>_ Function that can be used multiple times to display the messages.

Only checks the environment variable when the factory function is call returning a function when set. This will save some overhead when logging multiple times in a code block.

``` JavaScript
const EnvLog = require('env-log');

const log = EnvLog.factory('ENV_LOG');

// Always check for the logging function
// Function will be undefined if ENV_VAR is not set
log && log('Hello', 'World');
log && log(...(() => {
	console.log('Function was called');
	return ['Hello', 'World'];
})());
```