//import logo and social media icons
import logo from "../../assets/images/logo.svg";
import facebookIcon from "../../assets/images/icon-facebook.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import pinterestIcon from "../../assets/images/icon-pinterest.svg";
import instagramIcon from "../../assets/images/icon-instagram.svg";

//Footer component
function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          {/* Footer content organized in grid layout */}
          <div className="footer-grid">
            {/* Logo Section */}
            <div className="logo">
              <img src={logo} alt="Shortly logo" />
            </div>

            {/* Features Section */}
            <div className="footer-section">
              <h4>Features</h4>
              <ul>
                <li>
                  <a href="#">Link shortening</a>
                </li>
                <li>
                  <a href="#">Branded links</a>
                </li>
                <li>
                  <a href="#">Analytics</a>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            {/* Social Media Icons Section */}
            <div className="footer-section" aria-label="Social media links">
              <a href="#" className="social-media-icon" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#" className="social-media-icon" aria-label="Twitter">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="#" className="social-media-icon" aria-label="Pinterest">
                <img src={pinterestIcon} alt="Pinterest" />
              </a>
              <a href="#" className="social-media-icon" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Attribution Section */}
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Romana Akter</a>.
      </div>
    </div>
  );
}

export default Footer;
