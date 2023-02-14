// Task 1 remove elements with 2.0 in it

let aList = document.querySelectorAll(".main__languages a");

aArr = [...aList];


aArr.forEach(e => {
    if (e.textContent.includes("2.0")) {
        e.remove();
        // e.parentNode.removeChild(e); another way
    }
});


// Task 2

let textInputArea = document.querySelector(".main__form-input")

textInputArea.disabled = !true;

let textInputButton = document.querySelector(".main__form-btn");

textInputButton.disabled = !true;

textInputButton.addEventListener("click", () => {
    location.reload();
})