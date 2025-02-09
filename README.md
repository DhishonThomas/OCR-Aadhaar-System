# OCR-Aadhaar-System

Welcome to the **OCR-Aadhaar-System**! This project is a MERN stack application (without a database) designed to extract and process text from Aadhaar card images (front and back). It leverages cutting-edge technologies like Tesseract.js for OCR and Google Generative AI for formatting extracted data into a structured format.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Overview

The OCR-Aadhaar-System allows users to upload front and back images of an Aadhaar card, extract the text using OCR (Optical Character Recognition), and format it into a structured JSON object using AI.

This project demonstrates the use of React for the frontend and Node.js with Express for the backend. The frontend enables users to interact with the system by uploading images and receiving extracted information. The backend processes the uploaded images, extracts text using **Tesseract.js**, and structures the data using **Google Generative AI**.

---

## ✨ Features

- Upload front and back images of an Aadhaar card.
- Extract raw text from uploaded images using **Tesseract.js**.
- Enhance image clarity with **Sharp** before processing.
- Convert extracted text into a structured format using **Google Generative AI**.
- Error handling for file uploads and processing failures.
- Intuitive frontend interface built with **React**.

---

## 🛠️ Technologies Used

### Frontend
- **React**: For building the user interface.
- **React-Loader-Spinner**: To show a loader during processing.
- **Axios**: For making API calls.

### Backend
- **Node.js**: Backend runtime environment.
- **Express**: Web framework for handling routes and requests.
- **Tesseract.js**: For extracting text from images.
- **Multer**: For handling image uploads.
- **Sharp**: For image preprocessing (resizing and improving clarity).
- **Google Generative AI**: To parse and structure extracted text.

---

## 📂 Project Structure

```plaintext
OCR-Aadhaar-System/
├── client/                # Frontend application
│   ├── src/
│   │   ├── components/    # React components (AadhaarResponse, AadhaarJson)
│   │   ├── App.tsx        # Main frontend file
│   │   └── ...            # Other frontend files
│   └── package.json       # Frontend dependencies
├── server/                # Backend application
│   ├── app/
│   │   ├── controller/    # Logic for handling image uploads and processing
│   │   ├── routes/        # API routes
│   │   └── ...            # Other backend files
│   └── package.json       # Backend dependencies
├── .env                   # Environment variables for both frontend and backend
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16+)
- **npm** (v8+)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DhishonThomas/OCR-Aadhaar-System.git
   cd OCR-Aadhaar-System
   ```

2. Install dependencies for the frontend and backend:
   ```bash
   # Frontend
   cd client
   npm install
   cd ..

   # Backend
   cd server
   npm install
   ```

---

## ⚙️ Environment Variables

Create a `.env` file in both `client/` and `server/` directories and define the following variables:

### Frontend `.env`:
```plaintext
VITE_PORT=5173
VITE_SERVER_URL=http://localhost:2000
```

### Backend `.env`:
```plaintext
PORT=2000
AI_KEY=<Your_Google_Generative_AI_Key>
MODEL=gemini-1.5-flash
```

Replace `<Your_Google_Generative_AI_Key>` with your actual key from Google Generative AI.

---

## 🖥️ Usage

### Start the application

1. Run the backend:
   ```bash
   cd server
   npm start
   ```

2. Run the frontend:
   ```bash
   cd client
   npm run dev
   ```

3. Open your browser and visit `http://localhost:5173`.

---

## 🎮 How It Works

1. Upload the **front** and **back** images of an Aadhaar card.
2. The frontend sends the images to the backend via an API call.
3. The backend processes the images:
   - **Tesseract.js** extracts text from the images.
   - **Sharp** enhances the image quality for better text extraction.
   - The extracted text is sent to **Google Generative AI** to structure the text into a JSON format.
4. The frontend displays both the raw extracted text and the structured JSON data.

---

## 💻 Frontend Commands

- Start the development server:
  ```bash
  npm run dev
  ```

- Build the project:
  ```bash
  npm run build
  ```

---

## 🌐 Backend Commands

- Start the server:
  ```bash
  npm start
  ```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---
