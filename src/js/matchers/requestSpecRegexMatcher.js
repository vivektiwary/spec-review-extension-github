class RequestSpecRegexMatcher {
  constructor(matcherContext) {
    this.specRegex = /^spec\/requests\/(\w*)_spec.rb/;
    this.matcherContext = matcherContext;
  }

  match(targetString) {
    const result = this.specRegex.exec(targetString);
    if (result) {
      this.matcherContext.addSpecResponse(`${result[1]}_controller`);
    } else {
      this.matcherContext.next();
    }
  }
}

export default RequestSpecRegexMatcher;
