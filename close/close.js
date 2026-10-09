(function () {
  var nav = document.getElementById("primary");
  var toggle = document.querySelector(".nav-toggle");
  var menus = document.querySelectorAll(".menu");
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)");

  function setOpen(menu, open) {
    var btn = menu.querySelector(":scope > button");
    var panel = menu.querySelector(".panel");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    panel.hidden = !open;
  }

  function closeMenus(except) {
    menus.forEach(function (menu) {
      if (menu !== except) setOpen(menu, false);
    });
  }

  function desktopHover() {
    return fine.matches && !window.matchMedia("(max-width: 880px)").matches;
  }

  var closeTimer = 0;

  menus.forEach(function (menu) {
    var btn = menu.querySelector(":scope > button");
    btn.addEventListener("click", function () {
      if (desktopHover()) {
        clearTimeout(closeTimer);
        closeMenus(menu);
        setOpen(menu, true);
        return;
      }
      var open = btn.getAttribute("aria-expanded") === "true";
      closeMenus(menu);
      setOpen(menu, !open);
    });
    menu.addEventListener("mouseenter", function () {
      if (!desktopHover()) return;
      clearTimeout(closeTimer);
      closeMenus(menu);
      setOpen(menu, true);
    });
    menu.addEventListener("mouseleave", function () {
      if (!desktopHover()) return;
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function () { setOpen(menu, false); }, 200);
    });
    btn.addEventListener("focus", function () {
      if (window.matchMedia("(max-width: 880px)").matches) return;
      closeMenus(menu);
      setOpen(menu, true);
    });
    menu.addEventListener("focusout", function (event) {
      if (!menu.contains(event.relatedTarget)) setOpen(menu, false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenus();
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".menu")) closeMenus();
  });

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
      toggle.textContent = open ? "Menu" : "Close";
      nav.classList.toggle("is-open", !open);
      if (open) closeMenus();
    });
  }

  var form = document.getElementById("close-form");
  if (!form) return;

  var who = form.querySelector("[name=who]");
  if (who && new URLSearchParams(window.location.search).get("for") === "firm") {
    who.value = "firm";
  }

  function setError(field, message) {
    var slot = field.querySelector(".error");
    var input = field.querySelector("input, select, textarea");
    if (message) {
      slot.textContent = message;
      input.setAttribute("aria-invalid", "true");
    } else {
      slot.textContent = "";
      input.removeAttribute("aria-invalid");
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var ok = true;
    form.querySelectorAll(".field").forEach(function (field) {
      var input = field.querySelector("input, select, textarea");
      if (!input.required) {
        setError(field, "");
        return;
      }
      var missing = !input.value.trim();
      var badEmail = input.type === "email" && input.value && !input.checkValidity();
      if (missing) setError(field, input.tagName === "SELECT" ? "Choose one." : "Add this.");
      else if (badEmail) setError(field, "Use a work email we can reply to.");
      else setError(field, "");
      if (missing || badEmail) ok = false;
    });
    if (!ok) {
      var first = form.querySelector("[aria-invalid=true]");
      if (first) first.focus();
      return;
    }

    var data = new FormData(form);
    var lines = [
      "Name: " + data.get("name"),
      "Work email: " + data.get("email"),
      "Company: " + data.get("company"),
      "This request is for: " + (data.get("who") === "firm" ? "A bookkeeping or accounting firm" : "A business"),
      "Books live in: " + data.get("ledger"),
      "Companies: " + data.get("companies"),
      "How far behind: " + data.get("behind")
    ];
    var messy = (data.get("messy") || "").trim();
    if (messy) lines.push("", "What's messy:", messy);
    var href = "mailto:hello@fabriqdata.com?subject=" +
      encodeURIComponent("Close my books") +
      "&body=" + encodeURIComponent(lines.join("\n"));
    window.location.href = href;
  });
})();
