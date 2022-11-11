
class king
{
    constructor(fname,lname,email,password)
    {

    this.FN=fname;
    this.LN=lname;
    this.email=email;
    this.PWD=password;

    }
    getfirstname(){
        return this.FN;
    
    }
    getlastname(){
        return this.LN;
    }
    getusername(){
        return this.email;

    }
    getpassword()
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

function page(b){
    b.preventDefault();
    let Notepage= document.getElementById("notes").value;
    let usernotes= new king(Notepage);
    console.log(`${Notepage}`);
    notes.reset();

}
