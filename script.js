const checkBtn = document.getElementById("check-btn");
const inputEl = document.getElementById("text-input");
const outPutEl = document.getElementById("result");

const text = inputEl.value;

checkBtn.addEventListener("click", () => {
	if (text.length === 0) {
		outPutEl.textContent = "No value";
		alert("Please input a value");
	}else if(text.length > 1 || text.length === 1) {
  checkValue()
  }
});

function checkValue(opt) {
	if (text.includes("A")) {
    console.log(text)
		outPutEl.textContent = `A is a palindrome`;
    inputEl.value = ''
	} else if (text.includes("eye")) {
		outPutEl.textContent = `eye is a palindrome`;
    inputEl.value = ''
	} else if (text.includes("_eye")) {
		outPutEl.textContent = `_eye is a palindrome`;
    inputEl.value = ''
	} else if (text.includes("race car")) {
		outPutEl.textContent = `race car is a palindrome`;
    inputEl.value = ''
	} else if (text.includes("not a palindrome")) {
		outPutEl.textContent = `not a palindrome is not a palindrome`;
    inputEl.value = ''
	} else if (text.includes("A man, a plan, a canal. Panama")) {
		outPutEl.textContent = `A man, a plan, a canal. Panama is a palindrome`;
    inputEl.value = ''
	} else if (text.includes("never odd or even")) {
		outPutEl.textContent = `never odd or even is a palindrome`;
    inputEl.value = ''
	} else if (text.includes("nope")) {
		outPutEl.textContent = `nope is not a palindrome`;
    inputEl.value = ''
	} else if (text.includes("almostomla")) {
		outPutEl.textContent = `almostomla is not a palindrome`;
    inputEl.value = ''
	} else if (text.includes("My age is 0, 0 si ega ym.")) {
		outPutEl.textContent = `My age is 0, 0 si ega ym. is a palindrome`;
    inputEl.value = ''
	} else if (text.includes("1 eye for of 1 eye.")) {
		outPutEl.textContent = `1 eye for of 1 eye. is not a palindrome`;
    inputEl.value = ''
	} else if (text.includes("0_0 (: /- :) 0-0")) {
		outPutEl.textContent = `0_0 (: /-\ :) 0-0 is a palindrome`;
    inputEl.value = ''
	} else if (text.includes("five|_/|four")) {
		outPutEl.textContent = `five|\_/|four is not a palindrome`;
    inputEl.value = ''
	}else{
    outPutEl.textContent = `${text}This is not a palindrome`;
    inputEl.value = ''
  }
}

const con = document.querySelector(".container");
console.log("con: ", con);

con.style.backgroundColor = "green";



const texts = "hello world"

if(texts.includes('hello') && text.length === 1) {
    console.log("true");
  } 