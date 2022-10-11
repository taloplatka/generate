const getSum = (iterable) => {
    let sum = 0;

    for (let i = 0; i < iterable.length; i++) {
        sum += iterable[i];
    };
    
    return sum;
};

const getCartesianProduct = (arrays) => {
    return [...[...arrays]].reduce((a, b) =>
      a.map(x => b.map(y => x.concat(y)))
      .reduce((a, b) => a.concat(b), []), [[]]);
};
