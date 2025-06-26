const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let current = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;

        if (value) {
            current += value;
            display.value = current;
        } else if (button.id === "clear") {
            current = "";
            display.value = "";
        } else if (button.id === "equals") {
            try {
                current = eval(current).toString();
                display.value = current;
            } catch {
                display.value = "Error";
                current = "";
            }
        }
    });
});

// Bonus: Keyboard Support
document.addEventListener("keydown", e => {
    if ("0123456789/*-+.".includes(e.key)) {
        current += e.key;
        display.value = current;
    } else if (e.key === "Enter") {
        try {
            current = eval(current).toString();
            display.value = current;
        } catch {
            display.value = "Error";
            current = "";
        }
    } else if (e.key === "Backspace") {
        current = current.slice(0, -1);
        display.value = current;
    } else if (e.key.toLowerCase() === "c") {
        current = "";
        display.value = "";
    }
});