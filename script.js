function change() {
  var random1 = Math.random() * 6;
  random1 = Math.floor(random1) + 1;
  var random2 = Math.random() * 6;
  random2 = Math.floor(random2) + 1;
  console.log(random1, random2);
  //changing the images.
  var imageChange1 = "Alea_" + random1 + ".png";
  document.querySelector(".image1").setAttribute("src", imageChange1);
  var imageChange2 = "Alea_" + random2 + ".png";
  document.querySelector(".image2").setAttribute("src", imageChange2);
  if (random1 > random2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (random1 < random2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
