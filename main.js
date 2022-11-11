/*
const login = document.getElementById("loginpage");
if(login) login.addEventListener('submit',loginpageFunction)
const register = document.getElementById("registerpage");
if(register) register.addEventListener('submit',registerpageFunction)
const note = document.getElementById("notepage")
if(note) note.addEventListener('submit',notepageFunction)

function loginpageFunction(e)
{
    e.preventDefault();
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;


    class User{
        constructor(username,password)
        {
            this.username=username;
            this.password=password;
        }
    
    
    
    getuname(){
        return this.username;
    }
    setuname(newusername){
        this.username = username;
    }
    getpword(){
        return this.password;
    }
    setpword(newpassword){
        this.password = password
    }

    }

    const Userl=new User(username,password);
    console.log(Userl);


}


function registerpageFunction(e)
{
    e.preventDefault()
    let fname=document.getElementById('fname').value;
    let lname=document.getElementById('lname').value;
    let email=document.getElementById('uname').value;
    let password=document.getElementById('psw').value;

    class User{
        constructor(fname,lname,email,password)
        {
            this.firstname=fname;
            this.lastname=lname;
            this.email=email;
            this.password=password;
        }
        getemail(){
            return this.email;
        }
        setemail(newemail){
            this.email = newemail;
        }
        getpassword(){
            return this.password;
        }
        setpassword(newpassword){
            this.password=newpassword
        }
        getfirstname(){
            return this.firstname;
        }
        setfirstname(newfirstname){
            this.firstname = newfirstname;
        }
        getlastname(){
            return this.lastname;
        }
        setlastname(newlastname){
            this.lastname=newlastname;
        }
    }

    const user1=new User(fname,lname,email,password);
    console.log(user1);
}


function notepageFunction(e)
{
    e.preventDefault();
    let note=document.getElementById('notes').value;

    class User{
        constructor(note)
        {
            this.notes=note;
        }
    
    
    gettnotes(){
        return this.tnotes;
    }
    settnotes(note){
        this.notes = note;
    }
   

    }

    const Userl=new User(note);
    console.log(Userl);

}

*/


class king
{
    constructor(fname,lname,email,password)
    {

    this.FN=fname;
    this.LN=lname;
    this.email=email;
    this.PWD=password;

    }
    getFN(){
        return this.FN;
    
    }
    getLN(){
        return this.LN;
    }
    getemail(){
        return this.email;

    }
    getPWD()
    {
        return this.PWD;

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
    setFN(fname){
        this.FN=FName1;
    }
    setLN(lname){
        this.LN=LName1;
    }
    setemail(email){
        this.email=Email;

    }
    setPWD(password){
        this.pd=PWD;
    }
    

}
let create= document.getElementById("loginpage");
if(create) create.addEventListener('submit',login)

function login(e){
 e.preventDefault();
 let em1=document.getElementById("username").value;
 let pwd=document.getElementById("password").value;

 let luser=new king(em1,pwd);
 console.log(`${em1}`);
 console.log(`${pwd}`);
 create.reset();

}

let Reg=document.getElementById("registerpage");
if(Reg) Reg.addEventListener('submit',breg)

function breg(r){
    r.preventDefault();
    let FU1= document.getElementById("fname").value;
    let Lr=document.getElementById("lname").value;
    let eml1=document.getElementById("uname").value;
    let pwd=document.getElementById("psw").value;
    
    let regi= new king(FU1,Lr,eml1,pwd);
    console.log(`${FU1}`);
    console.log(`${Lr}`);
    console.log(`${eml1}`);
    console.log(`${pwd}`);  
    Reg.reset();
    
}

let UserN= document.getElementById("notepage");
if(UserN) UserN.addEventListener('submit',page)

function page(b){
    b.preventDefault();
    let Notepage= document.getElementById("notes").value;
    let usr= new king(Notepage);
    console.log(`${Notepage}`);
    UserN.reset();

}
