const registerForm = document.getElementById("registerForm");

if(registerForm){

  registerForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href = "login.html";

  });

}

const loginForm = document.getElementById("loginForm");

if(loginForm){

  loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser =
      JSON.parse(localStorage.getItem("user"));

    if(
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ){

      alert("Login Successful!");

      window.location.href = "index.html";

    } else {

      alert("Invalid Email or Password");

    }

  });

}
