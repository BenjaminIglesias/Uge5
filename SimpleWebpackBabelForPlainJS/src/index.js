import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import "./userFacade"
import userFacade from "./userFacade"
import jokeFacade from "./jokeFacade"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
function makeListItems(){
const jokes = jokeFacade.getJokes();
let jokesLis = jokes.map(joke => `<li> ${joke} </li>`).join("\n");
document.getElementById("jokes").innerHTML = jokesLis;
}
makeListItems();
//del 2 
document.getElementById("btnEx1").addEventListener("click", function() {
    document.getElementById("ex1p").innerHTML = jokeFacade.getJokeById(document.getElementById("valEx1").value -1);
  });
  document.getElementById("btnEx1add").addEventListener("click", function() {
    document.getElementById("ex1p").innerHTML = jokeFacade.addJoke(document.getElementById("valEx1").value);
  makeListItems();
  });

/* JS For Exercise-2 below */
document.getElementById("btnEx2").addEventListener("click", function() {
  fetch("https://studypoints.info/jokes/api/jokes/period/hour").then(response => response.json()).then(
  data => document.getElementById("ex2p").innerHTML = data.joke);
});


/* JS For Exercise-3 below */
userFacade.getUsers()
.then(users => {
  const userRows = users.map(user => `
  <tr>
  <td>${user.id}</td>
  <td>${user.age}</td>
  <td>${user.gender}</td>
  <td>${user.email}</td>
  
  </tr>
  `)
  const userRowsAsString = userRows.join("");
  document.getElementById("allUserRows").innerHTML = userRowsAsString;
})



document.getElementById("addUserBtn").addEventListener("click", function() {
  let newUser = {
    age: document.getElementById("valEx4Age").value,
    name: document.getElementById("valEx4Name").value,
    gender: document.getElementById("valEx4Gender").value ,
    email: document.getElementById("valEx4Email").value
   }
  userFacade.addUser(newUser)
});
document.getElementById("editUserBtn").addEventListener("click", function() {
  let newUser = {
    age: document.getElementById("editvalEx4Age").value,
    name: document.getElementById("editvalEx4Name").value,
    gender: document.getElementById("editvalEx4Gender").value ,
    email: document.getElementById("editvalEx4Email").value
   }
  userFacade.editUser(newUser,document.getElementById("editvalEx4Id").value)
});

document.getElementById("getUserBtn").addEventListener("click", function() {
userFacade.getUser(document.getElementById("getUserID").value).then(user => document.getElementById("getUserHere").innerHTML = user.id + "\n" +user.name + "\n" + user.age + "\n" + user.gender + "\n" + user.email )
});
document.getElementById("deleteUserBtn").addEventListener("click", function() {
  userFacade.deleteUser(document.getElementById("deleteUserID").value).then(document.getElementById("deleteUserHere").innerHTML = "User has been yeeted")
  });
/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



