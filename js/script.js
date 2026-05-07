/* =========================================================
   AMRANI CONSULTING — Scripts
   Common: header, mobile nav, reading progress, back-to-top,
           reveal-on-scroll, magnetic CTA, form handlers.
   ========================================================= */

/* -------------------------------------------------------
   Google Apps Script endpoints (Web App deployments)
   ------------------------------------------------------- */
const APPS_SCRIPT_URL_CONTACT = "https://script.google.com/macros/s/AKfycbxf6C-pReSwDSLuRM0-ESxGvk0tzYpz-ii4sbZw_0EUOeyuShpmRfymDH724gt6Q8hkoQ/exec";
const APPS_SCRIPT_URL_IMMOAI = "https://script.google.com/macros/s/AKfycbz9qLIjdg3tY4D8ymfGATzUlARWi6w2GSUwCLTf8X8mjJ0iuLzoh41imVMxRekcG7Vg/exec";

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMobileNav();
  initReadingProgress();
  initBackToTop();
  initReveal();
  initMagneticCTA();
  initContactForm();
  initImmoForm();
  initCurrentYear();
});

/* ---------- Header — sticky shadow on scroll ---------- */
function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 12) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Mobile nav (burger) ---------- */
function initMobileNav() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".mobile-nav");
  if (!burger || !nav) return;

  const toggle = (open) => {
    const willOpen = open ?? !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", willOpen);
    burger.classList.toggle("is-open", willOpen);
    burger.setAttribute("aria-expanded", String(willOpen));
    document.body.style.overflow = willOpen ? "hidden" : "";
  };

  burger.addEventListener("click", () => toggle());

  // Close on link click
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => toggle(false));
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) toggle(false);
  });
}

/* ---------- Reading progress bar ---------- */
function initReadingProgress() {
  const bar = document.querySelector(".reading-progress");
  if (!bar) return;

  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    bar.style.width = pct + "%";
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
}

/* ---------- Back-to-top ---------- */
function initBackToTop() {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;

  const onScroll = () => {
    btn.classList.toggle("is-visible", window.scrollY > 600);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- Reveal on scroll (IntersectionObserver) ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((el) => io.observe(el));
}

/* ---------- Magnetic effect on primary CTAs (desktop only) ---------- */
function initMagneticCTA() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  document.querySelectorAll(".btn-primary").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
}

/* ---------- Auto current year in footer ---------- */
function initCurrentYear() {
  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

/* =========================================================
   FORM HANDLERS
   Posts to Google Apps Script Web App as URL-encoded form
   data (avoids CORS preflight on Apps Script).
   ========================================================= */

/**
 * Post form data to a Google Apps Script Web App.
 * Uses FormData with mode: "no-cors" — Apps Script Web Apps don't return
 * CORS headers, so the response is opaque. We can't read the status code,
 * but the request still reaches the server. A network failure (offline,
 * DNS error, blocked) will throw and surface to the form handler.
 */
async function postToAppsScript(url, data) {
  if (!url || url.startsWith("TODO_REPLACE_ME")) {
    throw new Error("Apps Script URL non configurée.");
  }

  const formData = new FormData();
  Object.entries(data).forEach(([k, v]) => formData.append(k, v ?? ""));

  await fetch(url, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });
  return true;
}

function setStatus(el, type, message) {
  if (!el) return;
  el.classList.remove("is-success", "is-error");
  if (type) {
    el.classList.add("is-" + type);
    el.textContent = message;
  } else {
    el.textContent = "";
  }
}

/* ---------- Contact form ---------- */
function initContactForm() {
  const form = document.querySelector("[data-form='contact']");
  if (!form) return;

  const status = form.querySelector(".form-status");
  const submitBtn = form.querySelector("[type='submit']");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setStatus(status, null, "");

    const fd = new FormData(form);
    const data = {
      type: "contact",
      name: fd.get("name"),
      email: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
      timestamp: new Date().toISOString(),
    };

    submitBtn.disabled = true;
    const original = submitBtn.textContent;
    submitBtn.textContent = "Envoi en cours…";

    try {
      await postToAppsScript(APPS_SCRIPT_URL_CONTACT, data);
      form.reset();
      setStatus(status, "success", "Message envoyé. Je vous réponds sous 24h ouvrées.");
    } catch (err) {
      console.error(err);
      setStatus(
        status,
        "error",
        "L'envoi a échoué. Contactez-moi directement au 0486 44 96 06."
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = original;
    }
  });
}

/* ---------- ImmoAI research form ---------- */
function initImmoForm() {
  const form = document.querySelector("[data-form='immoai']");
  if (!form) return;

  const status = form.querySelector(".form-status");
  const submitBtn = form.querySelector("[type='submit']");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setStatus(status, null, "");

    const fd = new FormData(form);
    const data = {
      type: "immoai_research",
      q1_time_consuming: fd.get("q1"),
      q2_followups: fd.get("q2"),
      q3_tools: fd.get("q3"),
      q4_time_savers: fd.get("q4"),
      email: fd.get("email"),
      timestamp: new Date().toISOString(),
    };

    submitBtn.disabled = true;
    const original = submitBtn.textContent;
    submitBtn.textContent = "Envoi en cours…";

    try {
      await postToAppsScript(APPS_SCRIPT_URL_IMMOAI, data);
      form.reset();
      setStatus(
        status,
        "success",
        "Merci pour votre contribution. Je reviens vers vous dès que la démo est prête."
      );
    } catch (err) {
      console.error(err);
      setStatus(status, "error", "L'envoi a échoué. Réessayez ou écrivez-moi directement.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = original;
    }
  });
}
