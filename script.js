function myFunction() {
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

myFunction()

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