'use client';
import { useState } from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      console.error('Submission failed');
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again.');
  }
};


  return ( 
    <div className="relative">      
      {/* Top background (gray) */}
      <div className="bg-color-02 h-40 w-full"></div>
      
      {/* Bottom background (white) */}
      <div className="bg-white h-[300px] w-full"></div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4"> 
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto mb-10 p-8 bg-white shadow-md rounded-lg"
        >
          {submitted ? (
            <div className="text-green-600 font-semibold"><FaRegCircleCheck className="inline"/> Thanks! We’ll be in touch soon.</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Type your full name"
                    required
                    className="mt-1 block w-full p-4 rounded-md bg-gray-200 border-gray-300 shadow-sm focus:ring-color-01 focus:border-color-01"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Type your email address"
                    required
                    className="mt-1 block w-full p-4 rounded-md bg-gray-200 border-gray-300 shadow-sm focus:ring-color-01 focus:border-color-01"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  required
                  className="mt-1 block w-full p-4 rounded-md bg-gray-200 border-gray-300 shadow-sm focus:ring-color-01 focus:border-color-01"
                ></textarea>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-2.5 bg-color-01 text-white rounded-3xl hover:opacity-90 transition-opacity"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>  
      </div>
    </div>
  );
}