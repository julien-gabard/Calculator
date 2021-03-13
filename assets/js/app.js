let app = {

  current: '0',
  previous: '0',
  operation: '',
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
    app.displayCurrent();
    app.displayPrevious();
  },

  /**
   * Method to display current operation.
   */
  displayCurrent: () => {
    const outputCurrentElement = document.getElementById('output_current');

    outputCurrentElement.innerText = app.result !== '' ? parseFloat(app.result).toFixed(3) : app.current;
  },

  /**
   * Method to display result.
   */
  displayPrevious: () => {
    const outputPreviousElement = document.getElementById('output_previous');

    outputPreviousElement.innerText = app.previous;
  },

  /**
   * Method used to manage the listening of the click on a button.
   * @param {event} evt
   */
  buttonClickManagement: (evt) => {

    const { target } = evt;
    const button = target.innerText;

    // Check if the button press is AC (Reset all property)
    if (button === 'AC') {
      app.current = '0';
      app.previous = '0';
      app.operation = '';
      app.result = '';
    }

    // Check if the button press is C
    if (button === 'C') {
      app.current = app.current.substring(0, app.current.length -1);

      if (app.current === '') {
        app.current = '0';
      }
    }

    // Check if the button press is 0-9 or .
    if (parseFloat(button) >= 0 || button === '.') {
      
      if (app.current === '0' && button === '.') {
        
        app.current = '0.';

      } else if (!app.current.includes('.') || parseFloat(button) >= 0) {

        app.current = app.current === '0' ? button : app.current + button;
      }
    }

    // Check if the button press is + or - or x or ÷
    if (button === '+' || button === '-' || button === 'x' || button === '÷') {
      
      if (!app.current.includes('+') && !app.current.includes('-') && !app.current.includes('x') && !app.current.includes('÷')) {

        app.previous = `${app.result ? app.result : app.current !== '0' ? app.current : parseFloat(app.previous)} ${button}`;
        app.operation = button;
        app.current = '0';
        app.result = '';
      }
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
      app.previous = `${app.previous} ${app.current}`;
      app.calculate();
    }
  },

  /**
   * Method to perform an action based on the equal button.
   */
  calculate: () => {
    let number1 = parseFloat(app.previous);
    let number2 = Number(app.current);

    if (app.operation === '+') {

      app.result = number1 + number2;

    } else if (app.operation === '-') {

      app.result = number1 - number2;

    } else if (app.operation === 'x') {

      app.result = number1 * number2;

    } else if (app.operation === '÷') {

      app.result = number1 / number2;
    }
  }
}

document.addEventListener('DOMContentLoaded', app.init);
