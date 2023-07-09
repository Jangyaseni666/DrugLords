const token = JSON.parse(localStorage.getItem("token"));
const nav_a = document.getElementById("s_up");
console.log(token);
if (token !== null) {
  nav_a.innerHTML = "Profile";
  nav_a.setAttribute("href", "");
} else {
  nav_a.innerHTML = "Sign up";
}

const search_item = document.getElementById("search");
const sb = document.getElementById("sb");

sb.addEventListener("click", () => {
  console.log(search_item.value);
  if (search_item.value !== "") {
    localStorage.setItem("search",search_item.value);
    window.location.href = "../serch_result/sr.html";
  }
});