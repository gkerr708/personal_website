document.addEventListener("DOMContentLoaded", function () {
    document.body.style.display = "none"; // Hide body initially

    fetch("includes/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            document.body.style.display = "block"; // Show body after header loads
        })
        .catch(error => console.error("Error loading header:", error));
});
