/* Brand & Boost, herontwerp: scrollgedrag zonder libraries. */
(function () {
  "use strict";
  var d = document, html = d.documentElement, body = d.body;
  var rustig = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var breed = matchMedia("(min-width: 960px)");
  html.classList.add("js");

  var $ = function (s, el) { return (el || d).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || d).querySelectorAll(s)); };
  var klem = function (n) { return Math.max(0, Math.min(1, n)); };

  /* 1. Menu op mobiel */
  var menuKnop = $(".kop__menu");
  if (menuKnop) {
    var zetMenu = function (open) {
      body.classList.toggle("menu-open", open);
      menuKnop.setAttribute("aria-expanded", String(open));
      menuKnop.textContent = open ? "Sluit" : "Menu";
    };
    menuKnop.addEventListener("click", function () { zetMenu(!body.classList.contains("menu-open")); });
    d.addEventListener("keydown", function (e) { if (e.key === "Escape") zetMenu(false); });
    $$(".menu a").forEach(function (a) { a.addEventListener("click", function () { zetMenu(false); }); });
  }

  /* 2. Woorden van de stelling los zetten */
  function splits(knoop) {
    Array.prototype.slice.call(knoop.childNodes).forEach(function (k) {
      if (k.nodeType === 3) {
        var frag = d.createDocumentFragment();
        k.textContent.split(/(\s+)/).forEach(function (stuk) {
          if (!stuk) return;
          if (/^\s+$/.test(stuk)) { frag.appendChild(d.createTextNode(" ")); return; }
          var s = d.createElement("span"); s.className = "w"; s.textContent = stuk; frag.appendChild(s);
        });
        knoop.replaceChild(frag, k);
      } else if (k.nodeType === 1) splits(k);
    });
  }
  $$("[data-woorden]").forEach(splits);

  /* 3. Alles wat aan de scrollstand hangt */
  var themas = $$("main [data-thema], footer[data-thema]");
  var kop = $(".kop");
  var scenes = $$("[data-scrol]");
  var strook = $(".strook__baan");
  var werk = $(".werk"), baan = $(".werk__baan"), werkWeg = 0;
  var bezig = false;

  function meet() {
    if (!werk || !baan) return;
    if (breed.matches) {
      werkWeg = Math.max(0, baan.scrollWidth - innerWidth);
      werk.style.height = innerHeight + werkWeg + "px";
    } else {
      werkWeg = 0;
      werk.style.height = "";
      baan.style.removeProperty("--schuif");
    }
  }

  function teken() {
    bezig = false;
    var vh = innerHeight, y = scrollY;
    // thema van de sectie rond het midden van het scherm
    var lijn = vh * 0.42, t = null;
    for (var i = 0; i < themas.length; i++) {
      var r = themas[i].getBoundingClientRect();
      if (r.top <= lijn && r.bottom > lijn) { t = themas[i].dataset.thema; break; }
    }
    if (t && body.dataset.thema !== t) body.dataset.thema = t;
    // leesvoortgang in de kop
    if (kop) kop.style.setProperty("--gelezen", klem(y / Math.max(1, html.scrollHeight - vh)).toFixed(4));
    // scenes met een voortgang van 0 tot 1
    scenes.forEach(function (s) {
      var sr = s.getBoundingClientRect();
      var p = rustig ? 1 : klem(-sr.top / Math.max(1, sr.height - vh));
      s.style.setProperty("--p", p.toFixed(4));
      var woorden = s._w || (s._w = $$(".w", s));
      var aan = Math.round(klem(p / 0.6) * woorden.length);
      woorden.forEach(function (w, n) { w.classList.toggle("aan", n < aan); });
    });
    if (strook && !rustig) strook.style.setProperty("--schuif", (y * 0.35).toFixed(1));
    if (werk && baan && werkWeg) {
      var wr = werk.getBoundingClientRect();
      baan.style.setProperty("--schuif", (klem(-wr.top / Math.max(1, wr.height - vh)) * werkWeg).toFixed(1));
    }
  }
  function vraag() { if (!bezig) { bezig = true; requestAnimationFrame(teken); } }
  addEventListener("scroll", vraag, { passive: true });
  addEventListener("resize", function () { meet(); vraag(); });
  addEventListener("load", function () { meet(); vraag(); });
  meet(); teken();

  /* 4. Binnenkomen, een keer */
  var teZien = $$("[data-in]");
  if ("IntersectionObserver" in window && !rustig) {
    var io = new IntersectionObserver(function (items) {
      items.forEach(function (it) { if (it.isIntersecting) { it.target.classList.add("zien"); io.unobserve(it.target); } });
    }, { rootMargin: "0px 0px -12% 0px" });
    teZien.forEach(function (el) { io.observe(el); });
  } else teZien.forEach(function (el) { el.classList.add("zien"); });

  /* 5. Het hele plaatje: welke stap is nu in beeld */
  var plaatje = $(".plaatje");
  if (plaatje && "IntersectionObserver" in window) {
    var stappen = $$(".stap", plaatje), delen = $$(".ring circle", plaatje);
    var naam = $(".plaatje__naam", plaatje), teller = $(".plaatje__teller", plaatje);
    var zetStap = function (n) {
      stappen.forEach(function (s, i) { s.classList.toggle("nu", i === n); });
      delen.forEach(function (c, i) { c.classList.toggle("klaar", i < n); c.classList.toggle("nu", i === n); });
      if (naam) naam.textContent = stappen[n].dataset.naam;
      if (teller) teller.textContent = (n + 1) + " van " + stappen.length;
    };
    var sio = new IntersectionObserver(function (items) {
      items.forEach(function (it) { if (it.isIntersecting) zetStap(stappen.indexOf(it.target)); });
    }, { rootMargin: "-45% 0px -45% 0px" });
    stappen.forEach(function (s) { sio.observe(s); });
    zetStap(0);
  }

  /* 6. Oud naast nieuw */
  $$(".vergelijk").forEach(function (v) {
    var inp = $("input", v);
    var zet = function () { v.style.setProperty("--pos", inp.value + "%"); };
    inp.addEventListener("input", zet); zet();
  });

  /* 7. Jaarcontract of flexibel */
  $$(".schakel").forEach(function (sch) {
    var doel = sch.closest("[data-tarief]");
    $$("button", sch).forEach(function (b) {
      b.addEventListener("click", function () {
        doel.dataset.tarief = b.dataset.kies;
        $$("button", sch).forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      });
    });
  });

  /* 8. Het wisselende vak in de hero */
  var wissel = $(".wissel");
  if (wissel && !rustig) {
    var lijst = wissel.dataset.lijst.split("|"), nr = 0;
    setInterval(function () {
      wissel.classList.add("weg");
      setTimeout(function () { nr = (nr + 1) % lijst.length; wissel.textContent = lijst[nr]; wissel.classList.remove("weg"); }, 260);
    }, 2400);
  }
})();
