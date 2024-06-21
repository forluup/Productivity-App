document.getElementById("send-button").addEventListener("click", async () => {
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
  });
  
  function addMessageToChat(role, message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = `chat-message ${role.toLowerCase()}-message`;
    messageElement.innerText = `${role}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  