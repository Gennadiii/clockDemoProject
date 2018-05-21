const Filehound = require('filehound');
const prompt = require('multiselect-prompt');
const fs = require('fs');


const specsPath = `${__dirname}/../../spec/`;
const testChoiseNumberPath = `${__dirname}/testChoiseNumber.indexHelper`;


async function selectTests(): Promise<string[]> {
  try {

    const testsPaths = await getTestsPaths();
    const promptOptions = getPromptObj(testsPaths);
    return await multiselectPrompt({
      question: 'Select tests to run',
      resultMessage: 'Running tests',
      options: promptOptions
    });

  } catch (err) {
    console.error(`Can't start tests: ${err}`);
  }
}


export {selectTests}


function getTestsPaths() {
  return new Promise((resolve, reject) => {
    Filehound.create()
      .ext('js')
      .paths(specsPath)
      .find((err, testsPaths) => {
        err && reject(new Error(`Couldn't find spec files\n${err}`));
        resolve(testsPaths.map(testPath => testPath));
      });
  });
}

function getPromptObj(arr) {
  const result = arr.map(el => {
    const element = el.replace(/.*spec[\\/]/, '');
    return {
      title: element,
      value: element
    };
  });
  preselectLastInput(result);
  return result;
}

function multiselectPrompt(params): Promise<string[]> {
  const {question, resultMessage, options} = params;
  console.info(`Choose nothing to go with everything`);
  return new Promise(resolve => {
    const cursor = readRememberedInput() || options.length / 2;
    prompt(`${question}:`, options, {cursor})
      .on('submit', items => {
        getSelectedItemsValues(items).length === 0 && markAllItemsSelected(items);
        const selected = getSelectedItemsValues(items);
        console.info(`${resultMessage}: `);
        logChoises(selected);
        writeInput(items);
        resolve(selected);
      });
  });
}

function markAllItemsSelected(items) {
  items.forEach(item => item.selected = true);
}

function logChoises(items) {
  console.log();
  items.forEach(item => console.log(item));
  console.log();
}

function getSelectedItemsValues(items) {
  return items.filter(item => item.selected)
    .map(item => item.value);
}

function writeInput(items) {
  items.find((item, index) => {
    if (item.selected) {
      fs.writeFileSync(testChoiseNumberPath, index);
      return true;
    }
  })
}

function readRememberedInput() {
  try {
    return fs.readFileSync(testChoiseNumberPath);
  } catch (err) {
    if (err.message.includes('ENOENT')) {
      return null;
    } else {
      throw err;
    }
  }
}

function preselectLastInput(items) {
  const lastInput = readRememberedInput();
  if (lastInput) {
    items[lastInput].selected = true;
  }
}
