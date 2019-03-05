class CodeToSpecElementMap {
  constructor() {
    this.codeElems = {};
    this.specElems = {};
  }

  addFileElem(fileName, fileElem) {
    this.codeElems[fileName] = fileElem;
  }

  addSpecElem(fileName, specElem) {
    this.specElems[fileName] = specElem;
  }

  getFileElem(fileName) {
    return this.codeElems[fileName];
  }

  getSpecElem(fileName) {
    return this.specElems[fileName];
  }

  printCodeElems() {
    for (let [key, value] of Object.entries(this.codeElems)) {
      console.log('the key is: ', key);
      console.log('the value is: ', value);
    }

    for (let [key, value] of Object.entries(this.specElems)) {
      console.log('the key is: ', key);
      console.log('the value is: ', value);
    }
  }
}

export default CodeToSpecElementMap;
