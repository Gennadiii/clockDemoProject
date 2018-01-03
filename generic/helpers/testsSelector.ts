const readlineSync = require('readline-sync');
import {availableTests} from "../../spec/availableTests";


function selectTests(params: IselectTests): string[] {
  console.log(`Select tests:
  1 - Individual tests
  2 - Test sets
  Default - all tests`);
  let userChoice = readlineSync.question('\n');

  switch (userChoice) {
    case '':
      return getAllTestsForPlatform(params);
    case '1':
      return selectIndividualTests(params);
    case '2':
      return selectTestSets(params);
  }
}


export {selectTests};


interface IselectTests {
  platform: string;
}


function selectIndividualTests(params: IselectTests): string[] {
  const allTests = getAllTestsForPlatform(params);
  console.log(`Choose desired tests separated by space:`);

  printArrayWithNumbers({arr: allTests, isArrOfObjects: false});

  const userChoice = readlineSync.question('\n').match(/\d+/g);

  return userChoice.map(choice => allTests[choice - 1]);
}

function selectTestSets(params: IselectTests): string[] {
  const allTestSets = getAllTestSetsForPlatform(params);
  console.log(`Choose desired test sets separated by space:`);

  printArrayWithNumbers({arr: allTestSets, isArrOfObjects: true, property: 'name'});

  const userChoice = readlineSync.question('\n').match(/\d+/g),
    desiredSetsNames = userChoice.map(choice => allTestSets[choice - 1].name),
    desiredTestSets = allTestSets.filter(testSet => desiredSetsNames.includes(testSet.name));

  return getConcatenatedArray({arr: desiredTestSets, isArrOfObjects: true, property: 'tests'});
}

function getAllTestsForPlatform(params: IselectTests): string[] {
  const {platform} = params;
  let genericTests = getConcatenatedArray({arr: availableTests.generic, isArrOfObjects: true, property: 'tests'}),
    platformTests = getConcatenatedArray({arr: availableTests[platform], isArrOfObjects: true, property: 'tests'});

  return genericTests.concat(platformTests);
}

function getAllTestSetsForPlatform(params: IselectTests) {
  const {platform} = params;
  let genericTestSets = getConcatenatedArray({arr: availableTests.generic}),
    platformTestSets = getConcatenatedArray({arr: availableTests[platform]});

  return genericTestSets.concat(platformTestSets);
}

function printArrayWithNumbers(params: IprintArrayWithNumbers): void {
  const {arr, isArrOfObjects, property} = params;
  arr.forEach((el, index) => console.log(`${index + 1} - ${isArrOfObjects ? el[property] : el}`));
}

function getConcatenatedArray(params: IgetConcatenatedArray) {
  const {arr, isArrOfObjects, property} = params,
    arrayOfArrays = isArrOfObjects
      ? arr.map(obj => obj[property])
      : arr;
  return [].concat.apply([], arrayOfArrays);
}


interface IprintArrayWithNumbers {
  arr: any[];
  isArrOfObjects?: boolean;
  property?: string;
}


interface IgetConcatenatedArray extends IprintArrayWithNumbers {
}