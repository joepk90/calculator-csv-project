import HTTP from './HTTPClient';

const Calculator = class {

    constructor() {
        this.http = new HTTP();
        this.calculator = this.getCalculator();
        this.buttons = this.getButtons();
        this.resultElement = this.getResult();
        this.calculationElement = this.getCalculations();
        this.resultValues = this.getInitialResultValues();
        this.resultOperator = null;
        this.result = 0;
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

        let html = 0;
        html += this.resultValues.firstValue !== 0 ? parseInt(this.resultValues.firstValue) : '';
        html += this.resultValues.operator !== null ? this.resultValues.operator : '';
        html += this.resultValues.secondValue !== 0 ? parseInt(this.resultValues.secondValue) : '';

        this.calculationElement[0].innerHTML = html;

    }

    resetValues() {

        this.resultValues = this.getInitialResultValues();
        this.updateCalculationElement();

        // reset main value to 0
        this.calculateValues();

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

    calculateValues() {

        this.result = eval(parseInt(this.resultValues.firstValue) + this.resultValues.operator + parseInt(this.resultValues.secondValue))

        this.resultElement[0].value = this.result;

    }

    getUrl() {

        const developmentUrl = process.env.CALCULATOR_URL

        if (developmentUrl !== undefined) return developmentUrl;

        return '/calculator/';

    }

    async saveData() {

        let calculatorData = new FormData();

        calculatorData.append("result", JSON.stringify(this.result));

        const url = this.getUrl();

        const result = await this.http.post(url, calculatorData);

        console.log(result);

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

                } else if (buttonType === 'equal') {

                    this.calculateValues();

                } else if (buttonType === 'save') {

                    this.saveData();

                } else if (buttonType === 'reset') {

                    this.resetValues();

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