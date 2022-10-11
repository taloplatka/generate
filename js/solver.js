const variablesQuantityInput = document.getElementById('variablesQuantity');
const validationAlert = document.getElementById('variablesQuantityAlert');
const solutionInput = document.getElementById('solution');
const okButton = document.getElementById('variablesQuantitySubmitButton');
const variablesValuesInputsForm = document.getElementById('variablesValuesInputs');

let variableInputs = [];
let variablesPossibilities = []



okButton.addEventListener('click', () => {
    variableInputs = [];
    variablesValuesInputsForm.innerHTML = '';
    validationAlert.innerText = '';

    const variablesQuantity = parseInt(variablesQuantityInput.value);
    const solution = parseInt(solutionInput.value);

    if (!isVariablesQuantityValid(variablesQuantity)) {
        getVariablesQuantityValidationNotifications(variablesQuantity).forEach((notification) => {
            validationAlert.innerText += ' ' + notification;
        } )
    }
    else {
        validationAlert.innerText = '';

        for (let i = 1; i <= variablesQuantity; i++) {
            const container = document.createElement('div');
            const variableDisplay = document.createElement('span');
            variableDisplay.innerHTML = 'X' + '<sub>' + i + '</sub>';
            
            const variablesValuesInput = document.createElement('input');
            variablesValuesInput.type = 'text';
            variablesValuesInput.placeholder = 'Possible Values';
            variableInputs.push(variablesValuesInput);


            container.appendChild(variableDisplay);
            container.appendChild(variablesValuesInput);
            variablesValuesInputsForm.appendChild(container);
            
        };

        const getAnswerButton = document.createElement('input');
        getAnswerButton.type = 'button';
        getAnswerButton.value = 'Get Answer';
        getAnswerButton.classList.add('get-answer-button');
        variablesValuesInputsForm.appendChild(getAnswerButton);
        getAnswerButton.addEventListener('click', () => {
            variablesPossibilities = [];
            variableInputs.forEach((input) => {
                variablesPossibilities.push(getPossibleVariableValuesFromInput(input.value));
            })
            Swal.fire('The Answer Is ' + getNumberOfSolutions(variablesPossibilities, solution));  
        })

    };

});

