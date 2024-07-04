## Worldwise

### Overview

Worldwise is a study project focused on learning and experimenting with React, TypeScript, and json-server. This project serves as a practical exercise to enhance understanding of modern web development technologies and techniques.

### Features

- **React**: Utilized for building dynamic and interactive user interfaces.
- **Next.js**: A React framework for production that makes it easy to build server-side rendered and statically generated applications.
- **TypeScript**: Implemented for type-safe JavaScript development, ensuring more robust and maintainable code.
- **json-server**: Used to create a simple and quick mock REST API for development and testing purposes.

### Main Packages

- **react**: A JavaScript library for building user interfaces.
- **react-dom**: Provides DOM-specific methods that can be used at the top level of your app to interact with the DOM.
- **typescript**: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- **json-server**: A full fake REST API with zero coding in less than 30 seconds.
- **react-router-dom**: A collection of navigational components that compose declaratively with your application.
- **leaflet**: A JavaScript library for interactive maps, providing mobile-friendly mapping functionality.

### Installation and Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/AntonOsypchuk1/worldwise.git
    cd worldwise
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the json-server:**
    ```bash
    npx json-server --watch server/cities.json --port 8000
    # or
    npm run server
    ```

4. **Run the React application:**
    ```bash
    npm start
    # or
    npm run dev
    ```

### Usage

The project showcases basic CRUD (Create, Read, Update, Delete) operations using the mock API provided by json-server. It's a sandbox environment where anybody can freely experiment with React components, state management, Next.js and TypeScript features.

### Contributions

This project is primarily for educational purposes. However, contributions and suggestions for improvement are always welcome!

### License

This project is open-source and available under the MIT License.
