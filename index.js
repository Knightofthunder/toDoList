






// ...existing code...
const submitButton = document.getElementById("login-div-submit");
if (submitButton) {
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        const email = document.getElementById("login-input")?.value || '';
        sessionStorage.setItem('userEmail', email); // store value for todo page
        window.location.href = 'todo.html';
    });
}
// ...existing code...