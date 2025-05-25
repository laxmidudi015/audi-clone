import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      {/* back to top btn  */}
      <div className="footer-btn">
        <button onClick={scrollToTop}>Back to Top ↑</button>
      </div>
      {/* sections  */}
      <section className="sec-div">
        <div>
          <h3>Models</h3>
          <ul>
            <li>All Models</li>
            <li>Model price list</li>
          </ul>
        </div>
        <div>
          <h3>Used Cars</h3>
          <ul>
            <li>Audi Approved Plus</li>
            <li>Dealer Locator</li>
          </ul>
        </div>
        <div>
          <h3>Customer Area</h3>
          <ul>
            <li>Audi Owners</li>
            <li>Audi Service</li>
            <li>myAudi Connect</li>
            <li>Audi Club Rewards</li>
            <li>Sustainability</li>
            <li>Audi Assist</li>
            <li>Book a test drive</li>
            <li>Audi Accident Management</li>
          </ul>
        </div>
        <div>
          <h3>Innovation</h3>
          <ul>
            <li>#FutureIsAnAttitude</li>
            <li>Audi Urbansphere</li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li>Careers</li>
            <li>Press</li>
            <li>Audi Shop</li>
            <li>Imprint</li>
            <li>Corporate Governance</li>
            <li>Contact / Newsletter</li>
          </ul>
        </div>
      </section>

      {/* icon of insta fb ... */}
      <div className="icons">
        <Link to={"/"}>
          <FaFacebook />
        </Link>
        <Link to={"/"}>
          {" "}
          <FaInstagram />
        </Link>
        <Link to={"/"}>
          {" "}
          <IoLogoYoutube />
        </Link>
      </div>
      <hr />
      <div className="footer-nav">
        <h6>© 2025 © AUDI AG.</h6>
        <div className="items">
          <h6>Legal</h6>
          <h6>Cookie Policy</h6>
          <h6>Press</h6>
          <h6>Cookie Settings</h6>
          <h6>Careers</h6>
        </div>
      </div>

      <div className="footer-para">
        <p>
          “The specified values of fuel consumption and emission are determined
          according to the mandatory emission test measurement specified in Rule
          115 of Central Motor Vehicle Rules 1989 (CMVR), under controlled
          conditions using reference fuel, at an agency authorized under Rule
          126 of CMVR. Fuel consumption and emission values may vary due to
          factors such as driving habits, road and traffic condition, fuel
          quality, maintenance practices, loading pattern, ambient condition and
          engineering tolerances etc.
        </p>
        <p>
          The values declared for the vehicles have been obtained from one of
          the variant tested as per Central Motor Vehicle Rule 115. Fuel
          consumption and emission value for other variants may differ. Audi
          India or its authorize dealers shall not be held liable for any
          difference in fuel consumption values, due to any of the aforesaid
          variables.
        </p>
        <p>
          Due to constant product improvement / changes in regulatory framework,
          technical specification provided herewith are subject to change
          without prior notice, customers are requested to contact Audi Call
          Centre / Audi Authorised Dealer for further details.”
        </p>
      </div>
    </div>
  );
}

export default Footer;
