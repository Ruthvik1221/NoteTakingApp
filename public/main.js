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
  constructor(userName,password,firstName,lastName) {
    this.userName = userName;
    this.password = password;
    this.firstName = firstName;
    this.lastName= lastName;
  }

  getUsername() {
    return this.userName;
  }
  getPassword(){
    return this.password;
  }
}

// register functionality
let regForm = document.getElementById("registerpage");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  let userFname = document.getElementById("firstname").value;
  let userLname = document.getElementById("lastname").value;
  let password = document.getElementById("password").value;
  let user = new User(userName,password, userFname, userLname);
  //console.log(user)
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
    setCurrentUser(data);
    alert("Successfully logged-in")
    window.location.href = "note.html";
  })
  .catch((err) => {
    console.log(`Error!!! ${err.message}`)
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
if(note) note.addEventListener("submit",notePageFunction)
function notePageFunction(e){
  e.preventDefault();
  let noted= document.getElementById("note").value;
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
let notedata =document.getElementById("note");
fetchData("/notes/getNotes",user,"POST")
.then((data)=>{
  console.log(data);
  for(let i=0;i<data.length;i++){
    notedata.value=data[i].noteContent;
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