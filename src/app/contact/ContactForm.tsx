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

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-4"> 
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto mb-10 p-8 bg-white rounded-2xl shadow-[0_20px_116px_0_rgba(0,0,0,0.10)] border" style={{ borderColor: "rgba(89,89,89,0.2)" }}
        >
          {submitted ? (
            <div className="text-green-600 font-semibold"><FaRegCircleCheck className="inline"/> Thanks! We’ll be in touch soon.</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-04 mb-2">
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
                    className="mt-1 block w-full p-4 rounded-md bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.15)] focus:ring-color-01 focus:border-color-01"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-04 mb-2">
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
                    className="mt-1 block w-full p-4 rounded-md bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.15)] focus:ring-color-01 focus:border-color-01 placeholder:text-neutral-02"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-04 mb-2">
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
                  className="mt-1 block w-full p-4 rounded-md bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.15)] focus:ring-color-01 focus:border-color-01 placeholder:text-neutral-02"
                  ></textarea>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-2.5 bg-color-01 text-white rounded-3xl hover:opacity-90 transition-opacity placeholder:text-neutral-02"
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