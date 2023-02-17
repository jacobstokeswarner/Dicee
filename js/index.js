const pageAccessedByReload = (
    (window.performance.navigation && window.performance.navigation.type === 1) ||
      window.performance
        .getEntriesByType('navigation')
        .map((nav) => nav.type)
        .includes('reload')
  );




function randomDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var img1 = document.querySelector("img.img1");

  img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

  var img2 = document.querySelector("img.img2");

  img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").textContent = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").textContent = "Player 2 Wins!";
  } else {
    document.querySelector(".container h1").textContent = "Draw!";
  }
}

if(pageAccessedByReload){
    randomDice();
}
