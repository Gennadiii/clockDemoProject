import {fsHelper} from "./fs.helper";
const fs = require('fs');


const libHelper = {

  all: getLib(),

  addClass(Class) {
    const libProp = capitalize(Class.name);
    findObjectWithProperty(this.all, libProp)[libProp] = Class;
  },

  buildLib() {
    fsHelper.getFiles(`${__dirname}/../generic`)
      .forEach(file => require(file));
    checkHealth(this.all);
  }

};


export {libHelper};


function getLib() {
  const lib = {};
  const libTypes = fs.readdirSync(`${__dirname}/../generic`);

  libTypes.forEach(libType => {
    lib[libType] = {};
    fsHelper.getFiles(`${__dirname}/../generic/${libType}`).forEach(file => {
      const className = getClassName(file);
      lib[libType][className] = null;
    });
  });

  return lib;
}

function getClassName(path) {
  return path
    .replace(/.*[\\/]/, '')
    .split('.')
    .slice(0, -1)
    .map(el => capitalize(el))
    .join('');
}

function checkHealth(lib) {
  findNestedObjects(lib)
    .forEach(obj => Object.keys(obj)
      .forEach(key => {
        if (obj[key] === null) {
          throw new Error(`Lib didn't build correctly: ${JSON.stringify(key)}`);
        }
      }));
  console.log(`Lib build - success`);
}


function findObjectWithProperty(obj, prop) {
  const allObjects = findNestedObjects(obj);
  return allObjects.find(obj => obj[prop] !== undefined);
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
