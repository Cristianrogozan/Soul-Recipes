const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


// login form //
registerLink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');
};

btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
};

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
};
 



//CAROUSEL//
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});




//SIDEBAR HIDDEN RECIPES//
function afiseazaC1() {
  var div = document.getElementById("c3container");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
function afiseazaC2() {
  var div = document.getElementById("c4container");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
function afiseazaC3() {
  var div = document.getElementById("c5container");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
function afiseazaC4() {
  var div = document.getElementById("c6container");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
function afiseazaC5() {
  var div = document.getElementById("c7container");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}




//CARDS HIDDEN RECIPES//
function myFunction() {
  var x = document.getElementById('myDIV');
  if (x.style.display === 'none') {
    x.style.display = 'block';
}
else {
    x.style.display = 'none';
  }
}

function myFunction2() {
  var y = document.getElementById('myDIV2');
  if (y.style.display === 'none') {
    y.style.display = 'block';
}
else {
    y.style.display = 'none';
  }
}

function myFunction3() {
  var z = document.getElementById('myDIV3');
  if (z.style.display === 'none') {
    z.style.display = 'block';
}
else {
    z.style.display = 'none';
  }
}

function myFunction4() {
  var a = document.getElementById('myDIV4');
  if (a.style.display === 'none') {
    a.style.display = 'block';
}
else {
    a.style.display = 'none';
  }
}

function myFunction5() {
  var b = document.getElementById('myDIV5');
  if (b.style.display === 'none') {
    b.style.display = 'block';
}
else {
    b.style.display = 'none';
  }
}

function myFunction6() {
  var c = document.getElementById('myDIV6');
  if (c.style.display === 'none') {
    c.style.display = 'block';
}
else {
    c.style.display = 'none';
  }
}

function myFunction7() {
  var d = document.getElementById('myDIV7');
  if (d.style.display === 'none') {
    d.style.display = 'block';
}
else {
    d.style.display = 'none';
  }
}

function myFunction8() {
  var e = document.getElementById('myDIV8');
  if (e.style.display === 'none') {
    e.style.display = 'block';
}
else {
    e.style.display = 'none';
  }
}
//CARDS HIDDEN RECIPES CLOSE BUTTON//
var closebtn = document.getElementsByClassName("close");
var i;
for (i = 0; i < closebtn.length; i++) {
  closebtn[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}




//ABOUT BUTTON SECTION//
function afiseazaAbout(event) {
  event.preventDefault();
  var container = document.getElementById("c8container");
  container.classList.toggle("hidden");
  container.scrollIntoView({ behavior: "smooth" }); // Scrolare automată la secțiunea "About"
}











                                                                                 //VALIDARI FORMULARE//

//VALIDARE COOKBOOK FORM//
function validateForm2() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("mail").value;

  if (name.trim() === "" || email.trim() === "") {
    alert("Please fill in all the fields!");
    return false;
  }

  if (name.length < 2 || name.length > 30) {
    alert("First name must be between 2 and 30 characters long!");
    return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return false;
  }

  return true;
}


//VALIDARE LOGIN//
function validateLoginForm() {
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
    return false;
  }
  if (password.length < 6 || password.length > 20) {
    alert("Password must be between 6 and 20 characters long!");
    return false;
  }

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return false;
  }

  return true;
}


//VALIDARE REGISTRATION FORM//
$(document).ready(function() {
  $("#agree-checkbox").change(function() {
    var isChecked = $(this).is(":checked");
    $("#register-button").prop("disabled", !isChecked);
  });

  $("#register-button").click(function() {
    var name = $("#register-name").val();
    var email = $("#register-email").val();
    var password = $("#register-password").val();
    var agreeCheckbox = $("#agree-checkbox").is(":checked");

    if (name === "" || email === "" || password === "") {
      alert("Please fill in all the fields!");
      return false;
    }

    if (name.length < 2 || name.length > 30) {
      alert("The name must be between 2 and 30 characters!");
      return false;
    }
    if (password.length < 6 || password.length > 20) {
      alert("Password must be between 6 and 20 characters long!");
      return false;
    }

    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return false;
    }

    alert("Registration successful!");
    return true;
  });
});


//VALIDARE SIGN-UP FORM//
function validateForm() {
  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;

  if (name === "" || email === "") {
      alert("Please fill in all the fields!");
      return false;
  }

  if (name.length < 2 || name.length > 30) {
      alert("Name must be between 2 and 30 characters!");
      return false;
  }

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return false;
  }

  showSuccess("Success! You have subscribed!");
  return true;
}

function showSuccess(message) {
  alert(message);
}


//VALIDARE MESSAGE FORM//
function validateForm() {
  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill in all the fields!");
    return false;
  }

  if (name.length < 2 || name.length > 30) {
    alert("Name must be between 2 and 30 characters!");
    return false;
  }

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return false;
  }

  showSuccess("Success! You have subscribed!");
  return true;
}

function showSuccess(message) {
  alert(message);
}











//TOP-BUTTON//
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollThreshold = 500; 

  if (window.scrollY > scrollThreshold) {
    document.getElementById("myButton").style.display = "block";
  } else {
    document.getElementById("myButton").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}














