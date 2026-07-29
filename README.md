# AI Learning Assistant

AI Learning Assistant is a full-stack web application that helps users study from PDF documents. Users can upload their notes or books, generate summaries, flashcards, quizzes, and track their learning progress in one place.

The application uses Google's Gemini AI to generate study material automatically.

---

## Features

- User authentication using JWT
- Upload PDF documents
- AI-generated document summaries
- Flashcard generation and review
- Quiz generation from uploaded documents
- Quiz results with score and explanations
- Learning progress dashboard
- Responsive user interface
- Secure REST APIs

---

## Tech Stack

### Frontend

- React
- React Router
- Tailwind CSS
- Axios
- React Hot Toast
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- PDF Parser
- Google Gemini API

---

## Project Structure

```
client/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   └── assets/
│
└── package.json

server/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── uploads/
└── package.json
```

---

## API Overview

### Authentication

- Register
- Login
- Get current user

### Documents

- Upload document
- Get user documents
- Delete document

### AI

- Generate summary
- Generate flashcards
- Generate quiz

### Flashcards

- View flashcards
- Review flashcard
- Mark as favorite
- Delete flashcard set

### Quizzes

- Get quizzes
- Start quiz
- Submit quiz
- View results
- Delete quiz

### Progress

- Get learning statistics
- Recent activity

---

## Screens

- Login & Registration
- Dashboard
- Document Upload
- Document Summary
- Flashcards
- Quiz
- Quiz Results
- Progress Dashboard

---

## Future Improvements

- AI chat with uploaded documents
- Voice-based quiz
- Study reminders
- Dark mode
- Document sharing
- Export notes as PDF
- Multiple AI model support

---

## Author

Developed as a learning project using the MERN stack and Google Gemini AI.