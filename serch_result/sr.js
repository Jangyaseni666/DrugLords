const search = localStorage.getItem("search");
// const gr = document.getElementById("g_sr");
const gr = document.createElement("div");
gr.className = "g_sr";
const ft=`<br />
<h1
  class="text"
  style="letter-spacing: 4px; color: green; padding-left: 2%"
>
  DRUG-STORE
</h1>
<p style="color: black; padding-left: 2%">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
  provident.
</p>
<div class="footer_div">
  <div class="col">
    <h5 class="text text-uppercase mb-4">Company</h5>
    <p>About netmeds</p>
    <p>Customer speaks</p>
    <p>In the news</p>
    <p>Career</p>
    <p>Contact</p>
  </div>
  <div class="col">
    <h5 class="text text-uppercase mb-4">Our policies</h5>
    <p>Terms & Conditions</p>
    <p>Privacy policy</p>
    <p>Fees and payment policy</p>
    <p>Shipping and delivery policy</p>
    <p>Return/Refund policy</p>
  </div>
  <div class="col">
    <h5 class="text text-uppercase mb-4">Company</h5>
    <p>About netmeds</p>
    <p>Customer speaks</p>
    <p>In the news</p>
    <p>Career</p>
    <p>Contact</p>
  </div>
  <div class="col">
    <h5 class="text text-uppercase mb-4">Our policies</h5>
    <p>Terms & Conditions</p>
    <p>Privacy policy</p>
    <p>Fees and payment policy</p>
    <p>Shipping and delivery policy</p>
    <p>Return/Refund policy</p>
  </div>
</div>`;

const footer=document.createElement("footer");
footer.innerHTML=ft;

fetch(`http://localhost:8082/item`, {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const nitem = data.filter((item) => item.name.includes(search));
    console.log(nitem);
    if(nitem.length>0)
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
    }else{
      const srtitel=document.getElementById("sr");
      console.log(srtitel);
      srtitel.innerText="No items found";
    }
  });
document.body.appendChild(gr);
document.body.appendChild(footer);
