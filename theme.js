// theme.js
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".color-btn");
  const root = document.documentElement;

  const applyTheme = (primary, accent) => {
    root.style.setProperty("--primary-color", primary);
    root.style.setProperty("--accent-color", accent);
    localStorage.setItem("primary-color", primary);
    localStorage.setItem("accent-color", accent);
  };

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const primary = btn.getAttribute("data-color");
      const accent = btn.getAttribute("data-accent");
      applyTheme(primary, accent);
    });
  });

  // Load saved theme
  const savedPrimary = localStorage.getItem("primary-color");
  const savedAccent = localStorage.getItem("accent-color");
  if (savedPrimary && savedAccent) {
    applyTheme(savedPrimary, savedAccent);
  }
});
