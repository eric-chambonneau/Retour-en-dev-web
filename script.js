let myHeading = document.querySelector("h1");
myHeading.textContent = "hello, world !";
/*
Tout ce qui est écrit ici est entre commentaires.
*/
// Voici un commentaire sur une ligne

let iceCream = "chocolat";
if (iceCream === "chocolat") {
  alert("J'adore la glace au chocolat !");
} else {
  alert("Ooooh, mais j'aurais préféré au chocolat.");
}
document.querySelector("html").addEventListener("click", function () {
    alert("Aïe, arrêtez de cliquer !!");
  });
  let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "/media/page-daccueil.jpg") {
    myImage.setAttribute("src", "media/page-daccueil.jpg");
  } else {
    myImage.setAttribute("src", "media/firefox_2.jpg");
  }
});

