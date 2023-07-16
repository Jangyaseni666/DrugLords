const token = JSON.parse(localStorage.getItem("token"));
const nav_a = document.getElementById("s_up");
const state = localStorage.getItem("state");
console.log("state : " + state);
if (token !== null && state == 0) {
  nav_a.innerHTML = `<i class="bi bi-person-circle"></i> Profile`;
  nav_a.setAttribute("href", "../profile/profile.html");
} else if (token == null && state == 0) {
  nav_a.innerHTML = `<i class="bi bi-person-circle"></i> Sign up`;
  nav_a.setAttribute("href", "../signup/signup.html");
} else {
  nav_a.innerHTML = `<i class="bi bi-person-circle"></i> Log out`;
  nav_a.setAttribute("href", "../signup/signup.html");
  nav_a.addEventListener("click",()=>{
    localStorage.clear();
  })
}

const search_item = document.getElementById("search");
const sb = document.getElementById("sb");

sb.addEventListener("click", () => {
  console.log(search_item.value);
  if (search_item.value !== "") {
    localStorage.setItem("search", search_item.value);
    window.location.href = "../serch_result/sr.html";
  }
});
