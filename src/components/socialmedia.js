import './socialmedia.css'
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
                <FacebookIcon size='large'/>
            </div>
            <div className='socialmedia-icon'>
                <InstagramIcon />
            </div>
            <div className='socialmedia-icon'>
                < TwitterIcon/>
            </div>
            <div className='socialmedia-icon'>
                < PinterestIcon/>
            </div>
        </div>
    </div>
  )
}
