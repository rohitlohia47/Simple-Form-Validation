const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


const showError = (input, mssg) => {
    let parent = input.parentElement
    parent.className = "form-control error"
    let small = parent.querySelector("small")
    small.innerText = mssg
}
const showSuccess = (input) => {
    let parent = input.parentElement
    parent.className = "form-control success"
    let small = parent.querySelector("small")

}

const isRequired = (arr) => {
    arr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${caps(input.id)} Is Empty`)
        }
        else {
            showSuccess(input)
        }
    })

}

const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${caps(input.id)} Must Have ${min} Characters`)
    }
    else if (input.value.length > max) {
        showError(input, `${caps(input.id)} Must Be Less Than ${max} Characters`)
    }
    else {
        showSuccess(input)
    }
}

const checkPassword = (input1, input2) => {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords Do Not Match")
    }

}

const caps = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1)
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    isRequired([username, email, password, password2])
    checkLength(username, 3, 10)
    checkLength(password, 6, 20)
    checkPassword(password, password2)
})

