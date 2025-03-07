import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const InputForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(API_URL, { params: { name } });
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.response?.data?.error || "Something went wrong");
    }
    setName("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="bg-gray-850 shadow-lg rounded-2xl p-8 max-w-md w-full border border-gray-700">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-200">Welcome</h2>
        <p className="text-center text-gray-400 mb-6">Enter your name to receive a greeting</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name..."
            className="w-full p-3 bg-gray-800 text-gray-300 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all"
          >
            Get Greeting
          </button>
        </form>

        {message && (
          <div className="mt-4 text-center text-lg font-medium text-green-400">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputForm;
