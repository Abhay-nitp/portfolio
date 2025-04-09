// // Contact form submission functionality
// document.getElementById("contact-form").addEventListener("submit", function(event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     if (name && email && message) {
//         alert("Thank you for your message!");
//     } else {
//         alert("Please fill in all fields.");
//     }
// });
const predefinedQA = {
    'What is your name?': 'I am your virtual assistant.',
    'What do you do?': 'I assist users with their queries.',
    'How can I contact you?': 'You can reach me through this chat!'
};

function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    const chatIcon = document.getElementById('chat-icon');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block';
        chatIcon.style.display = 'none';
    }
}

document.getElementById('close-chat').addEventListener('click', function() {
    document.getElementById('chat-container').style.display = 'none';
    document.getElementById('chat-icon').style.display = 'flex';
});

function sendUserInput() {
    const inputField = document.getElementById('user-input');
    const message = inputField.value.trim();
    if (message) {
        addMessage(message, true);
        if (predefinedQA[message]) {
            setTimeout(() => addMessage(predefinedQA[message], false), 500);
        } else {
            setTimeout(() => addMessage("I'm not sure how to answer that.", false), 500);
        }
        inputField.value = '';
        hideSuggestions();
    }
}
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendUserInput();
    }
}
function addMessage(text, isUser) {
    const chatBody = document.getElementById('chat-body');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    messageDiv.style.background = isUser ? '#dcf8c6' : '#fff';
    messageDiv.style.padding = '5px';
    messageDiv.style.margin = '5px';
    messageDiv.style.borderRadius = '5px';
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}
function showSuggestions() {
    const input = document.getElementById('user-input').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';
    const filtered = Object.keys(predefinedQA).filter(q => q.toLowerCase().includes(input));
    if (filtered.length > 0 && input.length > 0) {
        filtered.forEach(q => {
            const div = document.createElement('div');
            div.textContent = q;
            div.classList.add('suggestion-item');
            div.onclick = () => {
                document.getElementById('user-input').value = q;
                hideSuggestions();
            };
            suggestions.appendChild(div);
        });
        suggestions.style.display = 'flex';
    } else {
        hideSuggestions();
    }
}
function hideSuggestions() {
    document.getElementById('suggestions').style.display = 'none';
}