const Calculator = class {

    constructor() {
        this.calculator = this.getCalculator();
        this.buttons = this.getButtons();
        this.result = this.getResult();
        this.calculations = this.getCalculations();
    }

    getCalculator() {

        const calculatorElement = document.getElementsByClassName('js-calculator');

        if (calculatorElement.length === 0) return null;

        return calculatorElement[0];

    }

    getCalculatorElement(element) {

        const el = this.calculator.querySelectorAll(element);

        if (el.length === 0) return null;

        return el;

    }

    getCalculations() {

        const calculations = this.getCalculatorElement('.js-calc-calculations');

        if (calculations === null) return null;

        return calculations;
    }

    getResult() {

        const results = this.getCalculatorElement('.js-calc-results');

        if (results === null) return null;

        return results;


    }

    getButtons() {

        const buttons = this.getCalculatorElement('.js-calc-button');

        if (buttons === null) return null;

        return buttons;

    }

    setupEvents() {

        if (this.buttons.length === 0) return;
        console.log(this.buttons);


    }

    initializeCalulator() {

        // check caclutor element before running any other logic
        if (this.calculator === null) return;

        this.setupEvents();


    }


}

export default Calculator;