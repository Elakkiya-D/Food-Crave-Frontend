import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const HelpAndSupport = () => {
  const navigate = useNavigate();

  const handleFAQClick = () => {
    navigate("/faqs");
  };

  return (
    <div className="container mx-auto py-10 px-4 text-left">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">Help & Support</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl">
        Need assistance? We’re here to help! Explore the resources below or get in touch with our support team for quick and efficient solutions to your queries.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">FAQs</h2>
      <p className="text-gray-700 mb-4 max-w-2xl">
        Find answers to the most common questions about ordering, delivery, payments, and more.
      </p>
      <button
        onClick={handleFAQClick}
        className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600"
      >
        Visit FAQs
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">Contact Our Support Team</h2>
      <p className="text-gray-700 mb-4 max-w-2xl">
        If you couldn’t find the answer in our FAQs, don’t worry! Our friendly support team is ready to assist you.
      </p>
      <ul className="list-none text-gray-700 mb-8">
        <li><strong>Email:</strong> <a href="mailto:support@foodcrave.com" className="text-orange-500">support@foodcrave.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:+1234567890" className="text-orange-500">+1 234 567 890</a></li>
        <li><strong>Live Chat:</strong> <a href="/live-chat" className="text-orange-500">Start a chat</a></li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">Follow Us on Social Media</h2>
      <p className="text-gray-700 mb-4 max-w-2xl">
        Stay updated with the latest news, deals, and announcements by following us on social media:
      </p>
      <div className="flex gap-6 mb-8">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8 text-orange-500" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} className="w-8 h-8 text-orange-500" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} className="w-8 h-8 text-orange-500" />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
          <FontAwesomeIcon icon={faPinterest} className="w-8 h-8 text-orange-500" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} className="w-8 h-8 text-orange-500" />
        </a>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">Need Immediate Help?</h2>
      <p className="text-gray-700 max-w-2xl">
        Check out our live chat or call us directly for urgent issues. We’re here to make your experience as smooth as possible!
      </p>
    </div>
  );
};

export default HelpAndSupport;
