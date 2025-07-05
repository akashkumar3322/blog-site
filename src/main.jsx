import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log("Clerk Publishable Key Loaded:", PUBLISHABLE_KEY);

// if (!PUBLISHABLE_KEY) {
//   throw new Error("VITE_CLERK_PUBLISHABLE_KEY is not defined. Please set it in your .env file.");
// }

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
</ClerkProvider>

);
