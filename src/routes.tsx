import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/home';
import Layout from "./components/Shared/Layout/layout";

const AppRouter = () => {
    return (
    <BrowserRouter basename="/my-interactive-avatar">

      <Routes>
        <Route element={<Layout />}>
            <Route>
                <Route index element={<Home />} />
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
    );
}

export default AppRouter;