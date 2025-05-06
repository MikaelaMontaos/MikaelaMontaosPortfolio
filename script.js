document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio successfully loaded");
});

function copyEmail() {
    const email = "mvamontaos@ymail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard");
    }).catch(err => {
        console.error("Error copying email: ", err);
    });
}