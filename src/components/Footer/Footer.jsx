import "./Footer.css";
import logo from "/logo2.png";

const Footer = () => {
  return (
    <footer>
      <div className="left-footer">
        <img src={logo} alt="logo" />
        <p>
          Our vision is to make all people
          <br /> the best place to live for them.
        </p>
      </div>

      <div className="right-footer">
        <h3>Information</h3>
        <p>145 New York, FL 5467, USA</p>
        <ul>
          <li>Property</li>
          <li>Services</li>
          <li>Product</li>
          <li>About Us</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
