// Styles
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <div>
            <div class="menu-btn"><i class="fas fa-bars"></i></div>
            <div class="wrapper">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
            </div>
            <div class="content">
                <div class="title">
                </div>
            </div>
        </div>
    )
}

export default NavBar;
