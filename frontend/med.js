const title=document.getElementById("title");
const price=document.getElementById("price");
const id_no=document.getElementById("id_no");
const button=document.getElementById("button");

button.addEventListener("click",()=>{
    const dataobj={
        title:title.value,
        price:price.value,
        id_no:id_no.value,
    }
    fetch(`http://localhost:8085/list`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(dataobj)
    })
    .then((res)=>res.JSON())
    .then((data)=>{
        alert("data updated");
    })
})
