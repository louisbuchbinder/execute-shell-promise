
const childProcess = require('child_process');

const execute = (script) => new Promise((resolve, reject) => {
  childProcess.exec(script, (error, stdout) => {
    if (error) { reject(error); }
    else { resolve(stdout); }
  });
});

module.exports = execute;

