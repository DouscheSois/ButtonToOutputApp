class Container {
  constructor(outputNumber) {
    this.outputNumber = outputNumber;
  }

  appendNumber(number) {
    this.output = number;
  }

  updateDisplay() {
    this.outputNumber.innerText = this.output;
  }
}

const numberButtons = document.querySelectorAll('[number]');
const outputNumber = document.querySelector('[output-number]');

const container = new Container(outputNumber);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    container.appendNumber(button.innerText);
    container.updateDisplay();
  })
})
