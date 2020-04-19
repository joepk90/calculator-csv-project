const Calculator = class {

    constructor() {
        this.calculator = this.getCalculator();
        this.buttons = this.getButtons();
        this.resultElement = this.getResult();
        this.calculationElement = this.getCalculations();
        this.resultValues = this.getInitialResultValues();
        this.resultOperator = null;
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

        const calculationElement = this.getCalculatorElement('.js-calc-calculations');

        if (calculationElement === null) return null;

        return calculationElement;
    }

    getInitialResultValues() {

        if (this.resultElement === null) return;

        return {
            firstValue: 0,
            operator: null,
            secondValue: 0,
        };

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

    updateCalculationElement() {

        if (this.calculationElement === null) return;

        let html = '';
        html += this.resultValues.firstValue !== null ? parseInt(this.resultValues.firstValue) : '';
        html += this.resultValues.operator !== null ? this.resultValues.operator : '';
        html += this.resultValues.secondValue !== null ? parseInt(this.resultValues.secondValue) : '';

        this.calculationElement[0].innerHTML = html;

    }

    updateResetValue() {

        this.resultValues = this.getInitialResultValues();
        this.updateCalculationElement();

    }

    updateOperatorValue(value) {

        this.resultValues.operator = value
        this.updateCalculationElement();

    }

    updateResultValues(value) {

        if (Number.isInteger(parseInt(value)) === false) return;

        if (this.resultValues.operator === null) {

            this.resultValues.firstValue += value;

        } else {

            this.resultValues.secondValue += value;

        }

        this.updateCalculationElement();

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

                    this.updateResultValues(buttonValue);

                } else if (buttonType === 'operator') {

                    this.updateOperatorValue(buttonValue);

                } else if (buttonType === 'save') {

                } else if (buttonType === 'reset') {

                    this.updateResetValue();

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