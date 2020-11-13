function adddiv() {
  console.log('inside')
  if (window.matchMedia("(min-width: 1000px)").matches) {
    console.log('inside2')
    var newDiv = document.createElement("div");
    var parent = document.getElementById("head");
    var my_div = document.getElementById("logo");

    newDiv.setAttribute("id", "aditional");

    parent.insertBefore(newDiv, my_div);
    console.log('inside3');

  }
}

adddiv()

const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function () {
  // Swap out the URL for the different stylesheets
  if (theme.getAttribute("href") == "light-theme.css") {
    theme.href = "dark-theme.css";
  } else {
    theme.href = "light-theme.css";
  }
});

/*function addElement()
{
  // tworzy nowy element div
  // i daje jego zawartość
  newDiv = document.createElement("div");
  newDiv.innerHTML = "<h1>Hi there and greetings!</h1>";

  // add the newly created element and it's content into the DOM
  my_div = document.getElementById("logo");
  document.body.insertBefore(newDiv, my_div);
}*/