// Form Regis Validation
function Validation(){
	var dynamicText;
	var username = document.getElementById("txtUsername").value
	var password = document.getElementById("txtPassword").value;
	var confirmPassword = document.getElementById("txtConfirmPassword").value;
	var phoneNumber = document.getElementById("txtPhone").value;
	var email = document.getElementById("txtEmail").value;	
	var address = document.getElementById("txtAddress").value;
	var maleGender = document.getElementById("msex").value;
	var femaleGender = document.getElementById("fsex").value;
	if(username == ""){
		document.getElementById("errorPW").innerHTML = "";
		document.getElementById("errorPWConfirm").innerHTML = "";
		document.getElementById("errorEmail").innerHTML = "";
		document.getElementById("errorPhone").innerHTML = "";	

		dynamicText = "Username must be filled!";
		document.getElementById("errorUsername").innerHTML = dynamicText;	
	}
	else if(password == ""){
		document.getElementById("errorUsername").innerHTML = "";
		document.getElementById("errorPWConfirm").innerHTML = "";
		document.getElementById("errorEmail").innerHTML = "";
		document.getElementById("errorPhone").innerHTML = "";	
		
		dynamicText = "Password must be filled!";
		document.getElementById("errorPW").innerHTML = dynamicText;
	}
	else if(confirmPassword == ""){
		document.getElementById("errorUsername").innerHTML = "";
		document.getElementById("errorPW").innerHTML = "";
		document.getElementById("errorEmail").innerHTML = "";
		document.getElementById("errorPhone").innerHTML = "";	

		dynamicText = "";
		document.getElementById("errorPW").innerHTML = dynamicText;
		dynamicText = "Please confirm your password!";
		document.getElementById("errorPWConfirm").innerHTML = dynamicText;
		
	}
	else if(confirmPassword != "" && password != confirmPassword){
		document.getElementById("errorUsername").innerHTML = "";
		document.getElementById("errorPW").innerHTML = "";
		document.getElementById("errorEmail").innerHTML = "";
		document.getElementById("errorPhone").innerHTML = "";	

	 	dynamicText = "Password does not match!";
	 	document.getElementById("errorPWConfirm").innerHTML = dynamicText;
	 	document.getElementById("txtPassword").value = "";
		document.getElementById("txtConfirmPassword").value = "";
	}
	else if(email == ""){
		document.getElementById("errorUsername").innerHTML = "";
		document.getElementById("errorPW").innerHTML = "";
		document.getElementById("errorPWConfirm").innerHTML = "";
		document.getElementById("errorPhone").innerHTML = "";

		dynamicText = "Email must be filled!";
		document.getElementById("errorEmail").innerHTML = dynamicText;
	}
	else if(!email.includes("@") || !email.includes(".")
	    || !email.endsWith(".com") || email.startsWith(".com")
	    || email.endsWith(".") || email.startsWith(".")
	    || email.endsWith("@") || email.startsWith("@")
	    || email.indexOf("@") != email.lastIndexOf("@")
	    || email.indexOf("@") + 1 == email.indexOf(".")
	    || email.indexOf("@") - 1 == email.indexOf(".")
	    || email.includes("..")){
		document.getElementById("errorUsername").innerHTML = "";
		document.getElementById("errorPW").innerHTML = "";
		document.getElementById("errorPWConfirm").innerHTML = "";
		document.getElementById("errorPhone").innerHTML = "";
	 	dynamicText = "Invalid email format!"
	 	document.getElementById("errorEmail").innerHTML = dynamicText;
	 	document.getElementById("txtEmail").value = "";
	}
	else if(phoneNumber == ""){
		document.getElementById("errorUsername").innerHTML = "";
		document.getElementById("errorPW").innerHTML = "";
		document.getElementById("errorPWConfirm").innerHTML = "";
		document.getElementById("errorEmail").innerHTML = "";

		dynamicText = "Phone must be filled";
		document.getElementById("errorPhone").innerHTML = dynamicText;
	}
	else if(isNaN(phoneNumber)){
		document.getElementById("errorUsername").innerHTML = "";
		document.getElementById("errorPW").innerHTML = "";
		document.getElementById("errorPWConfirm").innerHTML = "";
		document.getElementById("errorEmail").innerHTML = "";

		dynamicText = "Phone must be in Numeric Expression!"
	 	document.getElementById("errorPhone").innerHTML = dynamicText;
	 	document.getElementById("txtPhone").value = "";
	}
	else if(phoneNumber.startsWith("08") == false){
		document.getElementById("errorUsername").innerHTML = "";
		document.getElementById("errorPW").innerHTML = "";
		document.getElementById("errorPWConfirm").innerHTML = "";
		document.getElementById("errorEmail").innerHTML = "";

 		dynamicText = "Phone number must be started with '08'";
	 	document.getElementById("errorPhone").innerHTML = dynamicText;
	 	document.getElementById("txtPhone").value ="";
	}
	else if(phoneNumber.length < 11 || phoneNumber.length > 13){
		document.getElementById("errorUsername").innerHTML = "";
		document.getElementById("errorPW").innerHTML = "";
		document.getElementById("errorPWConfirm").innerHTML = "";
		document.getElementById("errorEmail").innerHTML = "";

	 	dynamicText = "Phone number length must be more than 11 and less than 13 number!";
	 	document.getElementById("errorPhone").innerHTML = dynamicText;
	 	document.getElementById("txtPhone").value ="";
	}
	else if(address == ""){
		document.getElementById("errorUsername").innerHTML = "";
		document.getElementById("errorPW").innerHTML = "";
		document.getElementById("errorPWConfirm").innerHTML = "";
		document.getElementById("errorEmail").innerHTML = "";
		document.getElementById("errorPhone").innerHTML = "";

		dynamicText = "Address must be filled!";
		document.getElementById("errorAddress").innerHTML = dynamicText;
	}
	else if(!address.startsWith("Jalan"))
	{
		document.getElementById("errorUsername").innerHTML = "";
		document.getElementById("errorPW").innerHTML = "";
		document.getElementById("errorPWConfirm").innerHTML = "";
		document.getElementById("errorEmail").innerHTML = "";
		document.getElementById("errorPhone").innerHTML = "";

		dynamicText = "Address format must be started with Jalan!";
		document.getElementById("errorAddress").innerHTML = dynamicText;
		document.getElementById("txtAddress").value = "";
	}
	else if(document.regis.choose.value == "0")
	{
		document.getElementById("errorUsername").innerHTML = "";
		document.getElementById("errorPW").innerHTML = "";
		document.getElementById("errorPWConfirm").innerHTML = "";
		document.getElementById("errorEmail").innerHTML = "";
		document.getElementById("errorPhone").innerHTML = "";

		dynamicText = "Please select your Country!";
		document.getElementById("errorCombo").innerHTML = dynamicText;
		regis.choose.focus();
	}
	else  
	{  
		alert('Form Successfully Submitted');  
		window.location.reload()  
		return true;
	} 

}
