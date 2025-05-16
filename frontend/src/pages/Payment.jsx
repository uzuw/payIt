import React from 'react'
import PaymetnHistory from '../services/PaymentHistory';
const Payment = () => {

  return (
    <div className="m-5 shadow-md shadow-gray-100 rounded-lg p-10 border border-gray-100">
      <h2 className="font-recursive font-bold text-xl">Payments</h2>
      <div className=" mt-10 rounded-lg flex gap-10 flex-wrap">
        <PaymentHistory/>
      </div>
    </div>
  );
};

export default Payment;


