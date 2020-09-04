document.getElementById("btn-red").addEventListener("click", displayBooks);

var ajaxRequest = new XMLHttpRequest();
function displayBooks() {
  console.log("In displayBooks?")
  ajaxRequest.onreadystatechange = function() {
    if(ajaxRequest.readyState == 4) {
      if(ajaxRequest.status == 200) {
        console.log("File loaded");
        console.log(this.response);
        document.getElementById("books").innerHTML = ajaxRequest.responseText
      } else {
        console.log("Status: " + ajaxRequest.status);
      }
    } else {
      console.log("Ignored readyState: " + ajaxRequest.readyState); 
    }
  }
  ajaxRequest.open("GET", "http://localhost:3000/api/", true);
  // ajaxRequest.setRequestHeader("Content-Type", "application.json");
  ajaxRequest.send();
}

