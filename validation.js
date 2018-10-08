// validation script here

//Take all input fields
const inputFields = document.querySelectorAll("input");

//Regular Expression patterns for each fields
const RegEX = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{8,20}$/,
  telephone: /^\d{11}$/,
  slug: /^[a-z\d-]{8,20}$/
};

//Validation
function validate(inputField, regex) {
  if (regex.test(inputField.value)) {
    inputField.className = "valid";
  } else {
    inputField.className = "invalid";
  }
}

//Event listeners for all fields
inputFields.forEach(inputField => {
  inputField.addEventListener("keyup", evnt => {
    // console.log(evnt.target.attributes.name.value);
    validate(inputField, RegEX[evnt.target.attributes.name.value]);
  });
});
