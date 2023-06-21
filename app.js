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

//================= formdan gelen verileri alma ============================

const output = document.getElementById("p");
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini önlemek için formun varsayılan davranışını engeller

    // Formdaki girdileri al
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    output.innerHTML = "Name: "+name+"<br>Email: "+email+"<br>Message:"+message;

    // Formu sıfırla (isteğe bağlı)
    // document.getElementById("myForm").reset();
});
