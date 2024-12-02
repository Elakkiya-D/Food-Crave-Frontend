import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface FAQ {
  question: string;
  answer: string;
}

const FAQPage = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpansion = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "How can I place an order?",
      answer: "To place an order, simply browse our menu, select the items you want, and proceed to checkout to complete your order."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit cards, debit cards, PayPal, and cash on delivery."
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order status in real-time through our app under 'My Orders'."
    },
    {
      question: "Can I modify my order after placing it?",
      answer: "Once an order is confirmed, it cannot be modified. Please double-check your items before confirming the order."
    },
    {
      question: "What should I do if my food is delivered late?",
      answer: "If your food is delivered later than the estimated time, please contact our customer support team immediately."
    },
    {
      question: "What do I do if I receive the wrong order?",
      answer: "If you receive the wrong order, please contact our support team immediately, and we will resolve the issue as quickly as possible."
    },
    {
      question: "How can I change my delivery address?",
      answer: "You can change your delivery address before completing your order. After placing the order, contact our support team to request a change, and we will try our best to accommodate the request."
    },
    {
      question: "Are there any delivery charges?",
      answer: "Delivery charges vary based on your location and the size of your order. You can see the delivery charge during the checkout process."
    },
    {
      question: "Can I cancel my order?",
      answer: "You can cancel your order within a limited time after placing it. Please contact our support team as soon as possible if you need to cancel your order."
    },
    {
      question: "Do you offer any discounts or promotions?",
      answer: "We offer various discounts and promotions throughout the year. Be sure to subscribe to our newsletter or follow us on social media for the latest updates on discounts."
    },
    {
      question: "How do I update my payment method?",
      answer: "To update your payment method, go to your account settings and edit the payment details. You can add or remove credit cards, PayPal, and other payment methods."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we take privacy and security seriously. All your personal information is encrypted and stored securely, and we do not share it with third parties without your consent."
    },
    {
      question: "What should I do if I encounter an issue with the app?",
      answer: "If you're facing an issue with the app, please try restarting the app. If the issue persists, contact our support team, and we'll help you resolve it."
    }
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">Frequently Asked Questions</h1>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              className="text-left text-xl font-semibold text-gray-800 w-full flex justify-between items-center"
              onClick={() => toggleExpansion(index)}
            >
              <span>{faq.question}</span>
              <FontAwesomeIcon
                icon={expanded === index ? faChevronUp : faChevronDown}
                className="text-xl"
              />
            </button>

            {expanded === index && (
              <p className="mt-4 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
