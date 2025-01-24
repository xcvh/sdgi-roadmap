import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/sdgi-roadmap' : '/'}>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
