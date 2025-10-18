const counterInput = document.querySelector("#counterInput");
const totalSymbols = document.querySelector("#totalSymbols");
const leftSymbols = document.querySelector("#leftSymbols");
const max_length = 50

counterInput.oninput = () => {
    let symbols = String(counterInput.value);
    counterInput.value = symbols.slice(0, max_length);
    const inputLength = counterInput.value.length
    totalSymbols.innerHTML = inputLength;
    leftSymbols.innerHTML = max_length - inputLength;
}
