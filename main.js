fetch("https://dog.ceo/api/breeds/image/random");
console.log("hi");

let topButton = document.getElementById("topButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}

function validateForm(){
    let firstName = document.forms["contactForm"]["firstName"].value;
    if(firstName == ""){
        alert("First name field cannot be empty.");
        return false;
    }
    let lastName = document.forms["contactForm"]["lastName"].value;
    if(lastName == ""){
        alert("Last name field cannot be empty.");
        return false;
    }
    let userEmail = document.forms["contactForm"]["userEmail"].value;
    if(userEmail == ""){
        alert("Email field cannot be empty.");
        return false;
    }
    if(userEmail.includes("@") == false || userEmail.includes(".") == false){
        alert("Invalid email address.");
        return false;
    }
}