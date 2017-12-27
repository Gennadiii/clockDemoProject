const Jasmine = require('jasmine');


let testRunner = new Jasmine();
testRunner.jasmine.DEFAULT_TIMEOUT_INTERVAL = 70 * 1000;

const JasmineConsoleReporter = require('jasmine-console-reporter');
const reporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2 
    cleanStack: 1,       // (0|false)|(1|true)|2|3 
    verbosity: 4,        // (0|false)|1|2|(3|true)|4 
    listStyle: 'indent', // "flat"|"indent" 
    activity: false
});
testRunner.loadConfig({
    spec_dir: 'dist/spec',
    spec_files: ['**/*spec.js'],
    random: false,
    seed: null,
    stopSpecOnExpectationFailure: false
});
testRunner.addReporter(reporter);
testRunner.execute();