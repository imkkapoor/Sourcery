import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import ProductSingleDisplay from "./pages/ProductSingleDisplay";
import Register from "./pages/Register";
import Success from "./pages/Success";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import { useSelector } from "react-redux";

function App() {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/products/:category" element={<ProductPage />} />
                <Route path="/product/:id" element={<ProductSingleDisplay />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/success" element={<Success />} />
                <Route path="/login" element={user? <Navigate to="/"/>:<Login /> } />
                {/* <Route path="/login" element={<Login />}/> */}
                <Route path="/register" element={user? <Navigate to="/"/>:<Register />}/>
                {/* <Route path="/register" element={<Register />}/> */}
            </Routes>
        </Router>
        
    );
}

export default App;
