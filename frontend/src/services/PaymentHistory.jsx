import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  CurrencyRupeeIcon,
  CalendarDaysIcon,
  ReceiptRefundIcon,
} from '@heroicons/react/24/outline';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/payments', {
          headers: {
            'x-session-token': 'e128ea9f-67e0-4865-8f06-df73dfec4250',
          },
        });
        setPayments(res.data);
      } catch (err) {
        console.error('Error fetching payment history:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white/30 backdrop-blur-lg border border-gray-200 shadow-xl rounded-3xl p-6 sm:p-10 md:p-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-8 text-center">
          💼 Payment History
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : payments.length === 0 ? (
          <p className="text-center text-gray-500">No payment records found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {payments.map((payment) => (
              <div
                key={payment._id}
                className="bg-white/60 border border-gray-100 rounded-2xl shadow-md p-5 sm:p-6 md:p-7 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <ReceiptRefundIcon className="w-6 h-6 text-indigo-500 shrink-0" />
                  <h3 className="text-base sm:text-lg font-medium text-gray-700 truncate">
                    {payment.utilityType}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                  <CurrencyRupeeIcon className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="font-semibold text-green-700">
                    Rs. {payment.amount}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                  <CalendarDaysIcon className="w-5 h-5 text-gray-500 shrink-0" />
                  <span>{new Date(payment.paidAt).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
