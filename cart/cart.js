var cont = document.querySelector("#cont1");
const heading = document.getElementById("heading");
const id = localStorage.getItem("id");
const tokken = localStorage.getItem("token");
console.log(tokken);
localStorage.setItem("state",0);

if (tokken === null) {
  window.location.href = "../signin/signin.html";
}

var q = 0;
var p = 0;
var c = 0;
var qobj = [];
var pobj = [];
//document.getElementById("three").style.display = 'none';
const qt = document.getElementById("quantity");
const price = document.getElementById("price");

fetch(`http://localhost:8082/cart-items`, {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data.length);
    if (data.length === 0) {
      const h1 = document.createElement("h1");
      h1.innerText = "Empty Cart! ";
      const div = document.createElement("div");
      div.append(h1);
      cont.appendChild(div);
      document.getElementById("three").style.display = "none";
    } else {
      console.log(data);
      const arr = data.filter(
        (item) => item.user === id && item.inCart === true
      );
      if (arr.length === 0) {
        console.log("here");
        const h1 = document.createElement("h1");
        h1.innerText = "Empty Cart! ";
        const div = document.createElement("div");
        console.log(h1);
        div.append(h1);
        console.log(div);
        cont.appendChild(div);
        document.getElementById("three").style.display = "none";
      } else {
        console.log(id);
        arr.map((el) => {
          const div = document.createElement("div");
          div.id = "cart";
          const name = document.createElement("h4");
          name.innerText = el.name;
          console.log(name);
          const pr = document.createElement("h4");
          pr.innerText = "$ " + el.price;
          const quantity = document.createElement("div");
          const labelqty = document.createElement("label");
          labelqty.innerText = "Qty: ";
          const qty = document.createElement("input");
          qty.setAttribute("type", "number");
          qty.setAttribute("value", el.qty);
          quantity.append(labelqty, qty);
          div.append(name, quantity, pr);
          cont.appendChild(div);
          console.log(cont);
          //alert("Added to Cart");
          q += parseInt(qty.value);
          qobj[el.pid] = q;
          p += parseInt(el.price * qty.value);
          pobj[el.pid] = p;
          qty.oninput = () => {
            q += parseInt(qty.value) - q;
            qobj[el.pid] = q;
            p += parseInt(el.price * qty.value) - p;
            pobj[el.pid] = p;
            var qsum = 0;
            qobj.forEach((el) => {
              qsum += Number(el);
            });
            var psum = 0;
            pobj.forEach((el) => {
              psum += Number(el);
            });
            qt.value = qsum;
            price.value = psum;
          };
          c += 1;
          p = 0;
          q = 0;
        });
      }
    }
    var qsum = 0;
    qobj.forEach((el) => {
      qsum += Number(el);
    });
    var psum = 0;
    pobj.forEach((el) => {
      psum += Number(el);
    });
    qt.value = qsum;
    price.value = psum;
  });

const rec = document.getElementById("receipt");
const buy = document.getElementById("buy");
const Total = document.createElement("p");
const tprice = document.createElement("span");
const del = document.createElement("p");
const dprice = document.createElement("span");
const pay = document.getElementById("pay");

buy.addEventListener("click", () => {
  Total.innerText = "Total: ";
  tprice.innerText = "$" + price.value;
  del.innerText = "Delivery Charges: ";
  dprice.innerText = "$5";
  rec.append(Total, tprice, del, dprice);
  console.log(rec);
  pay.innerText = "Pay $" + (parseInt(price.value) + 5);
});

var qtot = [];
pay.addEventListener("click", () => {
  fetch(`http://localhost:8082/cart-items`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      const arr = data.filter((el) => el.user === id);
      var c = -1;
      console.log(qobj.length);
      for (var i = 0; i < qobj.length; i++) {
        if (qobj[i] != undefined) {
          qtot.push(qobj[i]);
        }
      }
      console.log("qtot: " + qtot);
      const arr1=arr.filter((ele) => ele.user == id && ele.inCart == true);
      console.log(arr1);
      arr1.map((el) => {
        c = c + 1;
        console.log("c: " + qtot[c]);
        fetch(`http://localhost:8082/cart-items/${el.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inCart: false, qty: qtot[c] }),
        }).then((res) => {
          window.location.href = "../index/index.html";
        });
      });
      alert("Payment Successful!!");
    });
});
