import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Signin />} />
                <Route path="/register" element={<Signup />} />
            </Routes>
        </Router>
        
    )   
}