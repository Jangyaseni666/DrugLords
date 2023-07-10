const btn = document.getElementById("add_pr");
const tokken = localStorage.getItem("token");
console.log(tokken);

if (tokken === null) {
  window.location.href = "../signin/signin.html";
}

var qty = 0;
var f = 0;
btn.addEventListener("click", () => {
  if (flag == 0) {
    fetch("http://localhost:8082/item", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const pid = JSON.parse(localStorage.getItem("pid"));
        console.log(pid);
        var addC = data.find((el) => el.id === pid);
        addC.user = localStorage.getItem("id");

        Object.defineProperty(
          addC,
          "pid",
          Object.getOwnPropertyDescriptor(addC, "id")
        );
        delete addC["id"];
        console.log(JSON.stringify(addC));

        fetch(` http://localhost:8082/cart-items`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const item = data.find(
              (item) => item.user === addC.user && item.id === addC.pid
            );
            console.log(item);
            if (item !== undefined) {
              qty = Number(item.qty) + 1;
              fetch(`http://localhost:8082/cart-items/${item.id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ qty: JSON.stringify(qty) }),
              });
            } else {
              addC.qty = addC.qty + 1;
              addC.inCart = true;
              fetch("http://localhost:8082/cart-items", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(addC),
              }).then((res) => {
                alert("Added to Cart!");
              });
            }
          });
      });
  } else {
    fetch("http://localhost:8082/packages", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const pid = JSON.parse(localStorage.getItem("pid"));
        console.log(pid);
        var addC = data.find((el) => el.id === pid);
        addC.user = localStorage.getItem("id");

        Object.defineProperty(
          addC,
          "pid",
          Object.getOwnPropertyDescriptor(addC, "id")
        );
        delete addC["id"];
        console.log(JSON.stringify(addC));

        fetch(` http://localhost:8082/cart-items`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const item = data.find(
              (item) => item.user === addC.user && item.id === addC.pid
            );
            console.log(item);
            if (item !== undefined) {
              qty = Number(item.qty) + 1;
              fetch(`http://localhost:8082/cart-items/${item.id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ qty: JSON.stringify(qty) }),
              });
            } else {
              addC.qty = addC.qty + 1;
              addC.inCart = true;
              fetch("http://localhost:8082/cart-items", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(addC),
              }).then((res) => {
                alert("Added to Cart!");
              });
            }
          });
      });
  }
});
