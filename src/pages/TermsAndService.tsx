const TermsOfService = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        Effective Date: <strong>01/12/2024</strong>
      </p>
      <p className="mb-4">
        Welcome to Food Crave! By accessing or using our app, you agree to be bound by these Terms
        of Service (the “Terms”). Please read them carefully before using our app.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By using our app, you acknowledge that you have read, understood, and agree to these Terms.
        If you do not agree, you must stop using the app immediately.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">2. Use of the App</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You must be at least 15 years old to use this app.</li>
        <li>Provide accurate and complete information when creating an account.</li>
        <li>Do not use the app for any unlawful or prohibited activities.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">3. Orders and Payments</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>All orders placed through the app are subject to availability and confirmation.</li>
        <li>Payment must be completed using the methods available in the app.</li>
        <li>Prices and availability are subject to change without notice.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">4. User Responsibilities</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Maintain the confidentiality of your account credentials.</li>
        <li>Ensure that your device and internet connection meet the app's requirements.</li>
        <li>Do not attempt to interfere with the app’s functionality or security.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">5. Limitation of Liability</h2>
      <p className="mb-4">
       Food Crave is not responsible for any indirect, incidental, or consequential damages
        resulting from the use of the app or services.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">6. Modifications to the Terms</h2>
      <p className="mb-4">
        We reserve the right to update or modify these Terms at any time. The revised Terms will be
        posted here with an updated effective date.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">7. Termination</h2>
      <p className="mb-4">
        We may terminate or suspend your access to the app if you violate these Terms or engage in
        any unlawful activity.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">8. Governing Law</h2>
      <p className="mb-4">
      "These Terms are governed by the laws of India. 
      Any disputes arising out of or in connection with these Terms will be subject to the exclusive jurisdiction of the courts located in , India."
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about these Terms, please contact us:
      </p>
      <ul className="list-disc pl-6">
      <li><strong>Email:</strong> <a href="mailto:support@foodcrave.com" className="text-orange-500">support@foodcrave.com</a></li>
      <li><strong>Phone:</strong> <a href="tel:+1234567890" className="text-orange-500">+1 234 567 890</a></li>
      </ul>
    </div>
  );
};

export default TermsOfService;
