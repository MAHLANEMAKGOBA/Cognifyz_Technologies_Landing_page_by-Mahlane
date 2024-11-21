
document.getElementById("apply-now").addEventListener("click", function (event) {
    event.preventDefault();
    const formSection = document.getElementById("form");
    formSection.scrollIntoView({ behavior: "smooth" });
});


document.getElementById("current-year").textContent = new Date().getFullYear();

document.getElementById("application-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        alert("Please fill out all required fields.");
    } else {
        alert("Thank you for applying! We’ll get back to you soon.");
        document.getElementById("application-form").reset(); 
    }
});
