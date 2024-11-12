
import Head from 'next/head';
import Footer from '../footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      {/* Header */}

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto bg-purple-100 p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-black-800 mb-8 text-center italic">Get in Touch</h2>
          <form className="space-y-6">
            {/* Full Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-black-600 font-serif">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 block w-full px-5 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-black-600 font-serif">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 block w-full px-5 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                required
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-black-600 font-serif">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-2 block w-full px-5 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 py-3 bg-purple-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-purple-600 focus:outline-none transition-all duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
