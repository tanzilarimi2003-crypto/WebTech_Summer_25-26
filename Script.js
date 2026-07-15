console.log("JavaScript Connected");

let attempts = 0;

function login()
{
    document.getElementById("UserError").innerHTML = "";
    document.getElementById("PasswordError").innerHTML = "";
    document.getElementById("LoginMessage").innerHTML = "";

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    

    if(username == "")
    {
        document.getElementById("UserError").innerHTML =
        "Username cannot be empty";
        return false;
    }

    if(password == "")
    {
        document.getElementById("PasswordError").innerHTML =
        "Password cannot be empty";
        return false;
    }

    

    if(username == "AIUB" && password == "$_student")
    {
        document.getElementById("LoginMessage").innerHTML =
        "<span style='color:green;font-weight:bold;'>Successfully Logged In</span>";

        attempts = 0;
        return false;
    }

    

    attempts++;

    if(attempts == 1)
    {
        document.getElementById("LoginMessage").innerHTML =
        "<span style='color:red;'>You have 3 attempts left.</span>";
    }

    else if(attempts == 2)
    {
        document.getElementById("LoginMessage").innerHTML =
        "<span style='color:red;'>You have 2 attempts left.</span>";
    }

    else if(attempts == 3)
    {
        document.getElementById("LoginMessage").innerHTML =
        "<span style='color:red;'>You have 1 attempt left. You are locked for 5 minutes.</span>";

        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;

        document.querySelector("input[type='submit']").disabled = true;

        setTimeout(function(){

            attempts = 0;

            document.getElementById("username").disabled = false;
            document.getElementById("password").disabled = false;

            document.querySelector("input[type='submit']").disabled = false;

            document.getElementById("LoginMessage").innerHTML =
            "<span style='color:green;'>Login unlocked. Try again.</span>";

        },300000);   
    }

    return false;
}