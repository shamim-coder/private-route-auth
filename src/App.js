import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import Registration from "./Components/Registration/Registration";
import Orders from "./Components/Orders/Orders";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
    return (
        <div className="App container mx-auto">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/orders"
                    element={
                        <RequireAuth>
                            <Orders />
                        </RequireAuth>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
