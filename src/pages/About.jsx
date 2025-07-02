

import React from 'react';
import images from "../constants/images";

const About = () => {
    return (
        <div>
            {/* Hero Section with Background Image */}
            <div className="relative h-64">
                <img 
                    src={images.banner}
                    alt="About background"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-opacity-50"></div>
                {/* Title text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider">
                        ABOUT
                    </h1>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="max-w-6xl mx-auto p-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Side - Image */}
                    <div>
                        <img 
                            src={images.shopy4}
                            alt="Fashion model"
                            className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our story</h2>
                        
                        <div className="space-y-6 text-gray-600 leading-relaxed">
                            <p>
                                Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut 
                                pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque 
                                porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida 
                                lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam 
                                imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida.
                            </p>
                            
                            <p>
                                Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam 
                                pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed 
                                rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. 
                                Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                            </p>
                        </div>

                        {/* Quote Section */}
                        <div className="mt-8 p-6  border-l-1 border-gray-500">
                            <blockquote className="text-gray-700 italic text-lg mb-4">
                                "Creativity is just connecting things. When you ask creative people how they did something, they 
                                feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to 
                                them after a while."
                            </blockquote>
                            <p className="text-gray-500 text-sm">- Steve Jobs</p>
                        </div>

                      
                    </div>
                </div>
            </div>

           
        </div>
    );
};

export default About;