import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';

function OtpVerification() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  const verificationId = location.state?.verificationId;

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential);
      navigate('/');
    } catch (err) {
      setError('Código de verificación incorrecto.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Verify OTP</h1>
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Verify OTP
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default OtpVerification;
