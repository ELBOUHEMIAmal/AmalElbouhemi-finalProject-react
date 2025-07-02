import React, { useState } from 'react';
import images from "../constants/images";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is just a demo)');
    console.log('Form data:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <div className=" ">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          
           
                              <div className="relative h-64 mt-8">
                          <img 
                            src={images.banner}
                            alt="Products background"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0  bg-opacity-50"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider">
                              CONTACT
                            </h1>
                          </div>
                        </div>
                              
                              
                            </div>
                          </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.190604246419!2d-7.713036324306104!3d33.522429673361195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62b002a05ff5d%3A0x7da08ee10eceba8d!2z2YXZiNmEINmE2KjZhtmI2KfYqg!5e0!3m2!1sen!2sma!4v1751427424778!5m2!1sen!2sma"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us your message</h2>
            
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                ></textarea>
              </div>

              <div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gray-800 text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-700 transition duration-200"
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}