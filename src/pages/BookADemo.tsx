import { useState, useRef } from "react"
// import { Link } from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// Import client logos
import client2day3 from "../assets/images/client-2day-3.png"
import clientPickzy from "../assets/images/client-pickzy.png"
import client2day4 from "../assets/images/client-2day-4.png"
import clientAlicesoft from "../assets/images/client-alicesoft.png"
import clientHexaware from "../assets/images/client-hexaware.jpg"
import clientValueonshore from "../assets/images/client-valueonshore.png"
import client1234 from "../assets/images/client-1234.webp"
import client12341 from "../assets/images/client-12341.webp"
import client12342 from "../assets/images/client-12342.png"
import client123457 from "../assets/images/client-123457.png"
import clientMagnit from "../assets/images/client-magnit.png"
import clientPhoton from "../assets/images/client-photon.jpg"
import client12345678 from "../assets/images/client-12345678.png"
import clientCli1 from "../assets/images/client-cli-1.png"
import clientCli2 from "../assets/images/client-cli-2.jpg"
import client123456789 from "../assets/images/client-123456789.png"
import clientCli4 from "../assets/images/client-cli-4.png"
import clientCli5 from "../assets/images/client-cli-5.png"
import clientSaxus from "../assets/images/client-saxus.jpg"
import clientSyntel from "../assets/images/client-syntel.png"
import clientGenpact from "../assets/images/client-genpact.jpg"

export default function BookADemo() {
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA verification")
      return
    }
    // Handle form submission here
    console.log("Form submitted with reCAPTCHA token:", recaptchaValue)
    alert("Thank you! We'll be in touch soon to schedule your demo.")
  }

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value)
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-dark text-white py-24 pt-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl mb-6 text-white">
              Book a Demo
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Schedule a meeting to learn more about our platform and discover how HireXtra can transform your recruitment process.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 card-hover">
              <div className="text-center mb-8 fade-in">
                <h2 className="font-heading text-3xl md:text-4xl mb-4 text-dark">
                  Schedule Your Demo
                </h2>
                <p className="text-lg text-body">
                  Fill out the form below and our team will reach out to schedule a personalized demo of our platform.
                </p>
              </div>

              <form className="space-y-6 fade-in" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-dark font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-dark font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-dark font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-dark font-semibold mb-2">
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Enter your company name"
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-dark font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="What would you like to learn about?"
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-dark font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements or questions..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                  />
                </div>

                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LciWC8sAAAAANlYmO4NYJpjv5aUOeTEIHHegAl5"
                    
                    onChange={handleRecaptchaChange}
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="btn-primary w-full text-lg"
                  >
                    Book Demo
                  </button>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-center text-body text-sm">
                  By submitting this form, you agree to our terms and conditions. Our team typically responds within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
              <div>
                <div className="bg-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl mb-2 text-dark">Quick Response</h3>
                <p className="text-body">We'll get back to you within 24 hours to schedule your demo.</p>
              </div>

              <div>
                <div className="bg-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl mb-2 text-dark">Personalized Demo</h3>
                <p className="text-body">Get a customized walkthrough tailored to your business needs.</p>
              </div>

              <div>
                <div className="bg-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl mb-2 text-dark">No Commitment</h3>
                <p className="text-body">Explore our platform risk-free with no obligations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-dark">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-body">
                Join thousands of companies that trust HireXtra for their recruitment needs
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              <div className="flex items-center justify-center">
                <img src={client2day3} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={clientPickzy} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={client2day4} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={clientAlicesoft} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={clientHexaware} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={clientValueonshore} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={client1234} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={client12341} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={client12342} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={client123457} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={clientMagnit} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={clientPhoton} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={client12345678} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={clientCli1} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={clientCli2} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={client123456789} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={clientCli4} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={clientCli5} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={clientSaxus} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={clientSyntel} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center">
                <img src={clientGenpact} alt="Client" loading="lazy" className="w-full h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
