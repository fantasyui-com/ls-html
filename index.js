#!/usr/bin/env node

process.stdin.setEncoding('utf8');
const fs = require('fs');
const path = require('path');
const setup = require('commander');
const listHtmlClasses = require('list-html-classes');
setup
  .version('1.0.0')
  .usage('[options] <file.html>')
  .option('-n, --noop <type>', 'noop', 'noop');
  setup.parse(process.argv);

let htmlFilename = path.resolve(setup.args[0]);
let htmlString = fs.readFileSync(htmlFilename, { encoding: 'utf8' });

listHtmlClasses({ html: htmlString }).then(result => {
  result.classNames.forEach(name => {
    console.log(name);
  });
});
