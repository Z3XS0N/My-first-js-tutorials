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

//================== Hesap Makinesi =======================

/*
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
        const displayText = display.value;

        if(displayText === "function Error() { [native code] }" || displayText === "undefined" || displayText === "Error"){
            display.value = "";
        }
        if (buttonText === "=") {
            try {
                const result = eval(displayText);
                display.value = result;
            } catch (error) {
                display.value = "Error";
            }
        } else if (buttonText === "C") {
            display.value = "";
        } else if (buttonText === "←") {
            if(displayText === "function Error() { [native code] }" || displayText === "undefined" || displayText === "Error"){
                display.value = displayText;
            }else {
                display.value = displayText.slice(0, -1);
            }
        } else {
            display.value += buttonText;
        }
    });
});*/


// ==================== Mesajlaşma Projesi ==================================

/*
const mesaj = document.getElementById("mesaj");
const messages = document.getElementById("messages");
var number = 0;

document.getElementById("send").onclick = function() {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messages.innerHTML += `
        <div class="message sent">
            <p>${mesaj.value}</p>
            <span class="message-time">${currentTime}</span>
        </div>
        <div class="message received">
            <p>Mesaj Sayı: ${number++}</p>
            <span class="message-time">${currentTime}</span>
        </div>
    `;
    messages.scrollTop = messages.scrollHeight;
};
*/


// ================= Saniye ile Çalışma ===========================

/*const second = document.getElementById("second");

document.addEventListener("DOMContentLoaded",function(){
    var secondValue = 5;
    var seconds = setInterval(function(){
        secondValue--;

        second.innerHTML = secondValue+" saniyede Oldu";

        if(secondValue === 0){
            clearInterval(seconds);
        }
    });
});*/

// ================== Tıklama Oyunu ==========================

/*
const score = document.getElementById("score");
var second = document.getElementById("countdown");
const start = document.getElementById("start");
var number = 0;
var false_value = 0;

start.addEventListener("click", function() {
    var inputValue = document.getElementById("input").value;
    var secondValue = parseInt(inputValue, 10);

    if (!isNaN(secondValue) && secondValue > 0) {
        number = 0;
        var countdown = setInterval(function() {
            secondValue--;

            second.innerText = secondValue + " saniyen var";

            if (secondValue === 0) {
                clearInterval(countdown);
                document.getElementById("start").disabled = false;
                document.getElementById("click").disabled = true;
            } else if (secondValue >= 0) {
                document.getElementById("click").disabled = false
                document.getElementById("start").disabled = true;
                document.getElementById("click").onclick = function() {
                    score.innerHTML = number++;
                };
            }
        }, 1000);

        document.getElementById("click").disabled = false; // Butonu aktif hale getir
    }else{
        second.innerHTML = "Sayı gir Bak Ağzımı açma";
        false_value++;
        console.log(false_value);
        if(false_value >= 10){
            second.innerHTML = "Olum geliyor bak tuyamıyorum";
        }
        if(false_value >= 20){
            second.innerHTML = "Hapı Yutarsın yanındada hediye gelir bak";
        }
        if(false_value >= 40){
            second.innerHTML = "Lan Sikik Taşşakmı geçiyon lan benimle sikdir git amk";
        }
    }
});
*/