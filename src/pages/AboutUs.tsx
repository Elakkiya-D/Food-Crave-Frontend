const AboutUs = () => {
    return (
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-orange-500 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <span className="font-bold">foodcrave.com</span>, your one-stop destination for discovering, ordering, and enjoying the best culinary experiences. Whether you’re in the mood for a quick snack or a gourmet meal, we connect you with the finest restaurants and eateries near you.
        </p>
  
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          At <span className="font-bold">foodcrave.com</span>, our mission is simple: to make your dining experience delightful and hassle-free. We strive to bring together food enthusiasts and local businesses by providing a seamless platform for ordering and delivery.
        </p>
  
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Easy-to-use platform for browsing and ordering food.</li>
          <li>Wide selection of restaurants and cuisines.</li>
          <li>Exclusive deals, offers, and discounts.</li>
          <li>Fast and reliable delivery service.</li>
          <li>Secure payment options to ensure your peace of mind.</li>
        </ul>
  
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Journey</h2>
        <p className="text-gray-700 mb-4">
          Founded in [Insert Year], we started with a vision to revolutionize the way people enjoy food. Over the years, we’ve grown into a trusted name in the food delivery industry, serving thousands of happy customers daily.
        </p>
  
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-4">
          Have questions, feedback, or suggestions? We’d love to hear from you! Feel free to reach out to us anytime at:
        </p>
        <ul className="list-none text-gray-700">
          <li><strong>Email:</strong> <a href="mailto:support@foodcrave.com" className="text-orange-500">support@foodcrave.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+1234567890" className="text-orange-500">+1 234 567 890</a></li>
        </ul>
  
        <p className="text-gray-700 mt-8">
          Thank you for choosing <span className="font-bold">foodcrave.com</span>. We’re excited to serve you and be a part of your culinary journey!
        </p>
      </div>
    );
  };
  
  export default AboutUs;
  