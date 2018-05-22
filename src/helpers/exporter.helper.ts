import {helper} from "./helpers";


const partsPath = `${__dirname}/../generic/`;
const componentsFolder = partsPath + 'components/';
const pageObjectsFolder = partsPath + 'page_objects/';
const pageActionsFolder = partsPath + 'page_actions/';
const servicesFolder = partsPath + 'services/';
const libFolders = [componentsFolder, pageActionsFolder, pageObjectsFolder, servicesFolder];


function getLib() {
    const lib = {};

    libFolders.forEach(folder => {
      const libType = getLibType(folder);
      lib[libType] = {};
      const classPaths = getClassPaths(folder);

      classPaths.forEach(path => {
        const className = getClassName(path);
        lib[libType][className] = require(path);
      });

    });

    return lib;
}

console.log(getLib());



function getClassPaths(path) {
  return helper.fs.getFiles(path);
}

function getClassName(path) {
  return path
    .replace(/.*[\\/]/, '')
    .replace(/\..*/, '');
}

function getLibType(path) {
  return path
    .replace(/.*generic[\\/]/, '')
    .replace(/[\\/].*/, '');
}
