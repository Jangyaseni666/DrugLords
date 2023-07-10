const token_id = localStorage.getItem("token");
const id=localStorage.getItem("id");
console.log(token_id);
if (token_id === null) {
  window.location.href = "../signup/signup.html";
}

fetch(`http://localhost:8082/users/${id}`,{
    methode :"GET",
}).then((res)=>res.json())
.then((data)=>{
    console.log(JSON.stringify(data.email));
    const pfp=document.getElementById("pfp");
    pfp.setAttribute("src",data.pfp)
    const uname=document.getElementById("user-name");
    uname.innerText=data.name;
    const uemail=document.getElementById("user-email");
    uemail.innerText=data.email;
    
    const uname_pi=document.getElementById("user-name_pi");
    uname_pi.setAttribute("value",data.name);

    const uemail_pi=document.getElementById("user-email_pi");
    uemail_pi.setAttribute("value",data.email);

    const umob_pi=document.getElementById("user-mob_pi");
    umob_pi.setAttribute("value",data.mob);
})

const saveb=document.getElementById("save_pi");
saveb.addEventListener("click",()=>{
    const uname_pi=document.getElementById("user-name_pi");
    const uemail_pi=document.getElementById("user-email_pi");
    const umob_pi=document.getElementById("user-mob_pi");

    console.log(JSON.stringify({ name: uname_pi.value, email: uemail_pi.value, mob: umob_pi.value }));
    if(uname_pi.value!=="" && uemail_pi.value!=="" && umob_pi.value!==""){
        fetch(`http://localhost:8082/users/${id}`,{
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name: uname_pi.value, email: uemail_pi.value, mob: umob_pi.value }),
        }).then((res)=>{
            alert("Updated");
        })
    }
})