const button = document.getElementById("dodgingButton");
const catImage = document.getElementById("catImage");

button.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - button.clientWidth);
  const y = Math.random() * (window.innerHeight - button.clientHeight);
  button.style.position = "absolute";
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
});

button.addEventListener("click", () => {
  button.style.display = "none";
  catImage.style.display = "block";
});
