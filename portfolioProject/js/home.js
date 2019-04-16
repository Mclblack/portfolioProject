var emailBtn = document.querySelector(".email-btn");

emailBtn.addEventListener("mouseenter", function(){
  emailBtn.style.width = "35%";

});

emailBtn.addEventListener("mouseout", function(){
  emailBtn.style.width = "30%";

})

//Hamburger Menu


function clickMenu(){
    document.querySelector("#menu").classList.toggle("change");
    document.querySelector("#nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");


}

///Contact Button

function contactBtn(){
    window.location.href="contact.html";
}