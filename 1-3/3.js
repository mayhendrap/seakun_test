const factorial = (input) => {
    let finalNumber = 1
    for (let i = input; i > 0; i--) {
        finalNumber = finalNumber * i
    }
    return finalNumber;
}

const result = factorial(4)

console.log(result)