const search = localStorage.getItem("search");
// const gr = document.getElementById("g_sr");
const gr = document.createElement("div");
gr.className = "g_sr";

fetch(`http://localhost:8082/item`, {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const nitem = data.filter((item) => item.name === search);
    console.log(nitem);
    {
      nitem.map((el) => {
        const pr = document.createElement("div");
        const img_sr = document.createElement("div");
        const name = document.createElement("h2");
        const img = document.createElement("img");
        const price = document.createElement("h4");
        const kmb = document.createElement("button");
        name.innerText = el.name;
        price.innerText = el.price+"$";
        img.setAttribute("src", el.img);
        // console.log(JSON.stringify(el.img));
        // console.log(name);
        // console.log(img);
        // console.log(price);
        img_sr.id = "img_sr";
        img.id = "img_rs";
        name.id = "titel";
        price.id = "price";
        pr.id = "p_sr";
        kmb.id = "km_sr";
        kmb.innerText = "Know More";
        img_sr.append(img);
        pr.append(img_sr, name, price, kmb);
        console.log(pr);
        gr.append(pr);
        console.log(gr);

        kmb.addEventListener("click", () => {
          console.log(el.id);
          localStorage.setItem("pid", el.id);
          window.location.href = "../product/product.html";
          localStorage.setItem("flag", 0);
        });
      });
    }
  });
document.body.appendChild(gr);
