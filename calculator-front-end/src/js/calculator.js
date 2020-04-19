const Calculator = class {

    constructor() {
        this.calculator = this.getCalculator();
        this.buttons = this.getButtons();
        this.result = this.getResult();
        this.calculations = this.getCalculations();
        this.resultValue = this.getResultValue();
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

    getResultValue() {

        if (this.result === null) return;

        return this.result[0].value;

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

    updateResult(value) {


        console.log(value);


    }

    setupButtonEvents() {

        if (this.buttons === null) return;

        const buttons = Array.from(this.buttons);

        buttons.forEach((button) => {

            button.addEventListener('click', (e) => {

                e.preventDefault();

                if (e.target.dataset.type === undefined) return;
                if (e.target.value === undefined) return;

                let buttonType = e.target.dataset.type;
                let buttonValue = e.target.value;

                if (buttonType === 'number') {

                    this.updateResult(buttonValue);

                } else if (buttonType === 'operator') {

                } else if (buttonType === 'save') {

                } else if (buttonType === 'reset') {

                }

            })
        });


    }

    initializeCalulator() {

        // check caclutor element before running any other logic
        if (this.calculator === null) return;

        this.setupButtonEvents();


    }


}

export default Calculator;