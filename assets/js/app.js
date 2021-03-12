let app = {

  display: '0',

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
  },

  /**
   * Method to display current operation.
   */
  displayCurrentOperation: () => {
    
    const outputElement = document.getElementById('output_current');

    outputElement.innerText = app.display;
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

    // Check if the button press is AC
    if (button === 'AC') {
      app.display = '0';
    }

    // Check if the button press is C

    // Check if the button press is 0-9 or .

    // Check if the button press is + or - or x or ÷ or %

    // Check if the button press is =
  },

  /**
   * Method for performing an action based on the button clicked.
   * @param {string} button
   */
  calculate: (button) => {
    // TODO
  }
}

document.addEventListener('DOMContentLoaded', app.init);
