import React, { useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AppRouter } from './router/AppRouter'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { ReCaptchaComponent } from './components/ReCaptcha'

const date = new Date().getFullYear()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey='6Ler8g0kAAAAAGLJFJU6LWIjQqcL-YVQRYYLmeN0'>
      <BrowserRouter>
        <AppRouter />
        <p>
          &copy; {date}{' '}
          <small>
            This site is protected by reCAPTCHA and the Google{' '}
            <a href='https://policies.google.com/privacy' target='_blank'>
              Privacy Policy
            </a>{' '}
            and
            <a href='https://policies.google.com/terms' target='_blank'>
              Terms of Service
            </a>{' '}
            apply.
          </small>
        </p>
      </BrowserRouter>
    </GoogleReCaptchaProvider>
  </React.StrictMode>
)
