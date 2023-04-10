import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./styles/Global.styled.js";
import {theme} from "./styles/Theme.styled.js";
import AppRouter from "./routes/AppRouter.jsx";
import {AppProvider} from "./store/context.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <AppRouter>
                    <App/>
                </AppRouter>
            </ThemeProvider>
        </AppProvider>
    </React.StrictMode>,
)