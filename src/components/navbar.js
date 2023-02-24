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
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';


export const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const LOGO = ['FootSteps','ShoeHub','SoleSearch','StepUp','Shoe Box',
    'WalkInStyle','ShoeSational','SoleMate','FootPrints','ShoeFrenzy']
    const [randomLogo, setRandomLogo] = useState("Shoozee");
    const [results, setResults] = useState(null)
    const [searchQuery, setSearchQuery] = useState('');
    const [searchOverlay, setSearchOverlay] = useState(false);
    const { cartItems } = useContext(ShopContext)  
    const [clicked, setClicked] = useState(false);

    let sum = 0
    const items = Object.entries(cartItems).map(
        ([key, value], index) => sum+=value
    )

    const changeLogo = () => {
        const randomIndex = Math.floor(Math.random() * LOGO.length);
        setRandomLogo(LOGO[randomIndex]);
    };

    const toggleSearchOverlay = (newState) => {
        setSearchOverlay(!searchOverlay);
    };

    function handleResults(res) {
        setResults(res)
    };


    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-wrapper'>
                    <div className='navbar-left'>
                        <Link to='/' className='logo' onClick={changeLogo}> {randomLogo} </Link>
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
                                        <FavoriteBorderOutlinedIcon  style={{ color: clicked ? 'red' : 'black' }} onClick={() => setClicked(!clicked)}/>
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

            {searchOverlay ? <SearchOverlay onStateUpdate={toggleSearchOverlay} results={results}/> : <></>}
        </>
    )
}


/*
<Link to='/'><AttachMoneyOutlinedIcon/></Link>

*/