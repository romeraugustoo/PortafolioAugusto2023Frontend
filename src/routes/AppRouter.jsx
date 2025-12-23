import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import SolutionScreen from "../pages/SolutionScreen";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/solution/:id" element={<SolutionScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;