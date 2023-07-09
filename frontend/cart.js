const content=document.getElementById("cont");
const heading=document.getElementById("heading");
console.log(content);
console.log(heading);
// const title=document.getElementById("title");
// const price=document.getElementById("price");
const btn=document.getElementById("12345");
console.log(btn.id);

// btn1.addEventListener("click",function(){
//     const dataobj1={
//         title:title.value,
//         img1:img1.value,
//     };
    
//     const med1=document.createElement("div");
//     med1.append(dataobj1);
//     content.append(med1);
//     window.location.href="./cart.html";
// });
btn.addEventListener("click",()=>{
    fetch("http://localhost:8085/list",{
        method:"GET",
        
    })
    .then((res)=>res.json())
    .then((data)=>{
        alert("inserted into cart");
        const add_cart=data.filter((item)=>item.id_no==btn.id);
        console.log(add_cart);
        {
            add_cart.map((el)=>{
                const div=document.createElement("div");
                const name=document.createElement("h4");
                name.innerText=el.title;
                console.log(name);
                const pr=document.createElement("h4");
                pr.innerText=el.price;
                div.append(name,pr);
                console.log(div);
                content.append(div);
                console.log(content);
                alert("Added to Cart");

            })
        }
    });
});
