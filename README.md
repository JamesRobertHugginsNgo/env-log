# env-log

Version 1.0.0

A `console.log` wrapper, calling the function only when the environment variable has a value.

## Installation

```
npm install git+https://github.com/JamesRobertHugginsNgo/env-log.git#1.0.0
```

## Usage

``` JavaScript
const envLog = require('env-log');
envLog('ENV_VAR') && envLog('ENV_VAR', 'Hello', 'World');
```