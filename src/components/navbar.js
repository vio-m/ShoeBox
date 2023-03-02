import './navbar.css'
import { SearchBar } from './searchbar'
import SearchOverlay from '../components/searchoverlay';
import { useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthContext";
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


export const Navbar = (props) => {
    const { user, logoutUser } = useContext(AuthContext);
    const [results, setResults] = useState(null)
    const [searchQuery, setSearchQuery] = useState('');
    const [searchOverlay, setSearchOverlay] = useState(false);
    const { cartItems, getTotalWishlistAmount } = useContext(ShopContext)
    const totalAmount = getTotalWishlistAmount();  

    let sum = 0
    const items = Object.entries(cartItems).map(
        ([key, value], index) => sum+=value
    )
    const toggleSearchOverlay = (newState) => {
        setSearchOverlay(!searchOverlay);
    };
    function handleResults(res) {
        setResults(res)
    };
    function handleChildId(id) {
        props.updateId(id)
    };

    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-wrapper'>
                    <div className='navbar-left'>
                        <Link to='/' className='logo'> Shoe Box </Link>
                    </div>
                    <div className='navbar-center'>
                        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onStateUpdate={toggleSearchOverlay} updateResults={handleResults}/>
                    </div>
                    <div className='navbar-right'>
                        <div className='links'>
                            {user ? (
                                <>
                                    <button id='logout-btn' onClick={logoutUser}>Logout</button>
                                    <Link to='/wishlist'>
                                        <FavoriteBorderOutlinedIcon  style={{ color: totalAmount > 0 ? 'red' : 'black' }} />
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                                </>
                            )}

                            { sum ? (
                                <Link to='/cart'> 
                                    <Badge badgeContent={sum} color="success">
                                        <ShoppingCartOutlinedIcon/> 
                                    </Badge>
                                </Link>
                            ):(
                                <Link to='/cart'> 
                                    <ShoppingCartOutlinedIcon />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {searchOverlay ? <SearchOverlay onStateUpdate={toggleSearchOverlay} onSendId={handleChildId} results={results}/> : <></>}
        </>
    )
}


/*

*/