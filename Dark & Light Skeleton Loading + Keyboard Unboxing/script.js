const allLoadings = document.querySelectorAll(".loading");
const toggler = document.getElementById("toogle");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Save the theme preference to localstorage
  const isDarkModeEnable = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkmode", isDarkModeEnable);
}

toggler.addEventListener("click", toggleDarkMode);

window.addEventListener("load", () => {
  // Retrieve the theme preference from localstorage
  const isDarkModeEnable = localStorage.getItem("darkmode");

  // Set the theme based on the saved preference
  if (isDarkModeEnable === "true") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  setInterval(() => {
    allLoadings.forEach((item) => {
      item.classList.remove("loading");
    });
  }, 1000);
});
