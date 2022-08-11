import "./Footer.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaAndroid, FaApple, FaRobot } from 'react-icons/fa'


const Footer = () => {
    const iconSize = 20;
  return (
    <>
      <div className="footer-component">
        <div className="footer-wrapper">
          <div className="footer-top">
            <span>StockX. Access the Now.</span>
            <div className="footer-lists">
              <table>
                <th>Air Jordan</th>
                <tbody>
                  <tr>Air Jordan 1</tr>
                  <tr>Air Jordan Release Dates</tr>
                  <tr>Womens Jordans</tr>
                  <tr>Air Jordan 11</tr>
                  <tr>Air Jordan 4</tr>
                  <tr>Jordan 1 Mid</tr>
                </tbody>
              </table>

              <table>
                <th>Yeezy</th>
                <tbody>
                  <tr>Yeezy Boost 350</tr>
                  <tr>Yeezy Boost 350 V2</tr>
                  <tr>Yeezy Boost 700</tr>
                  <tr>Yeezy Boots</tr>
                  <tr>Yeezy Slides</tr>
                  <tr>Yeezy Foam RNNR</tr>
                </tbody>
              </table>

              <table>
                <th>Recent Updates</th>
                <tbody>
                  <tr>Best Sneakers Releasing</tr>
                  <tr>Best Running Shoes on StockX</tr>
                  <tr>Hoka Shoes</tr>
                  <tr>Xbox Series X</tr>
                  <tr>PS5</tr>
                  <tr>Salomon Shoes</tr>
                </tbody>
              </table>

              <table>
                <th>Popular Releases</th>
                <tbody>
                  <tr>Yeezy 350 Turtle Dove</tr>
                  <tr>Jordan 5 Dark Concord</tr>
                  <tr>Gucci Slides</tr>
                  <tr>adidas Samba</tr>
                  <tr>adidas Forum</tr>
                  <tr>Trae Young Shoes</tr>
                </tbody>
              </table>

              <table>
                <th>Apparel</th>
                <tbody>
                  <tr>Supreme</tr>
                  <tr>Essentials</tr>
                  <tr>Chrome Hearts</tr>
                  <tr>Vlone</tr>
                  <tr>Nike Tech Fleece</tr>
                  <tr>Yeezy GAP</tr>
                </tbody>
              </table>

              <table>
                <th>Nike</th>
                <tbody>
                  <tr>Nike Dunk</tr>
                  <tr>Nike Blazer</tr>
                  <tr>Nike Air Force 1</tr>
                  <tr>Nike Air Max 1</tr>
                  <tr>Nike SB Dunk Low</tr>
                  <tr>Nike Air Max 90</tr>
                </tbody>
              </table>
            </div>
          </div>
          <span
            className="sizepanel-divider"
            style={{ backgroundColor: "#A1A4A5" }}
          ></span>
          <div className="footer-bottom">
            <div className="bottom-currency">
              <span>United States</span>
              <span>|</span>
              <span>English</span>
              <span>|</span>
              <span>$ USD</span>
            </div>
            <div className="bottom-socials">
              <span>Find Us on Social</span>
              <span className="bottom-social">
              <FaTwitter size={iconSize}/>
              <FaFacebookF size={iconSize} />
              <FaInstagram size={iconSize} />
              <FaYoutube size={iconSize} />
              </span>
            </div>
            <div className="bottom-app">
              <span>Download Our App</span>
              <span className="bottom-apps">
              <FaApple size={iconSize} />
              <FaAndroid size={iconSize} />
              </span>
            </div>
            <div className="bottom-assist"></div>
            <span>Use Assistive Technology</span>

            <div className="bottom-detroit">
              <span><FaRobot /> Proudly Built in Detroit    </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
