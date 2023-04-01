const chatLog = document.querySelector('.chat-log');
const questionSelect = document.querySelector('#question-select');
const sendBtn = document.querySelector('#send-btn');

const chatbotResponses = {
  '1': 'My name is Chatbot.',
  '2': 'I am doing well, thank you for asking.',
  '3': 'My favorite color is blue.'
};

sendBtn.addEventListener('click', () => {
  const selectedQuestion = questionSelect.value;
  const response = chatbotResponses[selectedQuestion];
  if (response) {
    const chatLogMessage = document.createElement('div');
    chatLogMessage.classList.add('chat-log-message');
    chatLogMessage.innerHTML = `<div class="chat-bot-message">${response}</div>`;
    chatLog.appendChild(chatLogMessage);
  }
});