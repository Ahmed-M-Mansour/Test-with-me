// change Header Pic Once to improve the performance 

window.onload=function(){
	setTimeout(()=> {
	const el = document.querySelector(".header");
	el.style.backgroundImage = "url('./assets/images/main.webp')";
	}, 2000);

};
// Handle The Popup Window 
document.getElementById("button-register").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});
// Close The Popup Window 
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});

/*
Form Validation 
Get the inputs values from the Document object  
*/
const firstName = document.getElementById("first__name");
const lastName = document.getElementById("last__name");
const email = document.getElementById("email");
const number = document.getElementById("number");

const formErorr = document.getElementById('error')
const fprmCompleted = document.getElementById('completed')

console.log(formErorr)
console.log(fprmCompleted)



// Handle Form Submition 
  addEventListener("submit", (e) => {
	  e.preventDefault() ; 
	  // Get the value of the inputs to check it 
	const firstNameValue = firstName.value ; 
	const lastNameValue = lastName.value ; 
	const emailValue = email.value ; 
	const numberValue = number.value ; 

	// Validators Inputs 
    const validatorFirsName = validator.isAlpha(firstNameValue); 
    const validatorLastName = validator.isAlpha(lastNameValue); 
    const validatorEmail = validator.isEmail(emailValue); 
    const validatorPhoneNumber = validator.isMobilePhone(numberValue); 
	// check if the inputs are Correct 
	if(validatorFirsName && validatorLastName && validatorEmail && validatorPhoneNumber ) {
		formErorr.style["display"] = "none"
		fprmCompleted.style["display"] = "block"
	}
	// check if the inputs are NOT Correct
	else {
		fprmCompleted.style["display"] = "none"
		formErorr.style["display"] = "block"
	}
  });

