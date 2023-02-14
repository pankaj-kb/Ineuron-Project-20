// Task 1 remove elements with 2.0 in it

let aList = document.querySelectorAll(".main__languages a");

aArr = [...aList];


aArr.forEach(e => {
    if(e.textContent.includes("2.0")) {
        e.remove();
    }
});
  