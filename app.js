
var tlk = document.getElementsByClassName("tab-lks");
var tc = document.getElementsByClassName("tab-Cs");

   function opentab() {
    for (tl of tlk) {
        tl.classList.remove("active-lk");
    }
    for (ts of tc) {
        ts.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-lk");
    var id = event.currentTarget.dataset.id;
    var el = document.getElementById(id);
    el.classList.add("active-tab");
   }
var li = document.querySelectorAll("li") 
var tgg = document.querySelector(".toggle");
var ul = document.querySelector(".ul")

tgg.addEventListener("click", function(){
    this.classList.toggle("click")
    ul.classList.toggle("open")
})
li.forEach((lia)=>{
    lia.addEventListener("click", ()=>{
        ul.classList.remove("open")
        tgg.classList.remove("click")
    })
})