
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
