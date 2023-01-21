const textInput = document.querySelector(".input input");
const checkButton = document.querySelector(".input button");
const resultText = document.querySelector(".check-result");
let filterInput;

checkButton.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    if (filterInput != reverseInput) {
        return resultText.innerHTML = `No, '<strong><span>${textInput.value}</span></strong>' is not a palindrome!`
    }
    resultText.innerHTML = `Yes, '<strong><span>${textInput.value}</span></strong>' is a palindrome!`
});
textInput.addEventListener("keyup", () => {
    filterInput = textInput.value.replace("/\s/g","");
    if (filterInput) {
        console.log(filterInput);
        return checkButton.classList.add("active");
    }
    checkButton.classList.remove("active");
});