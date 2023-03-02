import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components/navbar";
import { Shop } from './pages/shop/shop'
import { Login } from "./pages/auth/loginPage";
import { Register } from "./pages/auth/registerPage";
import { Detail } from './pages/detail/detail'
import { CategoryPage } from './pages/categories/categorypage'
import { BrandsPage } from './pages/brands/brandspage'
import { Cart } from './pages/cart/cart'
import { WishList } from './pages/wish/wishlist';
import { ShopContextProvider } from './context/shopContext';
import { DataContextProvider } from './context/dataContext';
import { AuthProvider } from "./context/AuthContext";
import { Checkout } from './pages/checkout/checkout';
import { Order } from './pages/order/order';
import { Announcement } from './components/announcement';


function App() {
    const [searchId, setSearchId] = useState(null);
    const updateId = (newId) => {
        setSearchId(newId);
    };
    const [checkoutResponse, setCheckoutResponse] = useState(null)
    function handleCheckoutResponse(res) {
        setCheckoutResponse(res)
    };
    
    return (
        <div className="App">
        <DataContextProvider>                
        <ShopContextProvider>
        <Router>
            <AuthProvider>
            <Announcement />
            <Navbar updateId={updateId}/>
                <Routes>
                    <Route path="/" element={<Shop searchId={searchId}/>}/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/detail/:id" element={<Detail />}/>
                    <Route path="/category/:id" element={<CategoryPage />}/>
                    <Route path="/brand/:id" element={<BrandsPage />}/>
                    <Route path="/cart" element={<Cart />}/>
                    <Route path="/wishlist" element={<WishList />}/>
                    <Route path="/checkout" element={<Checkout onSendResponse={handleCheckoutResponse}/>}/>
                    <Route path="/order/:id" element={<Order data={checkoutResponse}/>}/>
                </Routes>
            </AuthProvider>
        </Router>
        </ShopContextProvider>
        </DataContextProvider>
        </div>
    );
}

export default App;
