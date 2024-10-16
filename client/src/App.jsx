import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";
import CreateGames from "./components/create-game/CreateGame";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/games" element={<Catalog />}></Route>
                        <Route
                            path="/create-game"
                            element={<CreateGames />}
                        ></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                    </Routes>
                </main>
            </div>
        </>
    );
}

export default App;
