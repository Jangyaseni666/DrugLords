localStorage.setItem("state",0);

fetch("http://localhost:8082/packages", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    data.map((el) => {
    //   console.log(JSON.stringify(el.id));
    //   console.log(JSON.stringify(el.desc));
      const pack = document.getElementById("package" + JSON.stringify(el.id));
      const img = pack.getElementsByTagName("img")[0];
      const p = pack.getElementsByTagName("p")[0];

      img.setAttribute("src", el.img);
      p.innerHTML = JSON.stringify(el.desc);
    });
  });

const km_b1=document.getElementById("1");
const km_b2=document.getElementById("2");
const km_b3=document.getElementById("3");
const km_b4=document.getElementById("4");

km_b1.addEventListener("click",()=>{
    console.log(1);
    localStorage.setItem("pid", 1);
    window.location.href = "../product/product.html";
    localStorage.setItem("flag", 1);
})
km_b2.addEventListener("click",()=>{
    console.log(2);
    localStorage.setItem("pid", 2);
    window.location.href = "../product/product.html";
    localStorage.setItem("flag", 1);
})
km_b3.addEventListener("click",()=>{
    console.log(3);
    localStorage.setItem("pid", 3);
    window.location.href = "../product/product.html";
    localStorage.setItem("flag", 1);
})
km_b4.addEventListener("click",()=>{
    console.log(4);
    localStorage.setItem("pid", 4);
    window.location.href = "../product/product.html";
    localStorage.setItem("flag", 1);
})