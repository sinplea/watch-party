<br />
<p align="center">
  <h3 align="center">Watch Party</h3>

  <p align="center">
    A frontend design project for a shared YouTube experience
    <br />
    <a href="https://github.com/sinplea/watch-party"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/sinplea/watch-party/issues">Report Bug</a>
    ·
    <a href="https://github.com/sinplea/watch-party/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
  - [Early Designs](#early-designs)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
  - [High Priority](#high-priority)
  - [Medium Priority](#medium-priority)
  - [Low Priority](#low-priority)
- [License](#license)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->
## About The Project

[Screenshot](images/screenshot.png)

Watch Party is a mock frontend design project for a site where you would be able to watch YouTube in sync with your friends. This project was made to practice using emerging frontend tools and test my design skills. I wanted to focus primarly on responsive design and unfamilar frontend tools. Currently, watch party is not deployed because it is missing the integral server code it would require to function. Maybe soon!

### Built With

* [Svelte](https://github.com/sveltejs/svelte)
* [Typescript](https://github.com/microsoft/TypeScript)
* [Jest](https://github.com/facebook/jest)
* [Storybook](https://github.com/storybookjs/storybook)

### Early Designs

To work on my design skills I made low and medium fidelity mockups. I tried to follow these as closely as possible in order to get familiar with a designers workflow.

* [Low Fidelity](images/low-fidelity.png)
* [Medium Fidelity](images/medium-fidelity.png)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

1. npm
```sh
npm install npm@latest -g
```
2. YouTube API Key
Add YouTube API environment variables to a .env file. (NOTE: these vars are exposed on the client. In production, these vars should be retrieved from a secure server).

To get an API key. Follow these [instructions.](https://developers.google.com/youtube/v3/getting-started)
```sh
echo 'API_KEY=YOUR_KEY_HERE' >> .env
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/sinplea/watch-party.git
```
2. Install NPM packages
```sh
cd watch-party
npm install
```

## Usage

1. Run the dev server
```sh
npm run dev
```
2. Navigate to localhost:5000
3. (Optional) Run storybook (on localhost:6006)
```sh
npm run storybook
```
4. (Optional) Run tests
```sh
npm run test
```

<!-- ROADMAP -->
## Roadmap

Watch Party is mostly a design project to test my ability to learn new frontend skills. For that reason, additional updates will be centered around using this project as a way to learn new and interesting frontend technologies *(or expanding on the ones already used)*

### High Priority

- Better test coverage
- Better storybook usage, coverage, and documentation

### Medium Priority

- UserList.svelte
  - A component that would enable a user to see the names of all the other users in the current room.
- UserMessageDecoder.svelte
  - A compontnet that would allow special messages to be sent in text chats. (Things like replies to other users and timestamps that could be used to control the video).
- Custom Video Controls
  - Play/Pause
  - Scan
  - Back 10 seconds
  - Forward 10 seconds
  - Desync/Resync
  - View Original
- General UX improvements
  - CSS changes on hover
  - Clicking outside the search result window should hide the search results.
  - Landscape mobile design

### Low Priority

- Node.js, WebRTC, Websockets based node server to make the site completely functional
- Deployment (likely with [PM2](https://github.com/Unitech/pm2))
- Custom Logo and Favicon (designed in Adobe Illustrator)
- Move to [Sapper](https://github.com/sveltejs/sapper) simply to learn the svelte's team preferred way to structuring and developing web apps.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Alex Werner - [@sinplea_](https://twitter.com/@sinplea_) - alexanderdwerner@gmail.com

Project Link: [https://github.com/sinplea/watch-party](https://github.com/sinplea/watch-party)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[stars-shield]: https://img.shields.io/github/stars/sinplea/repo.svg?style=flat-square
[product-screenshot]: images/screenshot.png