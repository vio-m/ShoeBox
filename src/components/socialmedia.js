import './socialmedia.css'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';


export default function Socialmedia() {
  return (
    <div className='socialmedia-container'>
        <div className='socialmedia-title'>FOLLOW US:</div>
        <div className='socialmedia-icon-container'>
            <div className='socialmedia-icon'>
                <a href='https://www.facebook.com/facebook' target="_blank"><FacebookIcon  size='large'/></a>
            </div>
            <div className='socialmedia-icon'>
                <a href='https://www.instagram.com/instagram/' target="_blank"><InstagramIcon /></a>
            </div>
            <div className='socialmedia-icon'>
                <a href='https://twitter.com/twitter/' target="_blank"><TwitterIcon /></a>
            </div>
            <div className='socialmedia-icon'>
                <a href='https://www.pinterest.com/pinterest/' target="_blank">< PinterestIcon/></a>
            </div>
        </div>
    </div>
  )
}
