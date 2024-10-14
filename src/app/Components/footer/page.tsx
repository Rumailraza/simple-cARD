import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaTelegram,
  FaSnapchat,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaWhatsapp />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <FaTelegram />
          </a>
          <a href="">
            <FaSnapchat />
          </a>
        </div>
        <div className="footerNav">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Information</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          Copyright &copy;2024; Designed by{" "}
          <span className="designer">RUMAIL RAZA</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;