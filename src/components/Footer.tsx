import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-orange-500 py-10 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

      <div>
      <div className="flex items-center">
        <img 
          src="/foddcraveicon.png" 
          alt="Food Crave Icon" 
          className="w-8 h-8 mr-4" />
        <h3 className="text-3xl font-bold tracking-tight mb-4">foodcrave.com</h3>
      </div>
      <p className="text-sm">
        Craving good food? We’ve got you covered with the best restaurants and deals near you.
      </p>
    </div>


        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-2">
            <li><Link to="/help-support">Help & Support</Link></li>
            <li><a href="mailto:support@foodcrave.com">support@foodcrave.com</a></li>
            <li><a href="tel:+1234567890">+1 234 567 890</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Company</h2>
          <ul className="space-y-2">
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>
                <div>
          <h2 className="text-xl font-bold mb-4">Social Links</h2>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faPinterest} size="lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white/50 pt-4 text-center text-sm">
        © {new Date().getFullYear()} foodcrave.com. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
