class SpecFileProcessor {
  constructor(processorContext, fileMapObj, displayObj) {
    this.processorContext = processorContext
    this.re = /[\/\w]*\/(\w+)_spec.rb/
    this.fileMapObj = fileMapObj
    this.displayObj = displayObj
  }

  process(fileName) {
    const result = this.re.exec(fileName);
    if (!result) return this.processorContext.next();

    const fileNameWithoutExtension = result[1];
    const fileElem = this.fileMapObj.getFileElem(fileNameWithoutExtension);

    if (fileElem) {
      this.displayObj.appendButton(fileElem, 'Code File');
    } else {
      this.displayObj.appendNoFileWarning('No Code File');
    }
  }
}

export default SpecFileProcessor;
