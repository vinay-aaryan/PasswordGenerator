# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# React Password Generator

This is a simple and customizable password generator built using React. It allows users to generate secure passwords based on selected criteria such as length, inclusion of numbers, and special characters. It also includes a feature to copy the generated password to the clipboard.

## Features

- Generate random secure passwords
- Customize password length (6 to 20 characters)
- Option to include:
  - Numbers (0–9)
  - Special characters (!@#$%^&*+=)
- Automatically generates password on change
- Copy password to clipboard with a single click

## Technologies Used

- React (with Hooks: useState, useEffect, useCallback)
- JavaScript
- Tailwind CSS (optional, based on your styling)

## Project Structure
/src
├── App.jsx # Main React component
├── App.css # Optional custom styles
└── index.js # Application entry point



## Getting Started

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repository: git clone https://github.com/yourusername/password-generator-react.git
2. Navigate into the project directory:cd password-generator-react
3. Install dependencies: npm install
4. Run the application: npm run dev


Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

## How to Use

1. Use the slider to select the password length.
2. Use the checkboxes to include numbers and/or special characters.
3. The password will be generated automatically based on the selected criteria.
4. Click the "COPY" button to copy the password to your clipboard.

## Author 

- Your Name – [GitHub Profile](https://github.com/vinay-aaryan)
