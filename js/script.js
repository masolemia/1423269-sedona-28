var searchButton = document.querySelector(".button-subtitle");
var form = document.querySelector(".search-form");
var dateEnter = form.querySelector("[name=date-enter]");
var dateLeave = form.querySelector("[name=date-leave]");
var adults = form.querySelector("[name=adults]");
var children = form.querySelector("[name=children]");

var isStorageSupport = true;
var storage = "";
var isStorageSupportTwo = true;
var storageTwo = "";

try {
  storage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
};

try {
  storageTwo = localStorage.getItem("children");
} catch (err) {
  isStorageSupportTwo = false;
};

searchButton.addEventListener("click", function (evt){
  evt.preventDefault();
  form.classList.toggle("search-form");
  form.classList.toggle("hidden-form");
  form.classList.remove("error-form");
  dateEnter.focus();
  if(storage){
    adults.value=storage;
  };
  if(storageTwo){
    children.value=storageTwo;
  }
});

form.addEventListener("submit", function(evt){
  if(!dateEnter.value || !dateLeave.value || !adults.value || !children.value){
    evt.preventDefault();
    form.classList.remove("error-form");
    form.offsetWidth=form.offsetWidth;
    form.classList.add("error-form");
  }else{
    if(isStorageSupport){
      localStorage.setItem("adults",adults.value);
    };
    if(isStorageSupportTwo){
      localStorage.setItem("children", children.value);
    }
  }
});
