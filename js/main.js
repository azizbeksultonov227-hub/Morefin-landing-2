(function () {
  // Every card in the fan shares the same face; clone it from the template.
  var face = document.getElementById("card-face");
  if (!face) return;
  document.querySelectorAll(".fan .card").forEach(function (card) {
    card.appendChild(face.content.cloneNode(true));
  });
})();
