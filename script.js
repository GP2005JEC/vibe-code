// Array of dynamic AI responses for chat
const aiResponses = [
  "Thank you for sharing. I'm here to support you. 💙",
  "I appreciate you opening up. You're not alone.",
  "Take your time. I'm listening.",
  "I'm here whenever you need to talk.",
  "Your feelings matter. Let's work through this together."
];

// Smooth scroll to Chat section
function scrollToChat() {
  document.getElementById("chat").scrollIntoView({ behavior: "smooth" });
}

// Send message to chat with random AI reply
function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const userText = input.value.trim();

  if (userText === "") return; // Ignore empty inputs

  // Display user message
  const userMessage = document.createElement("p");
  userMessage.innerHTML = `<b>You:</b> ${userText}`;
  chatBox.appendChild(userMessage);

  // Select a random AI response
  const randomIndex = Math.floor(Math.random() * aiResponses.length);
  const aiMessage = document.createElement("p");
  aiMessage.innerHTML = `<b>AI:</b> ${aiResponses[randomIndex]}`;
  chatBox.appendChild(aiMessage);

  // Auto-scroll chat to the bottom
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear input field
  input.value = "";
}

// Allow sending chat message by pressing Enter (without Shift)
document.getElementById("userInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

// Save mood and display personalized message
function saveMood() {
  const moodSelect = document.getElementById("moodSelect");
  const mood = moodSelect.value;
  const moodText = moodSelect.options[moodSelect.selectedIndex].text;
  const moodLog = document.getElementById("moodLog");

  // Custom responses for each mood rating
  const moodResponses = {
    "5": "Excellent! Keep up the great mood and positivity! 😊",
    "4": "Good! Glad to hear you're feeling well. 🙂",
    "3": "Okay. Sometimes just okay is alright. Stay hopeful. 😐",
    "2": "Bad. Sorry to hear that. Remember, it's okay to seek support. 😟",
    "1": "Terrible. It’s tough now, but help is available. You’re not alone. 😢"
  };

  // Compose the mood entry message
  const moodEntry = document.createElement("p");
  moodEntry.textContent = `You recorded: ${moodText} (${new Date().toLocaleString()}) — ${moodResponses[mood] || ""}`;
  moodLog.appendChild(moodEntry);
}
