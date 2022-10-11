const getNumberOfSolutions = (variables, solution) => {
    const variablesCombinations = getCartesianProduct(variables);
    let numberOfSolutions = 0;

    variablesCombinations.forEach((combination) => {
        if (getSum(combination) == solution) {
            numberOfSolutions++;
        };
    });

    return numberOfSolutions;
}