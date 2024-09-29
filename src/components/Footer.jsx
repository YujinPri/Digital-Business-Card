import facebookIcon from '../assets/facebook-icon.png'
import githubIcon from '../assets/github-icon.png'

export default function Footer() {
    return (
        <footer className="footer">
            <a href="">
              <button className='footer-fb-btn'>
                <img src={facebookIcon} alt="Facebook Icon" />
              </button>
            </a>

            <a href="https://github.com/YujinPri">
              <button className='footer-github-btn'>
                <img src={githubIcon} alt="Github Icon" />
              </button>
            </a>


        </footer>
    )
}