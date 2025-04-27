import { memo } from 'react';
import { motion } from 'framer-motion';

const teamMember = {
  name: 'Chen Juzheng, CFA',
  contact: {
    phone: '+65-87216608',
    email: 'jche9112@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/chen-juzheng-cfa-709397a4/',
    connectedSince: 'Feb 2, 2015'
  }
};

const ContactCard = memo(function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
    >
      <div className="flex items-start gap-6">
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">{teamMember.name}</h3>
            </div>
            <a
              href={teamMember.contact.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-900">Contact Information</h4>
            <ul className="mt-2 space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {teamMember.contact.phone} (Mobile)
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {teamMember.contact.email}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const Contact = memo(function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600">
          Get in touch with our investment professional
        </p>
      </div>

      <ContactCard />

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Investment Opportunities</h2>
        <p className="text-gray-600 mb-6">
          Interested in our real estate investment opportunities? Feel free to reach out directly to discuss potential collaborations.
        </p>
        <p className="text-gray-600">
          For detailed investment information and property viewings, please contact us through any of the channels above.
        </p>
      </div>
    </div>
  );
});

export default Contact; 