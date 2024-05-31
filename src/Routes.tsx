import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Signin />} />
                <Route path="/register" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )   
}