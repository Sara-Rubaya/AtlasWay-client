import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-24">
      {/* WhyChooseUs সেকশনের মতো একই প্রস্থ ব্যবহার করা হলো */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-teal-600">Get In Touch</h2>
        <p className="mb-12 text-lg text-gray-600">
          We'd love to hear from you! Send us a message or find our contact details below.
        </p>

        <div className="grid gap-12 md:grid-cols-2 text-left">
          {/* 📞 Contact Info Card */}
          <div className="p-10 bg-base-100 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-teal-700">Our Details</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="text-gray-700">support@AtlasWay.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75l10.5 10.5L23.25 6.75" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75V12" />
                </svg>
                <span className="text-gray-700">+880 1234 567890</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0v-3.75Zm0 0V8.25m-15 0a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0v-3.75Zm0 0V8.25" />
                </svg>
                <span className="text-gray-700">123 Travel Avenue, <br />Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* 📧 Contact Form */}
          <div className="p-10 bg-base-100 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-teal-700">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" placeholder="John Doe" className="input input-bordered w-full" required />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input type="email" placeholder="you@example.com" className="input input-bordered w-full" required />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea className="textarea textarea-bordered h-24 w-full" placeholder="How can we help you today?" required></textarea>
              </div>
              <button 
                type="submit" 
                className="btn w-full text-white bg-gradient-to-r from-teal-600 to-lime-500 hover:bg-gradient-to-l hover:from-teal-600 hover:to-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-600 dark:focus:ring-teal-900 font-medium rounded-lg text-lg px-5 py-2.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;