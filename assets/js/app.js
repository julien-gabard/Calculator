let app = {

  /**
   * Method executed when launching the application. ( constructor )
   */
  init: () => {

    const allButton = document.querySelectorAll('button');

    for(const button of allButton) {
      button.addEventListener('click', app.playButtonAndRefreshDisplay);
    }
  },

  /**
   * Method which combines the method of buttons and display.
   * @param {event} evt 
   */
  playButtonAndRefreshDisplay: (evt) => {
    
    app.buttonClickManagement(evt);
    app.displayCurrentOperation();
    app.displayResult();
  },

  /**
   * Method to display current operation.
   */
  displayCurrentOperation: () => {
    // TODO
  },

  /**
   * Method to display result.
   */
  displayResult: () => {
    // TODO
  },

  /**
   * Method used to manage the listening of the click on a button.
   * @param {event} evt
   */
  buttonClickManagement: (evt) => {

    const { target } = evt;
    const button = target.innerText;
    const lastCharacter = app.display.charAt(app.display.length-1);
    let containOperationSymbol = false;

    // Check if the button press is AC
    if (button === 'AC') {
      // TODO
    }

    // Check if the button press is C
    if (button === 'C') {
      // TODO
    }

    // Check if the button press is 0-9 or .
    if (parseFloat(button) >= 0 || button === '.') {
      // TODO
    }

    // Check if the button press is + or - or x or ÷
    if (button === '+' || button === '-' || button === 'x' || button === '÷') {
      // TODO
    }

    // Check if the button press is %
    if (button === '%') {
      // TODO
    }

    // Check if the button press is +/-
    if (button === '+/-') {
      // TODO
    }

    // Check if the button press is =
    if (button === '=') {
      app.calculate();
    }
  },

  /**
   * Method to perform an action based on the equal button.
   */
  calculate: () => {
    // TODO
  }
}

document.addEventListener('DOMContentLoaded', app.init);
