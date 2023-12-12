var btn = document.getElementById("read-btn");
var btn2 = document.getElementById("read-btn2");

btn.addEventListener("click", () => {
  var face = document.querySelector(".face");
  face.classList.toggle("active");

  if (face.classList.contains("active")) {
    return (btn.textContent = "saiba mais");
  }
  btn.textContent = "voltar";
});

btn2.addEventListener("click", () => {
  var face = document.querySelector(".face");
  face.classList.toggle("active");

  if (face.classList.contains("active2")) {
    return (btn.textContent = "saiba mais");
  }
  btn2.textContent = "voltar";
});
