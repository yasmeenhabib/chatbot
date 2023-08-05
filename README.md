<br/>
<p align="center">
  <h3 align="center">Jazzbot</h3>

  <p align="center">
    Your Friendly Assistant for All Things Jazz!
    <br/>
    <br/>
    <a href="https://github.com/yasmeenhabib/Jazzbot"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/yasmeenhabib/Jazzbot">View Demo</a>
    .
    <a href="https://github.com/yasmeenhabib/Jazzbot/issues">Report Bug</a>
    .
    <a href="https://github.com/yasmeenhabib/Jazzbot/issues">Request Feature</a>
  </p>
</p>



## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Customization](#customization)
  * [Dependencies](#dependencies)
  * [Features](#features)
* [Usage](#usage)
* [Contributing](#contributing)


## About The Project

![Screen Shot](images/screenshot.png)

Jazz Bot is a simple chatbot designed to interact with users and provide responses based on predefined messages and user input. It can handle greetings, hiring inquiries, portfolio requests, weather information, and even tell jokes!

## Built With

HTML, CSS, and JavaScript for the front-end user interface.
OpenWeatherMap API to fetch real-time weather data.
JokeAPI to generate random jokes.

* [JokeAPI](https://v2.jokeapi.dev/joke/Any)
* [OpenWeatherMap API](https://api.openweathermap.org/data/2.5/weather)

## Getting Started

To run the ChatBot locally, follow these steps:

Clone the repository to your local machine using Git or download the ZIP file directly.

Navigate to the project folder containing the index.html file.
Replace the placeholders in the JavaScript code with your API keys, if applicable. For the weather feature, you need to get an API key from OpenWeatherMap.
Customize the bot's predefined messages and responses based on your requirements (optional).

Save the changes and open your web page. The Jazz Bot should be visible and ready to interact with users.

### Customization

You can easily customize Jazz Bot to suit your specific needs. Here are some customization options:

Modify the bot's greetings and initial messages.
Edit the predefined messages to provide different responses for various user interactions.
Customize the bot's responses to user messages in the getBotResponses function.
Change the predefined messages for the "Tell me a joke" and "A weather bot" features.
Add more custom predefined messages to provide a richer user experience.
Style the chat interface to match your website's design.

### Dependencies

Jazz Bot has the following dependencies:

OpenWeatherMap API: Jazz Bot uses this API to fetch real-time weather information for a specified city.
Please note that you need to obtain an API key from OpenWeatherMap to use the weather feature.

### Features

Jazz Bot comes with the following features:

Displays bot greetings and welcomes users to the chat.
Provides predefined responses for messages like hiring inquiries, portfolio requests, etc.
Handles user messages and responds with appropriate bot messages.
Responds with a random joke when the user asks for one.
Fetches real-time weather information for a specified city using the OpenWeatherMap API.

## Usage

Jazz Bot is designed to interact with users through a chat interface. Users can click on predefined messages to trigger responses, and the bot will also respond to user input. Here's how you can use Jazz Bot:

When the page loads, Jazz Bot displays its greetings and an introductory message.

The bot shows a series of predefined messages that users can click on to get specific responses.

Users can also type their messages to interact with the bot. The bot will respond based on the content of the user's message.

To trigger the "Tell me a joke" feature, the user can click on the predefined message "Tell me a joke."

To get the weather information, the user can click on the predefined message "A weather bot" and provide the city name when prompted.

The bot will continue to display predefined messages and respond to user input until the "Close" button is clicked.

## Contributing

We welcome contributions to Jazz Bot. If you find any issues or have ideas for improvements, feel free to create a pull request or submit an issue on the project's GitHub repository.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


