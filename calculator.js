const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

// Handle button clicks
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (btn.classList.contains("clear")) {
      currentInput = "";
      display.value = "";
    } else if (btn.classList.contains("delete")) {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else if (btn.classList.contains("equal")) {
      try {
        currentInput = currentInput
          .replace(/×/g, "*")
          .replace(/÷/g, "/")
          .replace(/−/g, "-");
        display.value = eval(currentInput);
        currentInput = display.value;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// ===== Keyboard Support =====
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
    currentInput += e.key;
    display.value = currentInput;
  } else if (e.key === "Enter") {
    try {
      currentInput = currentInput
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/−/g, "-");
      display.value = eval(currentInput);
      currentInput = display.value;
    } catch {
      display.value = "Error";
      currentInput = "";
    }
  } else if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (e.key === "Escape") {
    currentInput = "";
    display.value = "";
  }
});
