import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import { Global } from 'styles/Global';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
    <Global />
  </ThemeProvider>
);
