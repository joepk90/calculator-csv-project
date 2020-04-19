const Calculator = class {

    constructor() {
        this.calculatorElement = this.getCalculatorElement();
        this.buttons = this.getButtons();
        this.result = this.getResult();
        this.calculations = this.getCalculations();
    }


    getCalculatorElement() {

        const calculatorElement = document.getElementsByClassName('js-calculator');

        if (calculatorElement.length === 0) return null;

        return calculatorElement[0];

    }

    getCalculations() {

    }

    getResult() {

    }

    getButtons() {

        if (this.calculatorElement === null) return;

        const buttons = this.calculatorElement.querySelectorAll('.js-calc-button');

        if (buttons.length === 0) return null;

        return buttons;

    }

    setupEvents() {

        if (this.buttons.length === 0) return;
        console.log(this.buttons);


    }

    initializeCalulator() {

        this.setupEvents();


    }


}

export default Calculator;