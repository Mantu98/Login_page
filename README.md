# Login_page

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="./login.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1>Login Page</h1>
        <form id="loginForm">
            <div class="form-group">
                <label for="login_id">Email:</label>
                <input type="email" class="form-control" id="login_id" name="login_id" required placeholder="login id">
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" class="form-control" id="password" name="password" required placeholder="password">
            </div>
            <button type="submit" class="btn btn-primary"><a href="./customer_list.html"  style="color: white">Submit</a></button>
        </form>
        <!-- <div id="tokenMessage" class="mt-3"></div> -->
    </div>

    <!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> -->
    <script src="login.js"></script>
</body>
</html>

# CSS CODE HERE OF LOGIN PAGE

body {
    margin: 0;
    padding: 0;
}
 .container {
    /* border: 2px solid green; */
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* background-color: #ada7a7; */
 }

 # HTML CODE HERE OF CUSTOMER LIST

 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./customer_list.css">
</head>
<body>
      <div class="maincontainer">
          <h1>Customer List</h1>
          <div class="form">
              <input type="text" id="fname" placeholder="first name">
              <input type="text" name="" id="lname" placeholder="last name">
              <input type="text" id="address" placeholder="address">
              <input type="text" id="city" placeholder="city">
              <input type="text" id="state" placeholder="state">
              <input type="email" id="email" placeholder="email">
              <input type="number" id="phone" placeholder="phone">
              <button id="addDetails">Add Details</button>
          </div>
            
        <div id="scoreBoaredContainer"></div>
      </div>
    <script src="./customer_list.js"></script>
</body>
</html>

# CSS CODE HERE OF CUSTOMER LIST
body{
    padding: 0;
    margin: 0;
    background-color: #1c1c1c;;
}

.maincontainer {
    /* border: 2px solid green; */
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#scoreBoaredContainer {
    width: 100%;
}

.scoreBoard {
    /* border: 2px solid red; */
    margin: 1rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    background-color: black;
    box-shadow: 3px 3px 3px gray;
}

.scoreBoard p {
    /* border: 2px solid green; */
    width: 12.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 1.5rem;
    font-weight: 600;
    color: white;
}
h1{
    color: white;
}
 
#addDetails {
    height: 100%;
    font-size: 0.99rem;
    color: white;
    background-color: rgb(138, 1, 1);
}

.form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.form input {
    width: 12.5%;
    padding: 0.2rem 0;
    background-color: #302f2f;
    color: aliceblue;
    box-shadow: 3px 3px 7px black 4px 4px 10px black;
}

# JS CODE HERE OF CUSTOMER LIST

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

