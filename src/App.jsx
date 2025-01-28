import { Routes, Route } from "react-router-dom";
import Spain from "./Spain.jsx";
import Croatia from "./Croatia.jsx";
import Lithuania from "./Lithuania.jsx";
import Article from "./Article";
import Navigation from "./components/Navigation";

export default function App() {
    return (
        <div className="min-h-full bg-neutral-100">
            <Navigation />
            <main className="pb-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
