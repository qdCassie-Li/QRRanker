document.addEventListener("DOMContentLoaded", function () {
  const link = document.getElementById("bibtex-link");

  if (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const bibUrl = link.getAttribute("href");

      fetch(bibUrl)
        .then((response) => response.text())
        .then((bibText) => {
          const newWindow = window.open("", "_blank");
          if (newWindow) {
            newWindow.document.open();
            newWindow.document.write("<pre>" + bibText + "</pre>");
            newWindow.document.title = "Thank you for citing us!";
            newWindow.document.close();
          }
        })
        .catch((error) => console.error("Error loading BibTeX:", error));
    });
  }
});
