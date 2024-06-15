document.addEventListener("DOMContentLoaded", function () {
  const icon = document.getElementById("icon");
  const body = document.body;

  icon.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      icon.textContent = "light_mode";
    } else {
      icon.textContent = "dark_mode";
    }
  });
});
