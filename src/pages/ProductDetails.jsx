import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import dataProductsFeatures from "../json/featureProducts.json";
import images from '../constants/images';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const details = dataProductsFeatures.find((e) => e.id == id);

    // State for product options
    const [selectedSize, setSelectedSize] = useState('S');
    const [selectedColor, setSelectedColor] = useState('gray');
    const [quantity, setQuantity] = useState(1);
    const [expandedSections, setExpandedSections] = useState({
        description: false,
        additional: false,
        reviews: false
    });
    
    // Product options
    const sizes = ['S', 'M', 'L', 'XL'];
    const colors = [
        { name: 'gray', class: 'bg-gray-400' },
        { name: 'red', class: 'bg-red-500' },
        { name: 'black', class: 'bg-black' }
    ];
    
    // Expandable sections content
    const sections = [
        {
            key: 'description',
            title: 'Description',
            content: (
                <div className="space-y-3 text-gray-600 text-sm">
                    <p>Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat.</p>
                    <p>Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat.</p>
                    <p>Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat.</p>
                </div>
            )
        },
        {
            key: 'additional',
            title: 'Additional Information',
            content: (
                <div className="space-y-4 text-gray-600 text-sm">
                    <p>You can use this tab for adding shipping details, return policies and information or measurements etc.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                </div>
            )
        },
        {
            key: 'reviews',
            title: 'Reviews',
            content: (
                <div className="space-y-4">
                    <div className="text-center">
                        <h3 className="text-lg font-medium text-gray-800 mb-2">Customer Reviews</h3>
                        <div className="text-sm text-gray-600">
                            <span className="underline">Based on 3 reviews</span>
                            <span className="ml-4 underline cursor-pointer">Write a review</span>
                        </div>
                    </div>
                </div>
            )
        }
    ];
    
    // Helper functions
    const toggleSection = (sectionKey) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionKey]: !prev[sectionKey]
        }));
    };
    
    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

    // Handle case where product is not found
    if (!details) {
        return (
            <div className="max-w-6xl mx-auto p-6 bg-white">
                <div className="text-center py-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
                    <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
                    <button 
                        onClick={() => navigate('/')}
                        className="bg-[#e65540] text-white px-6 py-2 rounded-lg hover:bg-[#d44332] transition-colors"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white">
            {/* Breadcrumb */}
            <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-gray-600">
                    <li>
                        <button onClick={() => navigate('/')} className="hover:text-[#e65540]">
                            Home
                        </button>
                    </li>
                    <li>/</li>
                    <li className="text-gray-900">{details.title}</li>
                </ol>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Product Image */}
                <div className="bg-gray-50 rounded-lg p-8">
                    <img 
                        src={images[details.image]} 
                        alt={details.title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{details.title}</h1>
                        <div className="flex items-center space-x-4">
                            <span className="text-3xl font-bold text-[#e65540]">${details.price}</span>
                            {details.originalPrice && (
                                <span className="text-xl text-gray-500 line-through">${details.originalPrice}</span>
                            )}
                        </div>
                    </div>

                    {/* Product Description */}
                    <div className="text-gray-600">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa.</p>
                    </div>

                    {/* Size Selection */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
                        <div className="flex space-x-2">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-10 h-10 border rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                                        selectedSize === size
                                            ? 'border-[#e65540] bg-[#e65540] text-white'
                                            : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Color Selection */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
                        <div className="flex space-x-2">
                            {colors.map((color) => (
                                <button
                                    key={color.name}
                                    onClick={() => setSelectedColor(color.name)}
                                    className={`w-8 h-8 rounded-full border-2 ${color.class} ${
                                        selectedColor === color.name
                                            ? 'border-gray-900'
                                            : 'border-gray-300'
                                    }`}
                                    aria-label={`Select ${color.name} color`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                                onClick={decrementQuantity}
                                className="p-2 hover:bg-gray-100 transition-colors"
                            >
                                -
                            </button>
                            <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                            <button
                                onClick={incrementQuantity}
                                className="p-2 hover:bg-gray-100 transition-colors"
                            >
                                +
                            </button>
                        </div>
                        <button className="flex-1 bg-[#e65540] text-white py-3 px-6 rounded-lg hover:bg-[#d44332] transition-colors font-medium">
                            Add to Cart
                        </button>
                    </div>

                    {/* Additional Actions */}
                    <div className="flex space-x-4 pt-4">
                        <button className="text-gray-600 hover:text-[#e65540] transition-colors">
                            ♡ Add to Wishlist
                        </button>
                        <button className="text-gray-600 hover:text-[#e65540] transition-colors">
                            ↗ Share
                        </button>
                    </div>
            <div className="space-y-4">
                {sections.map((section) => (
                    <div key={section.key} className="border border-gray-200 rounded-lg">
                        <button
                            onClick={() => toggleSection(section.key)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                            <span className="font-medium text-gray-900">{section.title}</span>
                            <span className="text-xl font-bold text-gray-600">
                                {expandedSections[section.key] ? '−' : '+'}
                            </span>
                        </button>
                        {expandedSections[section.key] && (
                            <div className="px-6 pb-4 border-t border-gray-200">
                                <div className="pt-4">
                                    {section.content}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
                </div>
            </div>

            {/* Expandable Sections */}
        </div>
    );
};

export default ProductDetails;