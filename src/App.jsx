import { Routes, Route } from "react-router";
import Spain from "./Spain.jsx";
import Croatia from "./Croatia.jsx";
import Lithuania from "./Lithuania.jsx";
import Article from "./Article";
import Navigation from "./components/Navigation";

export default function App() {
    return (
        <div className="min-h-full">
            <Navigation />
            <main>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Article />} />
                        <Route path="/spain" element={<Spain />} />
                        <Route path="/croatia" element={<Croatia />} />
                        <Route path="/lithuania" element={<Lithuania />} />
                    </Routes>
                </div>
            </main>
        </div>
    );
}
