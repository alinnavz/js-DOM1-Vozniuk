const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const result = document.getElementById("result");

let activeInput = number1;

number1.addEventListener("focus", () => {
    activeInput = number1;
});

number2.addEventListener("focus", () => {
    activeInput = number2;
});

document.querySelectorAll(".num").forEach(button => {
    button.addEventListener("click", () => {
        activeInput.value += button.textContent;
    });
});

document.getElementById("clear").addEventListener("click", () => {
    number1.value = "";
    number2.value = "";
    result.textContent = "";
});

document.querySelectorAll("[data-op]").forEach(opButton => {
    opButton.addEventListener("click", () => {
        const val1 = number1.value;
        const val2 = number2.value;
        const operator = opButton.dataset.op;

        if (val1 === "" || val2 === "") {
            result.textContent = "Помилка (порожні поля)";
            return;
        }

        if (isNaN(val1) || isNaN(val2)) {
            result.textContent = "Некоректні дані";
            return;
        }

        let a = parseFloat(val1);
        let b = parseFloat(val2);
        let res;

        switch (operator) {
            case "+":
                res = a + b;
                break;
            case "-":
                res = a - b;
                break;
            case "*":
                res = a * b;
                break;
            case "/":
                if (b === 0) {
                    result.textContent = "Ділення на 0!";
                    return;
                }
                res = a / b;
                break;
        }

        res = Math.round(res * 100) / 100;

        result.textContent = res;
    });
});
