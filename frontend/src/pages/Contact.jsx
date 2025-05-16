import React, { useState } from 'react';
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleBottomCenterTextIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white/30 backdrop-blur-lg border border-gray-200 shadow-xl rounded-3xl p-6 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-4">
          📬 Share Your Feedback
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Help us improve by sharing your experience, suggestions, or issues.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center text-green-600 text-center">
            <CheckCircleIcon className="w-12 h-12 mb-2" />
            <p className="text-lg font-medium">Thank you for your valuable feedback!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <div className="relative">
                <UserIcon className="w-5 h-5 absolute top-2.5 left-3 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white/80 text-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <EnvelopeIcon className="w-5 h-5 absolute top-2.5 left-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white/80 text-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <div className="relative">
                <ChatBubbleBottomCenterTextIcon className="w-5 h-5 absolute top-3 left-3 text-gray-400" />
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-2 bg-white/80 text-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                  placeholder="Write your feedback here..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition duration-200"
              >
                <PaperAirplaneIcon className="w-5 h-5 transform rotate-45" />
                Send Feedback
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
