
const scoreBoaredContainer = document.getElementById("scoreBoaredContainer");
const addDetails = document.getElementById("addDetails");
 
 addDetails.addEventListener("click", () => {

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    const scoreBoard = document.createElement("div");
    scoreBoard.classList.add("scoreBoard");
    
    scoreBoard.innerHTML = `
      <p>${fname.value} ${lname.value}</p>
      <p>${address.value}</p>
      <p>${city.value}</p>
      <p>${state.value}</p>
      <p>${email.value}</p>
      <p>${phone.value}</p>
      <p class="deleteIcon">&#x1f5d1;</p>
    `;
   
    scoreBoaredContainer.appendChild(scoreBoard);
    fname.value = "";
    lname.value = "";
    address.value = "";
    city.value = "";
    state.value = "";
    email.value = "";
    phone.value = "";

    DeleteItem();
});


function DeleteItem() {
    const deleteIcon = document.querySelectorAll(".deleteIcon");
    deleteIcon.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            return e.target.parentElement.remove();
        })
    })
}

