import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { SnackbarProvider } from 'notistack';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
    <React.StrictMode>
        <SnackbarProvider>
            <CssBaseline />
            <App />
        </SnackbarProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
