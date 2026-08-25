# Premium Currency Converter

A sleek, responsive, and modern web application built to convert currencies in real-time. Features a premium dark-mode UI with glowing neon-blue accents.

## Features

- Real-time exchange rate calculations using the ExchangeRate-API.
- Premium, modern, and dark-themed UI layout.
- Fully responsive styling that optimizes cleanly across desktop, tablet, and mobile displays.
- Quick-swap utility button to instantly invert currency selection parameters.
- Hidden API key security management configuration structure.

## Tech Stack

- HTML5
- CSS3 (Custom Properties / Flexbox)
- JavaScript (ES6+ / Fetch API)

## Getting Started

### Prerequisites

You need a free API key from [ExchangeRate-API](https://app.exchangerate-api.com).

### Installation & Setup

1. Clone this repository to your local computer.
2. Duplicate the template file `config.example.js` and rename the copy to `config.js`.
3. Open `config.js` and paste your unique API key inside the placeholder quotes:
   ```javascript
   const CONFIG = {
     API_KEY: "YOUR_ACTUAL_API_KEY_HERE",
   };
   ```
4. Launch the `index.html` file using a local development server (such as the VS Code Live Server extension) to view the project in your browser.
