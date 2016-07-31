#Execute-Shell-Promise
##Run a shell script as a background process

***Great for writing testing scripts and parallel node processes.***

```
// Usage Example
'use strict';

const execute = require('execute-shell-promise');

let script = 'echo "Hello World"';

execute(script).then((stdout) => {
  console.log(stdout); // Outputs "Hello World"
});
```

