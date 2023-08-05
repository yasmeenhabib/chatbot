const chatDisplay = document.getElementById("chat-display");
const closeButton = document.querySelector(".close-button");
const chatContainer = document.querySelector(".chat-container");
// Bot greetings
const botGreetings = [
    "Hi!",
    "I'm Jazz Bot. I'm here to help you with any questions you might have about Jazz work.",
    "How can I help you today?"
];

// Predefined messages as an array
const predefinedMessages = [
    "We'd like to hire you",
    "Just saying hello!",
    "Looking for your portfolio"
    // "other options"
    // Add more predefined messages as needed
];

function displayBotMessage(message, className, delay) {
    setTimeout(() => {
        const botMessageElement = createMessageElement(className, message);
        chatDisplay.appendChild(botMessageElement);
        scrollToLatestMessage();
    }, delay);
}

function createMessageElement(className, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message-container", className);
    const messageContent = document.createElement("div");
    messageContent.textContent = message;
    messageElement.appendChild(messageContent);
    return messageElement;
}

function scrollToLatestMessage() {
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

function showBotGreetings() {
    let messageDelay = 1000;
    botGreetings.forEach((message) => {
        displayBotMessage(message, "bot-message", messageDelay);
        messageDelay += 1000;
    });

    // Show predefined messages as bot messages after the bot greetings are displayed
    setTimeout(() => {
        showPredefinedMessages();
    }, messageDelay);
}

function showPredefinedMessages() {
    predefinedMessages.forEach((message, index) => {
        setTimeout(() => {
            const predefinedMessageElement = createMessageElement("predefined-message", message);
            chatDisplay.appendChild(predefinedMessageElement);
            scrollToLatestMessage();

            predefinedMessageElement.addEventListener("click", () => {
                handlePredefinedMessage(predefinedMessageElement, message);
            });
        }, 1000 * index);
    });
}

function handlePredefinedMessage(messageElement, message) {
    messageElement.classList.remove("predefined-message");
    messageElement.classList.add("user-message");
    handleUserMessage(message);

    
    // Remove the other predefined messages from the chat display
    const otherPredefinedMessages = chatDisplay.querySelectorAll(".predefined-message");
    otherPredefinedMessages.forEach((element) => {
        if (element !== messageElement) {
            chatDisplay.removeChild(element);
        }
    });
}

function handleUserMessage(message) {
    // Bot responses based on user message
    const botResponses = getBotResponses(message);

    // Display bot responses after a slight delay
    let responseDelay = 500;
    botResponses.forEach((response) => {
        displayBotMessage(response, "bot-message", responseDelay);
        responseDelay += 1000;
    });

    // Show predefined messages again after bot response
    setTimeout(() => {
        showPredefinedMessages();
    }, 1000 * botResponses.length);

    scrollToLatestMessage();
}

function getBotResponses(userMessage) {
    const responses = [];
    if (userMessage.toLowerCase().includes("hello")) {
        responses.push("Hello!");
        responses.push("Thanks for saying hi 😁");
        responses.push("I hope you've enjoyed browsing my work");
        responses.push("Can I help you with anything else?");

    } else if (userMessage.toLowerCase().includes("hire")) {
        responses.push("Ok, great!");
        responses.push("Exciting times🕺");
        responses.push("Send me a message and lets chat further!");

    }  else if (userMessage.toLowerCase().includes("portfolio")) {
        responses.push("My original portfolio is available for purchase!");
        responses.push("I provide the full HTML & CSS of the original portfolio, along with a new dark mode 😎, and the JS files");
         responses.push("I can also help you with CV and Github readme profile");
        responses.push("To learn more about the portfolio, visit the below link!");

    }else if (userMessage.toLowerCase().includes("other")) {
        responses.push("Ok, here you go");
    } else {
        responses.push("I'm a simple bot and don't know how to respond!");
    }
    return responses;
}

// Show bot greetings when the page loads
showBotGreetings();

// Scroll to the latest message when the page loads
scrollToLatestMessage();


function hideChat() {
    chatContainer.style.display = "none";
}

// Add event listener to close button to hide the chat
closeButton.addEventListener("click", hideChat);
