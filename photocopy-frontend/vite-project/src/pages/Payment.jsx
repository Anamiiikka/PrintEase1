import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Payment = () => {
    const[name, setName] = React.useState('');
    const[email, setEmail] = React.useState('');
    const[amount, setAmount] = React.useState('');
    const[loading, setLoading] = React.useState(false);


  const handleSubmit = async(e) => {
   e.preventDefault();
   setLoading(true);

   const data = {
        name,
        email,
        amount,
        MUID: "MUID"+ Date.now(),
        transactionID: "TID"+ Date.now()
   };

   await axios
   .post("http://localhost:8000/order", data)
   .then((response) => {
     if(response.data && response.data.data.instrumentResponse.url){
        window.location.href = response.data.data.instrumentResponse.redirectInfo.url;
     }
    
   })
   .catch((error) => {
    console.log(error);
   });
   };
 
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-5">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full transform transition duration-500 hover:scale-105">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center animate-fadeIn">Make a Payment</h1>
        <form onSubmit={handleSubmit}>
        <p className="text-gray-600 mb-6 text-center">
          Enter your details below to complete the payment.
        </p>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
            Payment Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <button
           type='submit'
           disabled={loading}
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90 focus:outline-none focus:ring focus:ring-green-300"
        >
          Pay Now
        </button>

        <p className="text-sm text-gray-500 mt-4 text-center animate-slideUp">
          Secure and encrypted payment gateway
        </p>
        </form>
      
      </div>
    </div>
  );
};

export default Payment;