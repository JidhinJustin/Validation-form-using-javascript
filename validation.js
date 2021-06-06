function validateForm(e) {
	e.preventDefault();

	var regName = /^[a-zA-Z]+[a-zA-Z]+$/;
    var regEmail = /^\S+@\S+$/;
    var regPass = /^[a-zA-Z]\w{7,10}$/;
    var regPhone = /\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;
   


	var name=document.getElementById("name").value.trim();
	var e_mail =document.getElementById("email").value.toLowerCase().trim();
	var pass_word = document.getElementById("password").value.trim();
	var confirm_pass = document.getElementById("confirm-password").value.trim();
	var phone = document.getElementById("phone").value.trim();

	if(!regName.test(name)) {
		document.getElementById("nameErr").innerHTML = "Please enter a valid first and last name.";
		document.getElementById("name").focus();
	}
	if(!regEmail.test(e_mail)) {
		document.getElementById("emailErr").innerHTML = "Please enter a valid email ID";
		document.getElementById("email").focus();
	}
	if(!regPass.test(pass_word)) {
		document.getElementById("passErr").innerHTML = "Please enter a valid password";
		document.getElementById("password").focus();
	}
	if(pass_word != confirm_pass) {
		document.getElementById("confirmPassErr").innerHTML = "Please recheck your confirmed password";
		document.getElementById("confirm-password").focus();
	}
	if(!regPhone.test(phone)) {
		document.getElementById("phoneErr").innerHTML = "Please enter the number in XX XXXXX XXXXX format.";
		document.getElementById("phone").focus();
	}

}


