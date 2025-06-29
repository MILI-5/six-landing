import React, { useRef, useState } from 'react';

const faqs = [
  {
    question: 'Are your products suitable for all skin types?',
    answer: 'Yes, our products are formulated to be gentle and effective for all skin types, including sensitive skin.',
  },
  {
    question: 'Are your products cruelty-free?',
    answer: 'Absolutely! We never test on animals and are committed to cruelty-free practices.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping typically takes 3-5 business days within the country and 7-14 days internationally.',
  },
  {
    question: 'Can I return a product if I am not satisfied?',
    answer: 'Yes, we offer a 30-day satisfaction guarantee. Please contact our support for returns.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="w-full max-w-2xl mx-auto py-12 px-4 md:px-0">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 focus:outline-none hover:bg-green-50 transition-colors duration-200"
              onClick={() => toggleFAQ(idx)}
              aria-expanded={openIndex === idx}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              ref={(el) => {
                answerRefs.current[idx] = el;
              }}
              className="px-6 overflow-hidden transition-all duration-500 ease-in-out"
              style={{ 
                maxHeight: openIndex === idx ? '200px' : '0px',
                opacity: openIndex === idx ? 1 : 0,
                paddingTop: openIndex === idx ? '16px' : '0px',
                paddingBottom: openIndex === idx ? '16px' : '0px'
              }}
            >
              <div className="text-gray-600 text-base">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; 