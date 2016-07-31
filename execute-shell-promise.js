
const execute = (script) => new Promise((resolve, reject) => {
  require('child_process').exec(script, (error, stdout) => {
    if (error) { reject(error); }
    else { resolve(stdout); }
  });
});

module.exports = execute;

