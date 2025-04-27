import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthPageImage from "../../assets/AuthPageImage.svg";

const VerifyIdentity = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.value !== "" && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    console.log("Verifying OTP:", otpValue);
    navigate("/reset-password", { state: { otp: otpValue } });
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row px-4 py-12 gap-8">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Verify Your Identity</h1>
        <p className="text-xl mb-8">
          We've sent a one-time password (OTP) to your email. Enter it to
          continue.
        </p>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src={AuthPageImage}
            alt="Colorful abstract design"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Check your email for a 6-digit code.
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-4">OTP</label>
            <div className="flex justify-between space-x-2">
              {otp.map((data, index) => {
                return (
                  <input
                    className="w-12 h-12 md:w-16 md:h-16 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    maxLength="1"
                    key={index}
                    id={`otp-${index}`}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </div>
            <div className="mt-4 text-right">
              <button type="button" className="text-blue-600 hover:underline">
                Resend OTP
              </button>
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <Link
              to="/forgot-password"
              className="flex-1 text-center border border-gray-300 p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Back
            </Link>
            <button
              type="submit"
              className="flex-1 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyIdentity;