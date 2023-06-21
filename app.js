// const root = document.getElementById("root").innerHTML;// divin işeriğini almak için

//================= class ismini değiştirme ======================
// const root = document.querySelector(".active");
// var oldroorclass = root.className;
// var newrootclass = root.className = "deactive";
//
// document.write(oldroorclass+`<br>`);
// document.write(newrootclass);

//================= Basit bir uygulama ========================
//========= butona basınca elementin class name-ni değiştirme ===============
const p = document.querySelector(".active");
var classname = p.className;
var number = 0;
var output =document.getElementById("p");
var newclassname = "deactive";
document.getElementById("btn").onclick=function(){
    number++;
    var number1 = number-1;
    output.innerHTML = "Old Class Name: "+classname+number1+"<br> New Class Name: "+newclassname+number;
};