import ModelRegexMatcher from './modelRegexMatcher.js';
import ControllerRegexMatcher from './controllerRegexmatcher.js';
import ServiceRegexMatcher from './serviceRegexMatcher.js';
import RequestSpecRegexMatcher from './requestSpecRegexMatcher.js';

const availableClasses = {
  ModelRegexMatcher,
  ControllerRegexMatcher,
  ServiceRegexMatcher,
  RequestSpecRegexMatcher,
};

class RegexMatcher {
  constructor(targetString, responseAccObj, domElem) {
    const matcherClasses = [
      'ModelRegexMatcher', 'ControllerRegexMatcher',
      'ServiceRegexMatcher', 'RequestSpecRegexMatcher',
    ];

    this.targetString = targetString;
    this.currentMatcherIndex = 0;
    this.matchers = [];
    this.responseAccObj = responseAccObj;
    this.domElem = domElem;
    this.populateMatchers(matcherClasses);
  }

  populateMatchers(classes) {
    classes.forEach((klass) => {
      this.matchers.push(
        new availableClasses[klass](this)
      );
    });
  }

  next() {
    this.currentMatcherIndex += 1;
    if (this.matchers.length == this.currentMatcherIndex) return;

    this.match();
  }

  getMatcher(index) {
    return this.matchers[index];
  }

  match() {
    this.getMatcher(this.currentMatcherIndex).match(this.targetString);
  }

  addFileResponse(fileName) {
    this.responseAccObj.addFileElem(fileName, this.domElem);
  }

  addSpecResponse(fileName) {
    this.responseAccObj.addSpecElem(fileName, this.domElem);
  }

  printMatchers() {
    this.matchers.forEach((matcher) => { console.log(matcher); });
  }
}

export default RegexMatcher;
