const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Effective Date: <strong>01/12/2024</strong>
      </p>
      <p className="mb-4">
       Food Crave (“we,” “our,” or “us”) respects your privacy and is committed to protecting it
        through compliance with this policy. This Privacy Policy outlines how we collect, use, and
        share your information when you use our food order app (the “App”).
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">1. Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Personal Information:</strong> Name, email address, phone number, delivery address, and payment information.</li>
        <li><strong>Non-Personal Information:</strong> App usage data, device information, and location data.</li>
        <li><strong>Information From Third Parties:</strong> Social media profile data (if applicable).</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To process and fulfill your orders.</li>
        <li>To communicate with you about your orders and provide customer support.</li>
        <li>To enhance your app experience with personalized offers and recommendations.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">3. Sharing Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Restaurants and Delivery Partners:</strong> To facilitate and deliver your orders.</li>
        <li><strong>Third-Party Service Providers:</strong> For payment processing and app functionality.</li>
        <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">4. Data Security</h2>
      <p className="mb-4">
        We use industry-standard security measures to protect your data, but no method of
        transmission over the internet or electronic storage is completely secure.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">5. Your Rights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Access, update, or delete your personal information.</li>
        <li>Opt-out of marketing communications.</li>
        <li>Withdraw consent for data collection, where applicable.</li>
      </ul>
      <p className="mb-4">
        To exercise your rights, contact us at <strong>[Insert Contact Email]</strong>.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">6. Cookies and Tracking Technologies</h2>
      <p className="mb-4">
        We use cookies and similar technologies to improve functionality, enhance user experience,
        and analyze traffic. You can manage cookie preferences in your device settings.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">7. Third-Party Links</h2>
      <p className="mb-4">
        Our app may contain links to third-party websites. We are not responsible for their privacy
        practices.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">8. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this policy from time to time. The revised policy will be posted here with an
        updated effective date.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy, please contact us:
      </p>
      <ul className="list-disc pl-6">
      <li><strong>Email:</strong> <a href="mailto:support@foodcrave.com" className="text-orange-500">support@foodcrave.com</a></li>
      <li><strong>Phone:</strong> <a href="tel:+1234567890" className="text-orange-500">+1 234 567 890</a></li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
