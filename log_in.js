const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// Toggle UI panels
signUpButton.addEventListener("click", () =>
    container.classList.add("right-panel-active")
);
signInButton.addEventListener("click", () =>
    container.classList.remove("right-panel-active")
);

// Get saved users or initialize
function getUsers() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
}

function saveUser(username, password) {
    const users = getUsers();
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
}

function userExists(username) {
    return getUsers().some((user) => user.username === username);
}

function validateUser(username, password) {
    return getUsers().some(
        (user) => user.username === username && user.password === password
    );
}

// Handle Sign Up
document.getElementById("signUpForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    if (userExists(username)) {
        alert("Username already exists!");
    } else {
        saveUser(username, password);
        alert("Account created successfully!");
        e.target.reset();
        container.classList.remove("right-panel-active");
    }
});

// Handle Sign In
document.getElementById("signInForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    if (validateUser(username, password)) {
        window.location.href = "index.html";
        // redirect or continue here
    } else {
        alert("Invalid username or password.");
    }
});
