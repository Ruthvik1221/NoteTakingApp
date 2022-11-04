/*
class Test{
	function User(firstname,lastname,username,password)
	{
		this.fname=firstname;
		this.lname=lastname;
		this.u_name=username;
		this.pwd=password;
	}

	User.prototype.getFname = function()
	{
		return '${this.fname}'
	}

	User.prototype.getLname = function()
	{
		return '${this.lname}'
	}

	User.prototype.getUname = function()
	{
		return '${this.u_name}'
	}

	User.prototype.getPassword = function()
	{
		return '${this.pwd}'
	}

	User.prototype.setFname = function()
	{
		this.fname=firstname;
	}

	User.prototype.setLname = function()
	{
		this.lname= lastname;
	}
	User.prototype.setUname = function()
	{
		this.u_name= username;
	}
	User.prototype.setPassword = function()
	{
		this.pwd= password;
	}

}

const User = new User;
console.log(User.getFname());
*/

const login = document.getElementById("loginpage");
if(login) login.addEventListener('submit',displayLogin);

function displayLogin(e)
{
	e.preventDefault();
	let username = document.getElementById("uname").value;
	let password = document.getElementById("psw").value;
	console.log(`Username = ${username}`);
	console.log(`Password = ${password}`);
}

const register = document.getElementById("registerpage");
if(register) register.addEventListener('submit',displayRegister);

function displayRegister(e)
{
	e.preventDefault();
	let firstname = document.getElementById("fname").value;
	let lastname = document.getElementById("lname").value;
	let username = document.getElementById("uname").value;
	let password = document.getElementById("psw").value;
	console.log(`Firstname = ${firstname}`);
	console.log(`Lastname = ${lastname}`);
	console.log(`Username = ${username}`);
	console.log(`Password = ${password}`);
} 

const note = document.getElementById("notepage");
if(note) note.addEventListener('submit',displayNote);

function displayNote(e)
{
	e.preventDefault();
	var textarea = document.getElementById("notes").value;
	console.log(`Notes = ${textarea}`);
} 