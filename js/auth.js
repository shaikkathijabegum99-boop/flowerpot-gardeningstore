
document.addEventListener("DOMContentLoaded",()=>{
   
    if(window.lucide){
        lucide.createIcons();
    }
   
    const themeBtn=document.getElementById("theme-btn");
    if(themeBtn){
        themeBtn.addEventListener("click",()=>{
            const html=document.documentElement;
            const current=
            html.getAttribute("data-theme");
            if(current==="dark"){
                html.setAttribute(
                    "data-theme",
                    "light"
                );
            }else{
                html.setAttribute(
                    "data-theme",
                    "dark"
                );
            }
            themeBtn.innerHTML =
            html.getAttribute("data-theme")==="dark"
            ?
            '<i data-lucide="sun"></i>'
            :
            '<i data-lucide="moon"></i>';
            lucide.createIcons();
        });
    }
  
    const rtlBtn=document.getElementById("rtl-btn");
    if(rtlBtn){
        rtlBtn.addEventListener("click",()=>{
            const html=document.documentElement;
            const direction=
            html.getAttribute("dir");
            if(direction==="rtl"){
                html.setAttribute(
                    "dir",
                    "ltr"
                );
                rtlBtn.innerHTML=
                '<i data-lucide="arrow-left-right"></i>';
            }else{
                html.setAttribute(
                    "dir",
                    "rtl"
                );
                rtlBtn.innerHTML=
                '<i data-lucide="arrow-left-right"></i>';
            }
            lucide.createIcons();
        });
    }
});

function togglePw(id,button){
    const input=document.getElementById(id);
    const icon=button.querySelector("i");
    if(input.type==="password"){
        input.type="text";
        button.innerHTML=
        '<i data-lucide="eye-off"></i>';
    }
    else{
        input.type="password";
        button.innerHTML=
        '<i data-lucide="eye"></i>';
    }
    lucide.createIcons();
}

let currentStep=0;
function nextStep(step){
    if(!validateStep(step)){
        return;
    }
    document
    .getElementById("s"+step)
    ?.classList.remove("on");
    currentStep=step+1;
    document
    .getElementById("s"+currentStep)
    ?.classList.add("on");
}
function prevStep(step){
    document
    .getElementById("s"+step)
    ?.classList.remove("on");
    currentStep=step-1;
    document
    .getElementById("s"+currentStep)
    ?.classList.add("on");
}

function validateStep(step){
    const msg=
    document.getElementById("auth-msg");
    if(!msg)
    return true;
    msg.className="auth-msg";
    if(step===0){
        const fields=[
            "fname",
            "lname",
            "email",
            "phone"
        ];
        for(let id of fields){
            const el=
            document.getElementById(id);
            if(el && !el.value.trim()){
                showError(
                "Please complete all details."
                );
                el.focus();
                return false;
            }
        }
    }
    if(step===1){
        const pass=
        document.getElementById("password").value;
        const confirm=
        document.getElementById("cpw").value;
        if(pass.length<6){
            showError(
            "Password must contain minimum 6 characters."
            );
            return false;
        }
        if(pass!==confirm){
            showError(
            "Passwords do not match."
            );
            return false;
        }
        if(
        !document.getElementById("terms").checked
        ){
            showError(
            "Please accept terms and privacy policy."
            );
            return false;
        }
    }
    return true;
}
function showError(text){
    const msg=
    document.getElementById("auth-msg");
    if(msg){
        msg.textContent=text;
        msg.className=
        "auth-msg error";
    }
}

document.addEventListener(
"input",
function(e){
if(e.target.id==="password"){
const value=e.target.value;
const fill=
document.querySelector(".pw-fill");
const label=
document.querySelector(".pw-lbl");
let width="0%";
let text="Weak";
if(value.length>=6){
width="40%";
text="Medium";
}
if(value.length>=10){
width="80%";
text="Strong";
}
if(value.match(/[A-Z]/) &&
value.match(/[0-9]/)){
width="100%";
text="Excellent";
}
if(fill){
fill.style.width=width;
}
if(label){
label.textContent=text;
}
}
});

function toggleOcc(el){
el.classList.toggle("on");
const input=
el.querySelector("input");
if(input){
input.checked=
!input.checked;
}
}

function handleSignup(){
const success=
document.getElementById("success");
document
.querySelectorAll(".step")
.forEach(step=>{
step.classList.remove("on");
});
if(success){
success.classList.add("show");
}
lucide.createIcons();
}

function handleLogin(){
const email=
document.getElementById("email").value;
const password=
document.getElementById("password").value;
const msg=
document.getElementById("auth-msg");
if(!email || !password){
msg.textContent=
"Please enter email and password.";
msg.className=
"auth-msg error";
return;
}
window.location.href=
"../dashboard.html";
}