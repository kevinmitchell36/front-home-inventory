document.getElementById("btn-red").addEventListener("click", displayBooks);

let ajaxRequest = new XMLHttpRequest();
function displayBooks() {
  ajaxRequest.onreadystatechange = function() {
    if(ajaxRequest.readyState == 4) {
      if(ajaxRequest.status == 200) {
        console.log("File loaded");
        let data = JSON.parse(this.responseText)
        let output = ""
        for(let i = 0; i < data.length; i++) {
          output += `<li>${data[i].title}</li>`
        }
        document.getElementById("books").innerHTML = output;
      } else {
        console.log("Status: " + ajaxRequest.status);
      }
    } else {
      console.log("Ignored readyState: " + ajaxRequest.readyState); 
    }
  }
  ajaxRequest.open("GET", "http://localhost:3000/api/", true);
  ajaxRequest.send();
}

