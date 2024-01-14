import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AppContextProvider } from './context/AppContext.tsx';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContextProvider>
    <Router>
      <App />
    </Router>
  </AppContextProvider>
);
