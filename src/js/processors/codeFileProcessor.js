class CodeFileProcessor {
  constructor(processorContext, fileMapObj, displayObj) {
    this.re = /[\/\w]*\/(\w+).rb/
    this.processorContext = processorContext
    this.fileMapObj = fileMapObj
    this.displayObj = displayObj
  }

  process(fileName) {
    const result = this.re.exec(fileName);
    if (!result) return this.processorContext.next();

    const fileNameWithoutExtension = result[1];
    const specElem = this.fileMapObj.getSpecElem(fileNameWithoutExtension);

    if (specElem) {
      this.displayObj.appendButton(specElem, 'Spec File');
    } else {
      this.displayObj.appendNoFileWarning('No Spec File');
    }
  }
}

export default CodeFileProcessor;
