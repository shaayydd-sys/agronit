import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Global ripple on .btn clicks
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn');
  if (!btn) return;
  const dot = document.createElement('span');
  dot.className = 'ripple-dot';
  const rect = btn.getBoundingClientRect();
  dot.style.left = `${e.clientX - rect.left}px`;
  dot.style.top = `${e.clientY - rect.top}px`;
  btn.appendChild(dot);
  dot.addEventListener('animationend', () => dot.remove());
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
