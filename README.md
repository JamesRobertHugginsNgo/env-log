# env-log

Version 1.0.0

Logging utility that is enabled by setting selected environment variable.

## Installation

```
npm install git+https://github.com/JamesRobertHugginsNgo/env-log.git#1.0.0
```

## envLog(env[, ...messages])

- env _\<string>_ Environmental variable.
- messages _\<any[]>_ One or more messages, similar to console.log arguments.
- Returns: _\<boolean>_ Use to check if the log will be displayed or not.

A `console.log` wrapper, calling the function only when the environment variable has a value.

``` JavaScript
const envLog = require('env-log');

envLog('ENV_VAR', 'Hello', 'World');

// Omit messages arg to check if ENV_VAR is set
// This can be used to prevent calculation when ENV_VAR is not set
envLog('ENV_VAR') && envLog('ENV_VAR', ...(() => {
    console.log('Function was called');
    return ['Hello', 'World'];
})());
```

## envLog.factory(env)

- env _\<string>_ Environmental variable.
- Returns: _\<function>_ Function that can be used multiple times to display the messages.

Only checks the environment variable when the factory function is call returning a function when set. This will save some overhead when logging multiple times in a code block.

``` JavaScript
const envLog = require('../index');

const log = envLog.factory('ENV_LOG');

// Always check for the logging function
// Function will be undefined if ENV_VAR is not set
log && log('Testing', 'Success');
log && log(...(() => {
	console.log('Function called');
	return ['Testing', 'Success'];
})());
```