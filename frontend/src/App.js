import { Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Register from "./pages/Register/Register.jsx";
import About from "./pages/About/About.jsx";
import Help from "./pages/Help/Help.jsx";

function App() {

	return (
        <>
            <Routes>
				<Route path="" element={<Login />} />
                <Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </>
	);
}

export default App;
