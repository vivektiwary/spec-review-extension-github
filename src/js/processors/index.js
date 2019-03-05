import RequestSpecFileProcessor from './requestSpecFileProcessor.js';
import SpecFileProcessor from './specFileProcessor.js';
import CodeFileProcessor from './codeFileProcessor.js';

const availableClasses = {
  RequestSpecFileProcessor,
  SpecFileProcessor,
  CodeFileProcessor,
};

class Processor {
  constructor(fileName, fileMapObj, displayObj) {
    const processorClasses = ['RequestSpecFileProcessor', 'SpecFileProcessor', 'CodeFileProcessor']

    this.currentProcessorIndex = 0;
    this.processors = [];
    this.fileName = fileName;
    this.fileMapObj = fileMapObj;
    this.displayObj = displayObj;

    this.populateProcessors(processorClasses);
  }

  populateProcessors(classes) {
    classes.forEach((klass) => {
      this.processors.push(
        new availableClasses[klass](this, this.fileMapObj, this.displayObj)
      )
    })
  }

  next() {
    this.currentProcessorIndex += 1;
    if (this.processors.length == this.currentProcessorIndex) return;

    this.process();
  }

  getProcessor(index) {
    return this.processors[index];
  }

  process() {
    this.getProcessor(this.currentProcessorIndex).process(this.fileName);
  }
}

export default Processor;
