document.addEventListener("DOMContentLoaded", () => {
  const navPlaceholder = document.getElementById("nav-placeholder");
  if (navPlaceholder) {
    fetch("/nav.html") // Absolutt sti til nav.html
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