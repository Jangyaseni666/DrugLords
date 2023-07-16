const email = document.getElementById("email");
const pass = document.getElementById("password");
const button = document.getElementById("signin");

button.addEventListener("click", () => {
  fetch("http://localhost:8082/users", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      const comp = data.find(
        (ele) => ele.email === email.value && ele.password === pass.value
      );
      console.log(comp);
      if (comp !== undefined) {
        alert("Loggerd in Successfully!");
        localStorage.setItem("token", JSON.stringify(Date.now()));
        localStorage.setItem("id", JSON.stringify(comp.id));
        window.location.href = "../index/index.html";
      } else {
        alert("Invalid credentials");
      }
    });
});
