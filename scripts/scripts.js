/**
 * Using scripts...
 */

const users = [
			{
				'username': 'oluade',
				'password': 'password'
			},

			{
				'username': 'vaughan',
				'password': 'password'
			},

			{
				'username': 'jeff',
				'password': 'password'
			}
	
	];



function loginUser(){

const username =document.getElementById('username_id').value;

const password = document.getElementById('password_id').value;

//cHECKING INPUTS
if(username.length < 3){
	alert("Please enter a valid username");
}else{
	users.forEach((user)=>{
	if(user['username'] == username){
		console.log("Yea..Continue");
	}
})
}



return false;


}

function openform(){
	document.getElementById("myform").styles.display ="block";
} 

function submit_form(){
	if (documnet.getElementById("firstname").value == strings;){
		alert("your details has been submited");
	} 
	else{
		alert("retype");
	}

		
	}




