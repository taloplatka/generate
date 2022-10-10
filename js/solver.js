equation = {
    'variablesQuantity': 0,
    'solution': 0
}

const variablesQuantityInput = document.getElementById('variablesQuantity');
const variablesQuantityAlert = document.getElementById('variablesQuantityAlert');
const solutionInput = document.getElementById('solution');
const variablesQuantitySubmitButton = document.getElementById('variablesQuantitySubmitButton');
const variablesValuesInputs = document.getElementById('variablesValuesInputs');

variablesQuantitySubmitButton.addEventListener('click', () => {
    variablesValuesInputs.innerHTML = ''

    const variablesQuantity = parseInt(variablesQuantityInput.value);
    const solution = parseInt(solutionInput.value);

    if (variablesQuantity <= 0) {
        variablesQuantityAlert.style.display = 'block';
    }
    else {
        variablesQuantityAlert.style.display = 'none';
        
        equation["variablesQuantity"] = variablesQuantity;
        equation["solution"] = solution;

        for (let i = 1; i <= variablesQuantity; i++) {
            const container = document.createElement('div');
            const variableDisplay = document.createElement('span');
            variableDisplay.innerHTML = 'X' + '<sub>' + i + '</sub>';
            
            const variablesValuesInput = document.createElement("input");
            variablesValuesInput.type = "text";
            variablesValuesInput.placeholder = "Possible Values";


            container.appendChild(variableDisplay);
            container.appendChild(variablesValuesInput);
            variablesValuesInputs.appendChild(container);
            
        };
    };

});