(() => {
  const button = document.querySelector(".demo-menu");
  const nav = document.getElementById("demo-nav");
  if (button && nav) {
    const menuText = button.querySelector(".menu-text");
    const menuIcon = button.querySelector(".menu-icon");
    const isOpen = () => nav.classList.contains("open");
    const close = (restoreFocus = false) => {
      const opened = isOpen();
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open main menu");
      if (menuText) menuText.textContent = "Menu";
      if (menuIcon) menuIcon.textContent = "☰";
      if (restoreFocus && opened) button.focus();
    };
    button.addEventListener("click", () => {
      if (isOpen()) return close(true);
      nav.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Close main menu");
      if (menuText) menuText.textContent = "Close";
      if (menuIcon) menuIcon.textContent = "×";
      const first = nav.querySelector("a");
      if (first) first.focus();
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => close()));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") close(true);
    });
    document.addEventListener("click", event => {
      if (!nav.contains(event.target) && !button.contains(event.target)) close();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1100) close();
    });
  }

  const form = document.querySelector("[data-demo-inquiry]");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const subject = "GIC website inquiry — " + (values.get("business") || "New business");
    const body = [
      "Selected GIC template: " + form.dataset.template,
      "Name: " + values.get("name"),
      "Business: " + values.get("business"),
      "Email: " + values.get("email"),
      "",
      "Project details:",
      values.get("message")
    ].join("\n");
    const status = form.querySelector("[data-demo-feedback]");
    if (status) status.textContent = "Your email application should open. Review and send the message there; this website does not send or store submissions.";
    const url = "mailto:cory.tortorici@globalintentcompany.space?subject=" +
      encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = url;
  });
})();
