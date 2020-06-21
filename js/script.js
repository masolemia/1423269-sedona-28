var searchButton = document.querySelector(".button-subtitle");
var form = document.querySelector(".search-form");
var dateEnter = document.querySelector("[name=date-enter]");
var dateLeave = document.querySelector("[name=date-leave]");
var adults = document.querySelector("[name=adults]");
var children = document.querySelector("[name=children]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
};

searchButton.addEventListener("click", function (evt){
  evt.preventDefault();
  form.classList.toggle("search-form");
  form.classList.toggle("hidden-form");
  dateEnter.focus();
});

form.addEventListener("submit", function(evt){
  if(!dateEnter.value || !dateLeave.value || !adults.value || !children.value){
    evt.preventDefault();
  }else{
    if(isStorageSupport){
      localStorage.setItem("adultsNumber",adults.value);
    }
  }
});
