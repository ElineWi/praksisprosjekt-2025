document.addEventListener("DOMContentLoaded", () => {
  const navPlaceholder = document.getElementById("nav-placeholder");
  if (navPlaceholder) {
    // Dynamisk sti til nav.html basert på plasseringen av HTML-filen
    const pathToNav = window.location.pathname.includes("/pages/") ? "../components/nav.html" : "components/nav.html";

    fetch(pathToNav)
      .then(response => {
        if (!response.ok) {
          throw new Error("Kunne ikke laste nav.html");
        }
        return response.text();
      })
      .then(data => {
        navPlaceholder.innerHTML = data;
      })
      .catch(error => console.error("Feil ved lasting av navigasjon:", error));
  }
});