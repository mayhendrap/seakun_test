const triangle = (input) => {
    for (let i = 0; i < input; i++) {
        let star = ""
        for (let j = 0; j < input; j++) {
            star += " *"
            if (i == j) {
                break
            }
        }
        console.log(star)
    }
    for (let i = input-1; i > 0; i--) {
        let star = ""
        for (let j = 0; j < input-1; j++) {
            if (j == i) {
                break
            }
            star += " *"
        }
        console.log(star)
    }
}

triangle(3)
