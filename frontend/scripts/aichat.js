document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleChat');
    var chat = document.querySelector('.chat-container');
    toggleButton.addEventListener('click', function() {
        // Toggle the 'open' class to show/hide the sidebar
        chat.classList.toggle('open');
    });
    toggleButton.addEventListener('click', function() {
        toggleButton.classList.toggle('open');
    });
});

document.getElementById("send-button").addEventListener("click", async () => {
    await sendMessage();
});

document.getElementById("user-input").addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
        await sendMessage();
    }
});

async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    addMessageToChat("You", userInput);

    const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();
    addMessageToChat("Assistant", data.content);

    document.getElementById("user-input").value = "";
}

function addMessageToChat(role, message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = `chat-message ${role.toLowerCase()}-message`;
    messageElement.innerText = `${role}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
