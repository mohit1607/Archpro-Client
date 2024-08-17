import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FirebaseProvider } from './context/firebase/firebaseContext.tsx'
import ErrorBoundary from './ErrorBoundary.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
