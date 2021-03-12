let app = {

  display: '0',
  calc: '0',
  result: '',

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
    
    const outputElement = document.getElementById('output_current');

    outputElement.innerText = app.display;
  },

  /**
   * Method to display result.
   */
  displayResult: () => {

    const outputResultElement = document.getElementById('output_result');

    outputResultElement.innerText = app.result;
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
      app.result = '';
    }

    // Check if the button press is C
    if (button === 'C') {

      app.display = app.display.substring(0, app.display.length -1);

      if (app.display === '') {
        app.display = '0';
      }
    }

    // Check if the button press is 0-9 or .
    if (parseFloat(button) >= 0 || button === '.') {

      if (app.display === '0' && button === '.') {
        
        app.display = '0.';

      } else if (!app.display.includes('.') || parseFloat(button) >= 0) {

        app.display = app.display === '0' ? button : app.display + button;
      }
    }

    // Check if the button press is + or - or x or ÷ or %
    if (button === '+' || button === '-' || button === 'x' || button === '÷') {

      if (!app.display.includes('+') && !app.display.includes('-') && !app.display.includes('x') && !app.display.includes('÷')) {

        app.display = app.display + button;
      }
    }

    // Check if the button press is =
    if (button === '=') {

      app.calculate();
    }
  },

  /**
   * Method for performing an action based on the button clicked.
   */
  calculate: () => {
    
    if (app.display.includes('÷')) {

      app.calc = app.display.replace('÷', '/');

    } else if (app.display.includes('x')) {

      app.calc = app.display.replace('x', '*');

    } else {

      app.calc = app.display;
    }

    app.result = eval(app.calc);
  }
}

document.addEventListener('DOMContentLoaded', app.init);
