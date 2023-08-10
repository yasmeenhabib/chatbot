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
    "Looking for your portfolio",
    "Tell me a joke"
];

// Flag to track the current interaction mode
let interactionMode = "predefined";

function displayBotMessage(message, className, delay) {
    setTimeout(() => {
        const botMessageElement = createMessageElement(className, message);
        chatDisplay.appendChild(botMessageElement);
        scrollToLatestMessage();
    }, delay);
}

// ... (other functions, like createMessageElement and scrollToLatestMessage)

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

    if (message.toLowerCase().includes("tell me a joke")) {
        interactionMode = "joke";
        handleJokeInteraction();
    } else if (message.toLowerCase().includes("looking for your portfolio")) {
        interactionMode = "portfolio";
        handlePortfolioInteraction();
    } else if (message.toLowerCase().includes("we'd like to hire you")) {
        interactionMode = "hire";
        handleHireInteraction();
    } else {
        handleUserMessage(message);
    }
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
function handleJokeInteraction() {
    fetchJoke().then((joke) => {
        displayBotMessage(joke, "bot-message", 500);

        // Display custom predefined messages after a slight delay
        setTimeout(() => {
            const customPredefinedMessages = [
                "One more",
                "That's enough"
            ];

            customPredefinedMessages.forEach((message, index) => {
                setTimeout(() => {
                    const customPredefinedMessageElement = createMessageElement("predefined-message", message);
                    chatDisplay.appendChild(customPredefinedMessageElement);
                    scrollToLatestMessage();

                    customPredefinedMessageElement.addEventListener("click", () => {
                        handleCustomPredefinedMessage(customPredefinedMessageElement, message);
                    });
                }, 1000 * index);
            });
        }, 1000); // Adjust the delay as needed
    });
}

function getBotResponses(userMessage) {
    const responses = [];
    if (userMessage.toLowerCase().includes("hello")) {
        responses.push("Hello!");
        responses.push("Thanks for saying hi 😁");
        responses.push("I hope you've enjoyed browsing my work");
        responses.push("Can I help you with anything else?");
    } else {
        responses.push("I'm a simple bot and don't know how to respond!");
    }
    return responses;
}
// ... (other functions, like handlePredefinedMessage, handleJokeInteraction, handleUserMessage, etc.)
function handleHireInteraction() {
    // Display second-level interaction for hiring
const botResponses = [
        "Ok, great!",
        "Exciting times🕺",
        "Send me a message and let's chat further!",
    ];

    let responseDelay = 500;
    botResponses.forEach((response) => {
        displayBotMessage(response, "bot-message", responseDelay);
        responseDelay += 1000;
    });


    setTimeout(() => {
        const customPredefinedMessages = [
            "Connect on WhatsApp",
            "Other options"
        ];

        customPredefinedMessages.forEach((message, index) => {
            setTimeout(() => {
                const customPredefinedMessageElement = createMessageElement("predefined-message", message);
                chatDisplay.appendChild(customPredefinedMessageElement);
                scrollToLatestMessage();

                customPredefinedMessageElement.addEventListener("click", () => {
                    handleCustomPredefinedMessage(customPredefinedMessageElement, message);
                });
            }, 1000 * index);
        });
    }, 1000 * botResponses.length); // Adjust the delay as needed
}

function handlePortfolioInteraction() {
    const botResponses = [
        "My original portfolio is available for purchase!",
        "I provide the full HTML & CSS of the original portfolio, along with a new dark mode 😎, and the JS files",
        "I can also help you with CV and Github readme profile",
        "To learn more about the portfolio, visit the below link!"
    ];

    let responseDelay = 500;
    botResponses.forEach((response) => {
        displayBotMessage(response, "bot-message", responseDelay);
        responseDelay += 1000;
    });

    // Show custom predefined messages after bot responses
    setTimeout(() => {
        const customPredefinedMessages = [
            "Get portfolio",
            "Other options"
        ];

        customPredefinedMessages.forEach((message, index) => {
            setTimeout(() => {
                const customPredefinedMessageElement = createMessageElement("predefined-message", message);
                chatDisplay.appendChild(customPredefinedMessageElement);
                scrollToLatestMessage();

                customPredefinedMessageElement.addEventListener("click", () => {
                    handleCustomPredefinedMessage(customPredefinedMessageElement, message);
                });
            }, 1000 * index);
        });
    }, 1000 * botResponses.length); // Adjust the delay as needed
}

function handleCustomPredefinedMessage(messageElement, message) {
    messageElement.classList.remove("predefined-message");
    messageElement.classList.add("user-message");

    let botResponse = "";

    if (interactionMode === "joke" && message.toLowerCase() === "one more") {
        handleJokeInteraction();
    } else if (interactionMode === "portfolio" && message.toLowerCase() === "get portfolio") {
        // Handle the "Get portfolio" action
       window.open("https://your-portfolio-url.com", "_blank");
       showPredefinedMessages(); // Call the correct function for the portfolio interaction
    } else if (interactionMode === "hire" && message.toLowerCase() === "connect on whatsapp") {
        // Handle the "Connect on WhatsApp" action
        window.open("https://wa.me/your-phone-number", "_blank");
        showPredefinedMessages(); // Call the correct function for the hire interaction
    } 

if (
        (interactionMode === "joke" && message.toLowerCase() === "that's enough") ||
        (interactionMode === "portfolio" && message.toLowerCase() === "other options") ||
        (interactionMode === "hire" && message.toLowerCase() === "other options")
    ) {
        interactionMode = "predefined";
        botResponse = "Here you go!";
        displayBotMessage(botResponse, "bot-message", 0);
         setTimeout(() => {
            showPredefinedMessages();
        }, 1000);
}
    const otherPredefinedMessages = chatDisplay.querySelectorAll(".predefined-message");
        otherPredefinedMessages.forEach((element) => {
            if (element !== messageElement) {
                chatDisplay.removeChild(element);
            }
        });
}        


// Function to fetch a random joke from "icanhazdadjoke" API
async function fetchJoke() {
    const jokeResponse = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    });
    const jokeData = await jokeResponse.json();
    return jokeData.joke;
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
