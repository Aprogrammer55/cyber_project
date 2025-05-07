// Simulated file system using localStorage
const FileSystem = {
    write: (filename, content) => {
        localStorage.setItem(filename, JSON.stringify(content));
    },
    read: (filename) => {
        const data = localStorage.getItem(filename);
        return data ? JSON.parse(data) : null;
    },
    exists: (filename) => {
        return localStorage.getItem(filename) !== null;
    },
};

// Sample user data structure
const USERS_FILE = "users";

// Initialize dummy users if not present
if (!FileSystem.exists(USERS_FILE)) {
    FileSystem.write(USERS_FILE, [
        { username: "test@example.com", password: "1234" },
        { username: "admin", password: "admin" },
    ]);
}

// Login logic
document
    .querySelector(".login__submit")
    .addEventListener("click", function (e) {
        e.preventDefault();

        const usernameInput = document.querySelector(
            '.login__input[type="text"]'
        );
        const passwordInput = document.querySelector(
            '.login__input[type="password"]'
        );
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        const users = FileSystem.read(USERS_FILE);
        const user = users.find(
            (u) => u.username === username && u.password === password
        );

        if (user) {
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password.");
        }
    });
let users = FileSystem.read(USERS_FILE) || [];

// Add new user
users.push({ username: "Adham", password: "12345" });

// Write updated users back to "file"
FileSystem.write(USERS_FILE, users);
