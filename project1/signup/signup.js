const email = document.getElementById("email");
const uname = document.getElementById("name");
const mob = document.getElementById("mob");
const pass = document.getElementById("password");
const button = document.getElementById("signup");

button.addEventListener("click", () => {
  const dataobj = {
    email: email.value,
    name: uname.value,
    mob:mob.value,
    password: pass.value,
  };
  fetch("http://localhost:8082/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataobj),
  })
    .then((res) => res.json())
    .then((data) => {
        alert("Account registered");
        window.location.href= "../signin/signin.html";
    });
});
