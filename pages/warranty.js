import { useState } from 'react';
import Header from '../components/header/Header';

export default function Warranty() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className="bg-bgColor min-h-screen">
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="text-3xl sm:text-4xl text-center font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block w-full text-transparent bg-clip-text mb-16">
          Warranty Policy
        </div>

        <div className="text-gray-400 space-y-6">
          <div className="mb-12">
            <div className="text-base sm:text-lg font-semibold mb-4">Hassle-Free Warranty & Support</div>
            <p className="text-gray-400">
              At PiBook, we stand by the quality of our product and ensure a seamless ownership experience. That's why every PiBook comes with a comprehensive one-year warranty, covering any manufacturing defects or hardware issues.
            </p>
          </div>

          <div className="mb-12">
            <div className="text-base sm:text-lg font-semibold mb-4">What's Included in Your One-Year Warranty?</div>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><div className="font-semibold inline">Repairs:</div> Any hardware or manufacturing defects will be fixed at no cost (terms and conditions apply).</li>
              <li><div className="font-semibold inline">Door-to-Door Service:</div> If an issue arises, we'll arrange a free pick-up, repair your device, and deliver it back to you—all at your convenience.</li>
              <li><div className="font-semibold inline">24/7 WhatsApp Support:</div> Need assistance? Our team is available around the clock on WhatsApp at +91 9289105061 to guide you through troubleshooting, queries, or warranty claims.</li>
            </ul>
          </div>

          {/* Accordion Sections */}
        

          <div className="mt-12">
            <div className="text-base sm:text-lg font-semibold mb-4">Post-Warranty Support</div>
            <p className="text-gray-400 mb-4">
              Even after your one-year warranty expires, we've got you covered! You can still get your PiBook repaired, with services available at an affordable cost. Our support team will assist you with repair estimates and guide you through the process.
            </p>
            <p className="text-gray-400">
              <div className="font-semibold inline">Service also available in 100+ Vidyapeeth Centres</div>
            </p>
          </div>

          <div className="mt-8">
            <p className="text-gray-400">
              With PiBook's reliable support and service, you can enjoy a worry-free experience, knowing help is always just a message away!
            </p>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden bg-gray-900 rounded-lg">
              <button
                className="w-full p-4 flex bg-gray-700 justify-between items-center text-left"
                onClick={() => toggleSection('shipping')}
              >
                <div className="text-base font-semibold text-white">Shipping Policy</div>
                <svg
                  className={`w-6 h-6 transform transition-transform ${openSection === 'shipping' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"

                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'shipping' && (
                <div className="p-4 text-gray-400">
                  <p>
                    <li className='list-disc'> To check the status of your order, refer "My Orders" section.</li>
                    <li className='list-disc'> For detailed information click here: <a href="https://docs.google.com/document/d/e/2PACX-1vTRWne87SLCsYB3A6eiuFXrcgqXmeeWjwrW_tTm5SGcixJ4k5HGHdNzWdoBC1vhMkjmC3bw0BvQULUW/pub#h.1eo4v9x9zvw" target="_blank" className='text-blue-500'>Shipping Policy</a></li>
                  </p>
                </div>
              )}
            </div>

            <div className="overflow-hidden bg-gray-900 rounded-lg">
              <button
                className="w-full p-4 bg-gray-700 flex justify-between items-center text-left"
                onClick={() => toggleSection('cancellation')}
              >
                <div className="text-base font-semibold text-white">Cancellation Policy</div>
                <svg
                  className={`w-6 h-6 transform transition-transform ${openSection === 'cancellation' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'cancellation' && (
                <div className="p-4 text-gray-400">
                  <p>
                    <li className='list-disc'> To cancel the order go to "My orders" section.</li>
                    <li className='list-disc'> For detailed information click here: <a href="https://docs.google.com/document/d/e/2PACX-1vTRWne87SLCsYB3A6eiuFXrcgqXmeeWjwrW_tTm5SGcixJ4k5HGHdNzWdoBC1vhMkjmC3bw0BvQULUW/pub#h.vfacyekal5hu" target="_blank" className='text-blue-500'>Cancellation Policy</a></li>
                  </p>
                </div>
              )}
            </div>

            <div className="overflow-hidden bg-gray-900 rounded-lg">
              <button
                className="w-full p-4 flex bg-gray-700 justify-between items-center text-left"
                onClick={() => toggleSection('refund')}
              >
                <div className="text-base font-semibold text-white">Return & Refund Policy</div>
                <svg
                  className={`w-6 h-6 transform transition-transform ${openSection === 'refund' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'refund' && (
                <div className="p-4 text-gray-400">
                  <p>
                    <li className='list-disc'>Currently Return & Refund is not applicable on this product.</li>
                    <li className='list-disc'>For detailed information click here: <a href="https://docs.google.com/document/d/e/2PACX-1vTRWne87SLCsYB3A6eiuFXrcgqXmeeWjwrW_tTm5SGcixJ4k5HGHdNzWdoBC1vhMkjmC3bw0BvQULUW/pub#h.qpp3iysu9jxu" target="_blank" className='text-blue-500'>Return & Refund Policy</a></li>
                  </p>
                </div>
              )}
            </div>

            <div className="overflow-hidden bg-gray-900 rounded-lg">
              <button
                className="w-full p-4 flex bg-gray-700 justify-between items-center text-left"
                onClick={() => toggleSection('refund')}
              >
                <div className="text-base font-semibold text-white">Return & Replacement Policy</div>
                <svg
                  className={`w-6 h-6 transform transition-transform ${openSection === 'refund' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSection === 'refund' && (
                <div className="p-4 text-gray-400">
                  <p>
                    <li className='list-disc'>Replacement policy is eligible only till 10 days after delivery date.</li>
                    <li className='list-disc'>Door-to-door pickup and delivery service for devices with hardware issues covered under warranty.</li>
                    <li className='list-disc'>24/7 WhatsApp support for software-related assistance.</li>
                    <li className='list-disc'>For detailed information click here: <a href="https://docs.google.com/document/d/e/2PACX-1vTRWne87SLCsYB3A6eiuFXrcgqXmeeWjwrW_tTm5SGcixJ4k5HGHdNzWdoBC1vhMkjmC3bw0BvQULUW/pub#h.ma2wwz9f6d9o" target="_blank" className='text-blue-500'>Return & Replacement Policy</a></li>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}