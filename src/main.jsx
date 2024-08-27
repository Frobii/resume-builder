import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ResumeBuilder from './ResumeBuilder';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResumeBuilder/>
  </StrictMode>,
)
