// const root = document.getElementById("root").innerHTML;// divin işeriğini almak için

//================= class ismini değiştirme ======================
// const root = document.querySelector(".active");
// var oldroorclass = root.className;
// var newrootclass = root.className = "deactive";
//
// document.write(oldroorclass+`<br>`);
// document.write(newrootclass);

//================= Basit bir uygulama 1 ========================
//========= butona basınca body-nin classname-ni değiştirme ===============

/*const body = document.querySelector(".body-active");
const body_out = document.getElementById("body");

document.getElementById("btn").onclick = function () {
    var body_classname = body.className;

    if (body_classname === "body-active") {
        body.className = "body-deactive";
        body_out.innerHTML = body.className;
    } else {
        body.className = "body-active";
        body_out.innerHTML = body.className;
    }
};*/

//================= formdan gelen verileri almak ============================

/*
const output = document.getElementById("p");

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var passwd = document.getElementById("passwd").value;

    if (username !== "" && email !== "" && passwd !== "") {
        output.innerHTML = "Username: " + username + "<br> Email: " + email + "<br> Password: " + passwd;
    } else if (username === "" && email !== "" && passwd !== "") {
        output.innerHTML = "Veriler Bos";
    } else if (username !== "" && email === "" && passwd !== "") {
        output.innerHTML = "Veriler Bos";
    } else if (username !== "" && email === "" && passwd === "") {
        output.innerHTML = "Veriler Bos";
    } else {
        output.innerHTML = "Veriler Bos"
    }

    document.getElementById("form").reset();
});*/

//===================== Öğrendiklerimden küçük bir Site sayfsı =====================


/*
const themeBtn = document.getElementById("theme_btn");
const output = document.getElementById("output");

const theme = document.querySelector(".light");
const buttons = document.querySelectorAll(".light_btn");
const inputs = document.querySelectorAll(".input_l");

themeBtn.onclick = function() {

    if (this.innerHTML === "Light" && theme.className === "light") {
        this.innerHTML = "Dark";
        theme.className = "dark";
        buttons.forEach(function(button) {
            button.className = "dark_btn";
        });
        inputs.forEach(function(input){
            input.className = "input_b";
        });
    } else if (this.innerHTML === "Dark" && theme.className === "dark") {
        this.innerHTML = "Light";
        theme.className = "light";
        buttons.forEach(function(button) {
            button.className = "light_btn";
        });
        inputs.forEach(function(input){
            input.className = "input_l";
        });
    }
};
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var passwd = document.getElementById("passwd").value;

    if (username !== "" && email !== "" && passwd !== "") {
        if(username.length > 2){
            if(passwd.length > 4){
                output.id = "autput";
                output.innerHTML = "Username: " + username + "<br> Email: " + email + "<br> Password: " + passwd;
            }else {
                output.id = "output";
                output.innerHTML = "Parola kısa";
            }
        }else {
            output.id = "output";
            output.innerHTML = "Kullanıcı adı kısa";
        }
    } else {
        output.id = "output";
        output.innerHTML = "Veriler Boş";
    }

    document.getElementById("form").reset();
});*/
