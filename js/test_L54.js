//De testen met event argument zijn voor L55

function sayHello () {
      this.textContent = "Said it!";
      console.log(event)
      var name =
       document.getElementById("name").value;
       var message = "<h2>Hello " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;

      if (name === "student") {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        title += " & Lovin' it!";
        document
            .querySelector("h1")
            .textContent = title;
      }
    }


// Event handling
document.addEventListener("DOMContentLoaded",
  function () {
    console.log(event);
    

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

  }
);



// document.querySelector("button")
//   .onclick = sayHello;




