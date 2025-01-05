import React from 'react';

const OrderConfirmation = () => {
  return (
    <div className="bg-purple-700 flex justify-center items-center h-screen m-0 p-0">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-lg w-11/12">
        <div className="text-6xl text-purple-700 mb-6">✔</div>
        <h1 className="text-3xl font-semibold text-purple-700 mb-4">Order Confirmed!</h1>
        <p className="text-lg text-gray-800 mb-6">Thank you for your order. Your printouts will be delivered soon.</p>
        <div className="bg-purple-200 p-6 rounded-xl border border-purple-100 mb-6">
          <p className="text-gray-700 text-base flex justify-between items-center mb-3">
            <strong className="text-purple-800">Order Number:</strong>
            <span>#123456</span>
          </p>
          <p className="text-gray-700 text-base flex justify-between items-center mb-3">
            <strong className="text-purple-800">Delivery Address:</strong>
            <span>xyz</span>
          </p>
          <p className="text-gray-700 text-base flex justify-between items-center mb-3">
            <strong className="text-purple-800">Estimated Time:</strong>
            <span>20 min</span>
          </p>
        </div>
        <div className="mt-8">
          <a 
            href="/" 
            className="text-white bg-purple-700 py-3 px-8 rounded-lg text-lg inline-block transition duration-300 ease-in-out hover:bg-purple-600 transform hover:translate-y-1 shadow-md"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;