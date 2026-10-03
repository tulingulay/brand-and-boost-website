/* Brand & Boost — site.js
   Alles wat uit de vorige site behouden blijft, overgezet naar vanilla JS:
   1. cookiemelding + Cookievoorkeuren (zelfde localStorage-sleutel als
      voorheen, dus eerdere keuzes van bezoekers blijven gelden);
   2. Google Analytics 4 met Consent Mode v2, alleen actief mét meet-ID
      en pas metend ná "Akkoord";
   3. formulieren via Web3Forms (aanvragen komen binnen op
      info@brandandboost.nl), met honeypot en doorverwijzing naar /bedankt;
   4. conversie-event op /bedankt.
   De placeholders hieronder vult scripts/build-site.mjs bij de build in
   vanuit de environment variables (zie netlify.toml / .env.example). */

(function () {
  "use strict";

  var WEB3FORMS_KEY = "%WEB3FORMS_KEY%";
  var GA4_ID = "%GA4_ID%";
  if (WEB3FORMS_KEY.indexOf("%") === 0) WEB3FORMS_KEY = "";
  if (GA4_ID.indexOf("%") === 0) GA4_ID = "";

  var CONSENT_KEY = "bb-cookie-consent";
  var LEAD_FLAG = "bb-lead-verzonden";

  /* ---------- Opslag (privémodus-proof) ---------- */
  function leesConsent() {
    try {
      var raw = localStorage.getItem(CONSENT_KEY);
      if (!raw) return null;
      var value = JSON.parse(raw).value;
      return value === "accepted" || value === "rejected" ? value : null;
    } catch (e) { return null; }
  }
  function bewaarConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ value: value, date: new Date().toISOString() }));
    } catch (e) { /* geen opslag mogelijk: keuze geldt voor deze sessie */ }
  }

  /* ---------- Google Analytics 4 + Consent Mode v2 ---------- */
  function gtag() { window.dataLayer.push(arguments); }
  function initAnalytics() {
    if (!GA4_ID) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = gtag;
    gtag("consent", "default", {
      ad_storage: "denied", ad_user_data: "denied",
      ad_personalization: "denied", analytics_storage: "denied"
    });
    gtag("js", new Date());
    gtag("config", GA4_ID, { anonymize_ip: true });
    if (leesConsent() === "accepted") pasConsentToe("accepted");
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA4_ID);
    document.head.appendChild(s);
  }
  function pasConsentToe(value) {
    if (typeof window.gtag !== "function") return;
    window.gtag("consent", "update", { analytics_storage: value === "accepted" ? "granted" : "denied" });
  }
  function meet(event, props) {
    if (typeof window.gtag === "function") window.gtag("event", event, props || {});
  }

  /* ---------- Cookiemelding ---------- */
  var MERK = '<span class="merk" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="12" fill="currentColor"/><path class="pijl" d="M10.2 7.6 14.6 12l-4.4 4.4" fill="none" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
  var melding = null;

  function toonMelding() {
    if (melding) { melding.hidden = false; return; }
    melding = document.createElement("div");
    melding.className = "cookiemelding";
    melding.setAttribute("role", "region");
    melding.setAttribute("aria-label", "Cookiemelding");
    melding.innerHTML =
      '<h2>Wij maken gebruik van cookies</h2>' +
      '<p>Wij gebruiken functionele cookies om deze website goed te laten werken. Klik je op Akkoord, dan gebruiken wij daarnaast analytische cookies (Google Analytics, privacyvriendelijk ingesteld) om te meten hoe de website wordt gebruikt. Weiger je, dan meten wij niets; de website werkt dan gewoon.</p>' +
      '<p>Zie voor meer informatie onze <a href="/privacyverklaring">privacy-</a> en <a href="/cookiebeleid">cookieverklaring</a>.</p>' +
      '<div class="cookiemelding__acties">' +
      '<button type="button" class="knop" data-keuze="accepted">Akkoord ' + MERK + '</button>' +
      '<button type="button" class="link" data-keuze="rejected">Weigeren</button>' +
      '</div>';
    melding.addEventListener("click", function (e) {
      var knop = e.target.closest("[data-keuze]");
      if (!knop) return;
      var keuze = knop.getAttribute("data-keuze");
      bewaarConsent(keuze);
      pasConsentToe(keuze);
      melding.hidden = true;
    });
    document.body.appendChild(melding);
  }

  function initCookies() {
    if (!leesConsent()) toonMelding();
    document.querySelectorAll(".js-cookievoorkeuren").forEach(function (el) {
      el.addEventListener("click", toonMelding);
    });
  }

  /* ---------- Formulieren via Web3Forms ---------- */
  function initFormulieren() {
    document.querySelectorAll("form.form").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Honeypot: doe alsof het gelukt is en stop.
        var bot = form.querySelector('[name="bot-veld"]');
        if (bot && bot.value) { window.location.href = "/bedankt"; return; }

        var fout = form.querySelector(".melding");
        if (!WEB3FORMS_KEY) {
          toonFout(form, fout, "Het formulier is tijdelijk niet beschikbaar. Mail ons via info@brandandboost.nl, dan reageren wij binnen één werkdag.");
          return;
        }

        var knop = form.querySelector('[type="submit"]');
        if (knop) knop.disabled = true;

        var velden = { access_key: WEB3FORMS_KEY, from_name: "Brand & Boost website" };
        velden.subject = "Nieuw bericht via brandandboost.nl · " + (form.getAttribute("name") || "formulier");
        new FormData(form).forEach(function (waarde, naam) {
          if (naam === "bot-veld" || naam === "form-name") return;
          velden[naam] = waarde;
          if (naam === "email") velden.replyto = waarde;
        });
        velden.formulier = form.getAttribute("name") || "";

        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(velden)
        }).then(function (res) { return res.json(); }).then(function (data) {
          if (data.success) {
            try { sessionStorage.setItem(LEAD_FLAG, form.getAttribute("name") || "1"); } catch (e) { /* ok */ }
            window.location.href = "/bedankt";
          } else {
            throw new Error("mislukt");
          }
        }).catch(function () {
          if (knop) knop.disabled = false;
          toonFout(form, fout, "Er ging iets mis bij het versturen. Probeer het zo nog eens of mail ons via info@brandandboost.nl.");
        });
      });
    });
  }
  function toonFout(form, bestaand, tekst) {
    var el = bestaand;
    if (!el) {
      el = document.createElement("p");
      el.className = "melding";
      el.setAttribute("role", "alert");
      form.appendChild(el);
    }
    el.hidden = false;
    el.textContent = tekst;
  }

  /* ---------- Conversie-event op /bedankt ---------- */
  function initBedankt() {
    if (window.location.pathname.replace(/\/$/, "") !== "/bedankt") return;
    try {
      var formulier = sessionStorage.getItem(LEAD_FLAG);
      if (formulier) {
        sessionStorage.removeItem(LEAD_FLAG);
        meet("lead_form_submitted", { formulier: formulier });
      }
    } catch (e) { /* ok */ }
  }

  initAnalytics();
  function start() { initCookies(); initFormulieren(); initBedankt(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
