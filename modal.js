// Nav responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground"); //correction b en majuscule
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

function displayConfirmation(display) {
  const modalConf = document.querySelector(".confsubmit");
  const modalBd = document.querySelector(".modal-body");

  if (display) {
    modalBd.style.display = "none";
    modalConf.style.display = "block";
  } else {
    modalBd.style.display = "block";
    modalConf.style.display = "none";
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal form
document.getElementById("closeform").addEventListener("click", closeModal);
document.getElementById("close-btn-confirmation").addEventListener("click", closeModal);

// Launch modal form
function launchModal() {
  modalBg.style.display = "block";
  displayConfirmation(false);
}
function closeModal() {
  modalBg.style.display = "none";
}

// if Name ok
let firstNameImput = document.getElementById("first");
const firstErrorMsg = document.querySelector(".firstErrorMsg");
firstErrorMsg.style.display = "none";
firstNameImput.addEventListener("input", checkFirstName);
function checkFirstName() {
  const firstName = firstNameImput.value;
  const firstNameLong = firstName.length >= 2;

  if (firstNameLong) {
    firstNameImput.style.boxShadow = "0 0 5px 1px green";
    firstErrorMsg.style.display = "none";
    console.log("joli prenom");
  } else {
    firstNameImput.style.boxShadow = "0 0 5px 1px red";
    firstErrorMsg.style.display = "block";
    firstErrorMsg.style.color = "red";
    firstErrorMsg.style.fontSize = "13px";

    console.log("Minimum 2 lettres");
  }
  console.log(firstNameLong);
}

// if Last Name ok
let lastNameInput = document.getElementById("last");
lastNameInput.addEventListener("input", checkLastName);
const lastErrorMsg = document.querySelector(".lastErrorMsg");
lastErrorMsg.style.display = "none";

function checkLastName() {
  const lastName = lastNameInput.value;
  const lastNameLong = lastName.length >= 2;

  console.log(lastName);
  console.log(lastNameLong);
  if (lastNameLong) {
    lastNameInput.style.boxShadow = "0 0 5px 1px green";
    lastErrorMsg.style.display = "none";
    console.log("ok");
  } else {
    lastNameInput.style.boxShadow = "0 0 5px 1px red";
    lastErrorMsg.style.display = "block";
    lastErrorMsg.style.color = "red";
    lastErrorMsg.style.fontSize = "13px";

    console.log("Lastname error");
  }
  console.log(lastNameLong);
}

// if Email OK
let mailInput = document.getElementById("email");
mailInput.addEventListener("input", validEmail);
const emailErrorMsg = document.querySelector(".emailErrorMsg");
emailErrorMsg.style.display = "none";
function validEmail() {
  const value = mailInput.value;

  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  console.log(value);
  if (regexEmail.test(value)) {
    mailInput.style.boxShadow = "0 0 5px 1px green";
    emailErrorMsg.style.display = "none";
    console.log("L'email " + value + " est correct!.");
  } else {
    mailInput.style.boxShadow = "0 0 5px 1px red";
    emailErrorMsg.style.display = "block";
    emailErrorMsg.style.color = "red";
    emailErrorMsg.style.fontSize = "13px";

    console.log("email incorrect!.");
  }
  console.log(regexEmail.test(value));
}

/* If Age OK */
let ageInput = document.getElementById("birthdate");
ageInput.addEventListener("input", checkAge);
const dateErrorMsg = document.querySelector(".dateErrorMsg");
dateErrorMsg.style.display = "none";

function checkAge() {
  const ageValue = ageInput.value;
  const regexAge =
    /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  console.log(ageValue);

  if (regexAge.test(ageValue)) {
    ageInput.style.boxShadow = "0 0 5px 1px green";
    dateErrorMsg.style.display = "none";
    console.log("Date correct");
  } else {
    ageInput.style.boxShadow = "0 0 5px 1px red";
    dateErrorMsg.style.display = "block";
    dateErrorMsg.style.color = "red";
    dateErrorMsg.style.fontSize = "13px";

    console.log("Date incorrect");
  }
  console.log(regexAge.test(ageValue));
}

/** Check  tournament */
let nbTournaments = document.getElementById("quantity");
nbTournaments.addEventListener("input", checkTournament);
const tourErrorMsg = document.querySelector(".tourErrorMsg");
tourErrorMsg.style.display = "none";
function checkTournament() {
  const tournamentInput = nbTournaments.value;

  if (tournamentInput == "") {
    nbTournaments.style.boxShadow = "0 0 5px 1px red";
    tourErrorMsg.style.display = "block";
    console.log("nb tournois incorrect");
  } else {
    nbTournaments.style.boxShadow = "0 0 5px 1px green";
    tourErrorMsg.style.display = "none";
    tourErrorMsg.style.color = "red";
    tourErrorMsg.style.fontSize = "13px";
    console.log("nb tourmois ok");
  }
  console.log(tournamentInput);
}
/** Check radio button */

const cityErrorMsg = document.querySelector(".cityErrorMsg");
cityErrorMsg.style.color = "red";
cityErrorMsg.style.fontSize = "13px";
let rad1 = document.getElementById("location1");
let rad2 = document.getElementById("location2");
let rad3 = document.getElementById("location3");
let rad4 = document.getElementById("location4");
let rad5 = document.getElementById("location5");
let rad6 = document.getElementById("location6");
rad1.addEventListener("input", checkTournamentCity);
rad2.addEventListener("input", checkTournamentCity);
rad3.addEventListener("input", checkTournamentCity);
rad4.addEventListener("input", checkTournamentCity);
rad5.addEventListener("input", checkTournamentCity);
rad6.addEventListener("input", checkTournamentCity);
function checkTournamentCity() {
  const cityErrorMsg = document.querySelector(".cityErrorMsg");
  const radAreChecked =
    rad1.checked ||
    rad2.checked ||
    rad3.checked ||
    rad4.checked ||
    rad5.checked ||
    rad6.checked;
  if (radAreChecked) {
    cityErrorMsg.style.display = "none";
    console.log("city ok");
  } else {
    cityErrorMsg.style.display = "block";
    cityErrorMsg.style.color = "red";
    cityErrorMsg.style.fontSize = "13px";
    console.log("selectionne une city ");
  }
  console.log(radAreChecked);
}

/* Check the terms and conditions */
let terms = document.getElementById("checkbox1");
const termsErrorMsg = document.querySelector(".termsErrorMsg");
termsErrorMsg.style.display = "none";
termsErrorMsg.style.color = "red";
termsErrorMsg.style.fontSize = "13px";

terms.addEventListener("input", checkTermsAndConditions);
function checkTermsAndConditions() {
  const termsAreChecked = terms.checked;
  if (termsAreChecked) {
    terms.style.boxShadow = "0 0 5px 1px green";
    termsErrorMsg.style.display = "none";

    termsErrorMsg.style.fontSize = "13px";
    console.log("Bravo");
  } else {
    terms.style.boxShadow = "0 0 5px 1px red";
    termsErrorMsg.style.display = "block";
    termsErrorMsg.style.color = "red";
    termsErrorMsg.style.fontSize = "13px";
    console.log("Veuillez accepter les conditions");
  }
  console.log(termsAreChecked);
}

/** check if the form valid */

function validate(event) {
  event.preventDefault();
  const firstName = firstNameImput.value;
  const firstNameLong = firstName.length >= 2;
  const lastName = lastNameInput.value;
  const lastNameLong = lastName.length >= 2;
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const regexAge =
    /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  const tournamentInput = nbTournaments.value >= 0;
  const radAreChecked =
    rad1.checked ||
    rad2.checked ||
    rad3.checked ||
    rad4.checked ||
    rad5.checked ||
    rad6.checked;
  const termsAreChecked = terms.checked;
  const email = mailInput.value;
  const age = ageInput.value;

  if (
    firstNameLong &&
    lastNameLong &&
    regexEmail.test(email) &&
    regexAge.test(age) &&
    tournamentInput &&
    radAreChecked &&
    termsAreChecked
  ) {
    displayConfirmation(true);

    
    return false;
  } else {
    return false;
  }
}
