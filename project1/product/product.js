const pid = localStorage.getItem("pid");
console.log(pid);
const flag=localStorage.getItem("flag");
if(flag===0){
fetch(`http://localhost:8082/item/${pid}`, {
  method: "GET",
})
  .then((res) =>res.json())
  .then((data) =>{
    console.log(data);
    const img = document.getElementById("img_pr_main");
    img.setAttribute("src",data.img);

    const name=document.getElementById("med_title");
    name.innerText=data.name;

    const p1=document.getElementById("para_pr");
    p1.innerHTML=data.desc;

    const price=document.getElementById("med_price");
    price.innerText=data.price+"$";
  })
}else{
    fetch(`http://localhost:8082/packages/${pid}`, {
  method: "GET",
})
  .then((res) =>res.json())
  .then((data) =>{
    console.log(data.img);
    const img = document.getElementById("img_pr_main");
    img.setAttribute("src",data.img);

    const name=document.getElementById("med_title");
    name.innerText=data.name;

    const p1=document.getElementById("para_pr");
    p1.innerHTML=data.desc;

    const price=document.getElementById("med_price");
    price.innerText=data.price+"$";
  })
}