import {fsHelper} from "./fs.helper";
import {dateTimeHelper} from "./dateTime.helper";
import {logger} from "./logger";
const fs = require('fs');


const log = logger.get('libHelper');


const libHelper = {

  all: null,

  build() {
    const lib = {};
    const libTypes = fs.readdirSync(`${__dirname}/../generic`);

    libTypes.forEach(libType => {
      lib[libType] = {};
      fsHelper.getFiles(`${__dirname}/../generic/${libType}`)
        .forEach(async file => {
          const className = getClassName(file);
          lib[libType][className] = null;
          const importedFile = await import(file);
          lib[libType][className] = importedFile[className];
        });
    });

    this.all = lib;
  },

  healthCheck(lib) {
    findNestedObjects(lib)
      .forEach(obj => Object.keys(obj)
        .forEach(key => {
          if (obj[key] === null) {
            throw new Error(`Lib didn't build correctly: ${JSON.stringify(key)}`);
          }
        }));
    log.info(`Lib build - success`);
  },

  async waitReady(timeout = 1000, interval = 0) {
    const startTime = +new Date();
    let timeSpent = 0;
    while (timeout > timeSpent) {
      await dateTimeHelper.sleep(interval);
      timeSpent = +new Date() - startTime;
      try {
        return this.healthCheck(this.all);
      } catch (err) {
        if (!err.message.includes(`Lib didn't build correctly`)) {
          throw err;
        }
      }
    }
    this.healthCheck(this.all);
  },

};


export {libHelper};


function getClassName(path) {
  return path
    .replace(/.*[\\/]/, '')
    .split('.')
    .slice(0, -1)
    .map(el => capitalize(el))
    .join('');
}

function findNestedObjects(obj, result = [obj]) {
  (<any>Object).values(obj).forEach(value => {
    if (value && typeof value === 'object') {
      result.push(value);
      return findNestedObjects(value, result);
    }
  });
  return result;
}


function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}
