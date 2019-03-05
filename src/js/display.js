class Display {
  constructor(domContext) {
    this.domContext = domContext;
  }

  appendButton(targetElem, msg) {
    const buttonElem = document.createElement('button');
    buttonElem.innerText = msg;
    buttonElem.setAttribute('style', 'color:white; background-color: green;');

    buttonElem.addEventListener('click', () => {
      targetElem.scrollIntoView();
    });

    this.domContext.appendChild(buttonElem);
  }

  appendNoFileWarning(msg) {
    const buttonElem = document.createElement('button');
    buttonElem.innerText = msg;
    buttonElem.setAttribute('style', 'color:white; background-color: red;');
    buttonElem.disabled = true;

    this.domContext.appendChild(buttonElem);
  }
}

export default Display;
