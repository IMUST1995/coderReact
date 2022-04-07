import './ButtonNavbar.css'
import { Link } from 'react-router-dom'

const ButtonNavbar = () => {
    return(
            <ul>
                <li><button><Link to='/'>Home</Link></button></li>
                <li><button><Link to='/contact'>Contact</Link></button></li>
                <li><button><Link to='/store'>Store</Link></button></li>
                <li><button><Link to='/us'>About us</Link></button></li>
            </ul>
    )
}
export default ButtonNavbar