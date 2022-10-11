const getPossibleVariableValuesFromInput = (input) => {
    return input.match(/-?\d+/g).map(Number);
};

