const Calculator = class {

    constructor() {
        this.calculator = this.getCalculator();
        this.buttons = this.getButtons();
        this.resultElement = this.getResult();
        this.calculationElement = this.getCalculations();
        this.resultValues = this.getResultValues();
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

    getResultValues() {

        if (this.resultElement === null) return;

        return {
            firstValue: this.resultElement[0].value,
            operator: null,
            secondValue: null,
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

        console.log(this.calculationElement);
        if (this.calculationElement === null) return;


        let html = '';
        html += this.resultValues.firstValue !== null ? this.resultValues.firstValue : '';
        html += this.resultValues.operator !== null ? this.resultValues.operator : '';
        html += this.resultValues.secondValue !== null ? this.resultValues.secondValue : '';

        this.calculationElement[0].innerHTML = parseInt(html);

    }

    updateResultValues(value) {

        if (Number.isInteger(parseInt(value)) === false) return;

        if (this.resultOperator == null) {

            this.resultValues.firstValue += value;

        } else {

            this.resultValues.secondValue += value;

        }


        this.updateCalculationElement();

        console.log(this.resultValues);


        this.resultElement
        // TODO update input value 
        // this.sresultValues = value


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