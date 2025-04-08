import { useState, useEffect } from 'react';
import HeaderWithoutCTA from '../components/header/HeaderWithoutCTA';
import { FcGoogle } from 'react-icons/fc';
import handlesData from '../public/handles.json';
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import * as jwt_decode from "jwt-decode";
import axios from "axios";

export default function Claim() {
  // Move isLoggedIn to useEffect to avoid hydration mismatch
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Remove mounted state and use explicit client-side check
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pincode: '',
    locality: '',
    address: '',
    city: '',
    state: '',
    landmark: '',
    alternatePhone: ''
  });

  useEffect(() => {
    // Set client-side flag
    setIsClient(true);
    
    // Check for existing login status here if needed
    // const checkLoginStatus = async () => {
    //   const status = await checkUserLogin();
    //   setIsLoggedIn(status);
    // };
    // checkLoginStatus();
  }, []);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setIsLoading(true);
      setError(null);

      // First, get user info
      axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${codeResponse.access_token}` }
      }).then((userResponse) => {
        // Store user info
        localStorage.setItem('email', userResponse.data.email);
        localStorage.setItem('name', userResponse.data.name);

        // Then get YouTube channel info
        return axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true&access_token=${codeResponse.access_token}`
        );
      }).then((res) => {
        setIsLoading(false);
        setIsLoggedIn(true);
        const channelId = res.data.items[0].id;
        localStorage.setItem('channelId', channelId);
      }).catch((err) => {
        setIsLoading(false);
        setError('Failed to authenticate with Google');
        console.error('Authentication error:', err);
      });
    },
    onError: (error) => {
      setError('Google login failed');
      console.error('Login error:', error);
    },
    scope: 'https://www.googleapis.com/auth/youtube.readonly email profile',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus(null);

    formData.email = localStorage.getItem('email');
    formData.channelId = localStorage.getItem('channelId');

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyA-dMeL6xtXB80t4omJeuAejhOs22LaJ00C9lXsM6sknPUFQRCd_kWGs809oVnteuMuA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      setSubmitStatus({ type: 'success', message: 'Your claim response has been submitted successfully, now team will verify and process your reward!' });
      setFormData({
        name: '',
        email: '',
        mobile: '',
        pincode: '',
        locality: '',
        address: '',
        city: '',
        state: '',
        landmark: '',
        alternatePhone: '',
        channelId: '',
        selectedCategory: ''
      });

      if (response) {
        setSubmitStatus({ type: 'success', message: 'Your claim response has been submitted successfully, now team will verify and process your reward!' });
        setFormData({
          name: '',
          email: '',
          mobile: '',
          pincode: '',
          locality: '',
          address: '',
          city: '',
          state: '',
          landmark: '',
          alternatePhone: '',
          channelId: '',
          selectedCategory: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'Failed to submit form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render nothing until client-side hydration is complete
  if (!isClient) {
    return null;
  }

  return (
      <div className="min-h-screen bg-bgColor">
        <HeaderWithoutCTA />
        <div className="pt-32 pb-20 px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        {isLoggedIn &&   
            <div className="text-3xl sm:text-4xl text-center font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block w-full text-transparent bg-clip-text mb-6">
            Claim Your PiBook
          </div>
        }

          {!isLoggedIn ? (
            <div className="flex flex-col items-center justify-center">
            <div className='md:flex md:flex-row gap-4'>
                <div className="text-3xl sm:text-4xl text-center font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block w-full text-transparent bg-clip-text mb-6">
                    Claim Your PiBook
                </div>
                <p onClick={login} className='text-white text-center font-semibold bg-white/10 rounded-full py-2 cursor-pointer'>Login with Google</p>
              </div>
              {/* Form */}
              <div className="min-h-screen min-w-[100%]">
              <div>
                  <title>Channel Results - Pi Book</title>
                  <meta name="description" content="View YouTube channel results" />
              </div>

              <main className="container mx-auto px-4 md:px-8 py-8">
                  <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">Channel Handles of the Winners</h1>
                  
                  {/* Mobile view: Card layout */}
                  <div className="block md:hidden space-y-4">
                  {handlesData.map((channel, index) => (
                      <div key={index} className="bg-gray-800 rounded-lg p-4 shadow-lg">
                      <div className="mb-2">
                          <span className="text-gray-400 text-xs uppercase">Channel Name</span>
                          <p className="text-white font-medium">{channel.channelName}</p>
                      </div>
                      <div>
                          <span className="text-gray-400 text-xs uppercase">Handle</span>
                          <p className="text-white font-medium">{channel.handle}</p>
                      </div>
                      </div>
                  ))}
                  </div>

                  {/* Desktop view: Table layout */}
                  <div className="hidden md:block overflow-x-auto">
                  <table className="min-w-full bg-gray-900 border border-gray-800 rounded-lg">
                      <thead>
                      <tr className="bg-gray-800">
                          <th className="px-6 py-3 border-b border-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Channel Name
                          </th>
                          <th className="px-6 py-3 border-b border-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Handle
                          </th>
                      </tr>
                      </thead>
                      <tbody>
                      {handlesData.map((channel, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200 border-b border-gray-700">
                              {channel.channelName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200 border-b border-gray-700">
                              {channel.handle}
                          </td>
                          </tr>
                      ))}
                      </tbody>
                  </table>
                  </div>
              </main>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Form fields remain the same */}
                <div>
                  <label className="block text-white mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Locality *</label>
                  <input
                    type="text"
                    name="locality"
                    value={formData.locality}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-white mb-2">Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-white mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">State *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Landmark</label>
                  <input
                    type="text"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Alternate Phone Number</label>
                  <input
                    type="tel"
                    name="alternatePhone"
                    value={formData.alternatePhone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {submitStatus && (
                <div className={`p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-100 text-green-900' : 'bg-red-100 text-red-900'}`}>
                  {submitStatus.message}
                </div>
              )}
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Claim'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
  );
}