class ControllerRegexMatcher {
  constructor(matcherContext) {
    this.regex = /^app\/controllers\/(\w*).rb/;
    this.specRegex = /^spec\/controllers\/(\w*)_spec.rb/;
    this.matcherContext = matcherContext;
    this.matchFound = false;
  }

  match(targetString) {
    this.matchWithCode(targetString);
    this.matchWithSpec(targetString);

    if (!this.matchFound) this.matcherContext.next();
  }

  matchWithCode(targetString) {
    const result = this.regex.exec(targetString);
    if (result) {
      this.matchFound = true;
      this.matcherContext.addFileResponse(result[1]);
    }
  }

  matchWithSpec(targetString) {
    const result = this.specRegex.exec(targetString);
    if (result) {
      this.matchFound = true;
      this.matcherContext.addSpecResponse(result[1]);
    }
  }
}

export default ControllerRegexMatcher;
