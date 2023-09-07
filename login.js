// $(document).ready(function () {
//     $("#loginForm").submit(function (event) {
//         event.preventDefault();

//         const login_id = $("#login_id").val();
//         const password = $("#password").val();

//         // Make a POST request to the authentication API
//         $.ajax({
//             url: "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp",
//             type: "POST",
//             contentType: "application/json",
//             data: JSON.stringify({
//                 login_id: login_id,
//                 password: password
//             }),
//             success: function (data) {
//                 // Store the received token and redirect to the customer list page
//                 const token = data.token; // Replace 'token' with the actual token property name
//                 localStorage.setItem("token", token);
//                 window.location.href = "customer_list.html";
//             },
//             error: function (xhr, status, error) {
//                 if (xhr.status === 401) {
//                     $("#tokenMessage").text("Invalid Authorization");
//                 } else {
//                     $("#tokenMessage").text("Login failed. Please try again.");
//                 }
//             }
//         });
//     });
// });


const submit = document.getElementById("submit");
 