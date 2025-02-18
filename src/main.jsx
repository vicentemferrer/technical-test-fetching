import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './style.css';

const root = createRoot(document.getElementById('app'));

root.render(<App />);
