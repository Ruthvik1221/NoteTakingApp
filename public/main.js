async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${route}`, {
    method: methodType, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if(response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
}

// user class
class User {
  constructor(userName,firstname,lastname,password) {
    this.userName = userName;
    this.firstName = firstname;
    this.lastName=lastname,
    this.password = password;
  }

  getUsername() {
    return this.userName;
  }
}


// login functionality
let loginForm = document.getElementById("loginpage");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let user = new User(userName,password);
//console.log(user)
  fetchData("/users/login", user, "POST")
  .then((data) => {
    setCurrentUser(data9f);
    window.location.href = "note.html";
  })
  .catch((err) => {
    console.log(`Error!!! ${err.message}`)
  }) 
}
 
// register functionality
let regForm = document.getElementById("registerpage");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  let userName = document.getElementById("uname").value;
  let userFname = document.getElementById("fname").value;
  let userLname = document.getElementById("lname").value;
  let password = document.getElementById("psw").value;
  let user = new User(userName, userFname, userLname, password);
  console.log(user)
  fetchData("/users/register", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    alert("registration success")
    window.location.href = "note.html";
  })
  .catch((err) =>{
    console.log(err);
  })
}
//Note Functionality
class Note{
  constructor(noteContent) {
    this.noteContent = noteContent;
  }
  getNotes() {
    return this.noteContent;
  }
}
let user=getCurrentUser();
let note = document.getElementById("notepage");
if(note) note.addEventListener('submit',notePageFunction)
function notePageFunction(e){
  e.preventDefault();
  let noted= document.getElementById('note').value;
  const note = new Note(noted);
  note.userID = user.userID;
  fetchData("/notes/create", note, "POST")
  .then((data) => {
    //setCurrentUser(data);
    alert("note added")
    window.location.href = "note.html";
  })
  .catch((err) =>{
    console.log(err);
  })
document.getElementById("notepage").reset();
}
if(user&&note) getallnotes();

function getallnotes(){
let notedata =document.getElementById('note');
fetchData("/notes/getNote",user,"POST")
.then((data)=>{
  console.log(data);
  for(let i=0;i<data.length;i++){
    notedata.value+=data[i].noteContent;
  }
})
}
// logout event listener
let logout = document.getElementById("logout-btn");
if(logout) logout.addEventListener('click', removeCurrentUser)

// stateful mechanism for user
// logging in a user
function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}
// getting current user function
// FIX this next class
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}
// logout function for current user
function removeCurrentUser() {
  localStorage.removeItem('user');
  window.location.href="login.html";
}

//  module.exports = {getAllNotes};
/*
// Fetch method implementation:
export async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${route}`, {
    method: methodType, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if(response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
} 

// logout event listener
let logout = document.getElementById("logout-btn");
if(logout) logout.addEventListener('click', removeCurrentUser)

// stateful mechanism for user
// logging in a user
export function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

// getting current user function
export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

// logout function for current user
export function removeCurrentUser() {
  localStorage.removeItem('user');
  window.location.href = "login.html";
}

export function setCurrentNote(note) {
  localStorage.setItem('note', JSON.stringify(note));
}

// getting current note function
export function getCurrentNote() {
  return JSON.parse(localStorage.getItem('note'));
}
*/

/*
let ptn=document.getElementById("btn")
if(ptn) ptn.addEventListener('click', getUsersList)

function getUsersList()
{
    fetch("http://localhost:3000/users/")
    .then((res)=> res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}

class king
{
    constructor(fname,lname,email,password)
    {

    this.FirstName=fname;
    this.LastName=lname;
    this.username=email;
    this.password=password;

    }
    getfirstname(){
        return this.FirstName;
    
    }
    getlastname(){
        return this.LastName;
    }
    getusername(){
        return this.username;

    }
    getpassword()
    {
        return this.password;

    }
    getPassword()
    {
        return this.Password;


    }
    /*
    getNts()
    
    {
        return this.Nts;
    }
    */
  /*
    setfirstname(fname){
        this.FN=FName1;
    }
    setlastname(lname){
        this.LN=LName1;
    }
    setusername(email){
        this.email=Email;

    }
    setpassword(password){
        this.pd=PWD;
    }
    

}
let login= document.getElementById("loginpage");
if(login) login.addEventListener('submit',loginuser)

function loginuser(e){
 e.preventDefault();
 let username=document.getElementById("username").value;
 let password=document.getElementById("password").value;

 let luser=new king(username,password);
 console.log(`${username}`);
 console.log(`${password}`);
 login.reset();

}

let Register=document.getElementById("registerpage");
if(Register) Register.addEventListener('submit',reguser)

function reguser(r){
    r.preventDefault();
    let f_name= document.getElementById("fname").value;
    let l_name=document.getElementById("lname").value;
    let username=document.getElementById("uname").value;
    let password=document.getElementById("psw").value;
    
    let userregistration= new king(f_name,l_name,username,password);
    console.log(`${f_name}`);
    console.log(`${l_name}`);
    console.log(`${username}`);
    console.log(`${password}`);  
    Register.reset();
    
}

let notes= document.getElementById("notepage");
if(notes) notes.addEventListener('submit',Notespage)

function Notespage(b){
    b.preventDefault();
    let Notepage= document.getElementById("notes").value;
    let usernotes= new king(Notepage);
    console.log(`${Notepage}`);
    notes.reset();

}
*/
/*
const registerpage = document.getElementById("registerpage");
if(registerpage) registerpage.addEventListner('submit',register);

function register(e) {
    e.preventDefault();

    const name = document.getElementById()
}
*/
