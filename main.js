
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

