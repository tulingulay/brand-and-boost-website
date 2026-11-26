/* Cases: filter op dienst. Verbergt kaarten met het hidden-attribuut. */
(function () {
  "use strict";
  var knoppen = Array.prototype.slice.call(document.querySelectorAll(".filter button"));
  var kaarten = Array.prototype.slice.call(document.querySelectorAll(".kaart"));
  var telling = document.querySelector(".filter__telling");
  if (!knoppen.length) return;

  function kies(filter) {
    var aantal = 0;
    kaarten.forEach(function (k) {
      var toon = filter === "alles" || k.getAttribute("data-soort").split(" ").indexOf(filter) !== -1;
      k.hidden = !toon;
      if (toon) { aantal++; k.classList.add("zien"); }
    });
    knoppen.forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-filter") === filter)); });
    if (telling) telling.textContent = aantal + (aantal === 1 ? " case" : " cases");
  }

  knoppen.forEach(function (b) {
    b.addEventListener("click", function () { kies(b.getAttribute("data-filter")); });
  });
})();
