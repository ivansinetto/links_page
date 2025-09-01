const toggleButton = document.getElementById("dark-mode-toggle");
const loaderWrapper = document.querySelector(".loader-wrapper");

// Recupera tema salvo
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "☀️";
} else {
  toggleButton.textContent = "🌙";
}

// Função para alternar tema
function toggleTheme() {
  // aplica o dark-mode já de cara
  document.body.classList.toggle("dark-mode");

  loaderWrapper.classList.remove("hidden"); // mostra loader

  setTimeout(() => {
    if (document.body.classList.contains("dark-mode")) {
      toggleButton.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      toggleButton.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }

    // esconde loader suavemente
    setTimeout(() => {
      loaderWrapper.classList.add("hidden");
    }, 500);
  }, 1000);
}

// Evento no botão
toggleButton.addEventListener("click", toggleTheme);

// Loader inicial (ao carregar a página)
let pageLoaded = false;
let minTimePassed = false;

function hideLoaderOnLoad() {
  if (pageLoaded && minTimePassed) {
    loaderWrapper.classList.add("hidden");
  }
}

window.addEventListener("load", () => {
  pageLoaded = true;
  hideLoaderOnLoad();
});

setTimeout(() => {
  minTimePassed = true;
  hideLoaderOnLoad();
}, 1500);
