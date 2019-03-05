import CodeToSpecElementMap from './codeToSpecElement.js';
import Display from './display.js';
import Processor from './processors/index.js';

import RegexMatcher from './matchers/index.js';

const populateMatchersWithFiles = (fileElems, fileMapObj) => {
  for (let i = 0, len = fileElems.length; i < len; i += 1) {
    const divElem = fileElems[i];
    const fileInfo = divElem.querySelector('.file-info');

    const fileNameWithPath = fileInfo.querySelector('a').innerText;
    const reMatcher = new RegexMatcher(fileNameWithPath, fileMapObj, divElem)
    reMatcher.match();
  }
}

const displayButtonsForFiles = (fileElems, fileMapObj) => {
  for (let i = 0, len = fileElems.length; i < len; i += 1) {
    const fileInfo = fileElems[i].querySelector('.file-info');
    const fileNameWithPath = fileInfo.querySelector('a').innerText;

    const displayObj = new Display(fileInfo)
    const processor = new Processor(fileNameWithPath, fileMapObj, displayObj)
    processor.process();
  }
}

export function main() {
  setTimeout(() => {
    const fileElems = document.getElementsByClassName('file js-file');

    const fileMapObj = new CodeToSpecElementMap();

    populateMatchersWithFiles(fileElems, fileMapObj);
    displayButtonsForFiles(fileElems, fileMapObj);
  }, 10000);
}
