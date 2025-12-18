import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import imageRight from "../assets/images/image-right.jpg"
import consultingServices from "../assets/images/consulting-services.jpg"

export default function BusinessConsultantServices() {
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
  }

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value)
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 pt-40 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-heading text-4xl md:text-5xl mb-6 text-dark">
                  Elevate Your Business with Expert Consulting from HireXtra
                </h1>
                <p className="text-lg text-body">
                  Boost your business with HireXtra's expert consulting services. Our experienced consultants offer tailored solutions to solve your unique challenges and drive growth. Let us help you achieve your goals with precision and ease.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={imageRight}
                  alt="Business Consulting"
                  loading="lazy"
                  className="w-full max-w-md h-auto max-h-96 rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-dark">
                Our Approach
              </h2>
            </div>
            <div className="flex justify-center">
              <video
                controls
                loop
                playsInline
                className="rounded-lg shadow-xl max-w-full"
              >
                <source
                  src="https://cdn.dorik.com/667c5194be1733001e80582c/videos/AIAutomonousAgentsonlinevideocuttercom1-pAmdN.mp4"
                  type="video/mp4"
                />
                Your browser doesn't support HTML5 video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Why HireXtra Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <img
                  src={consultingServices}
                  alt="Consulting Services"
                  loading="lazy"
                  className="w-full max-w-md h-auto max-h-96 rounded-lg shadow-xl object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-heading text-3xl md:text-4xl mb-6 text-dark">
                  Why HireXtra's Consulting Services Are Your Best Choice for Success?
                </h2>
                <p className="text-lg text-body mb-8">
                  HireXtra's services stand out as the best choice for attracting users due to their commitment to delivering exceptional value and tailored solutions. Here's why
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-start mb-2">
                      <svg className="w-6 h-6 text-brand mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                      </svg>
                      <h3 className="font-heading text-xl text-dark">Talent Dispositioning Strategic</h3>
                    </div>
                    <p className="text-body ml-9">
                      Talent dispositioning with HireXtra AI-driven solutions identified significant cost savings over 14 years, optimizing your hiring budget and resource allocation.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-start mb-2">
                      <svg className="w-6 h-6 text-brand mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                      </svg>
                      <h3 className="font-heading text-xl text-dark">Workforce Consolidation</h3>
                    </div>
                    <p className="text-body ml-9">
                      A workforce consolidation strategy with HireXtra demonstrated potential savings by streamlining recruitment processes and reducing redundancies, ensuring you have the right talent at the right time.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-start mb-2">
                      <svg className="w-6 h-6 text-brand mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                      </svg>
                      <h3 className="font-heading text-xl text-dark">Hiring Strategy Design</h3>
                    </div>
                    <p className="text-body ml-9">
                      HireXtra tailored hiring strategy design can help your organization adopt 100% effective recruitment practices, reducing financial impact while ensuring the highest quality hires. Our advanced models incorporate dynamic scheduling and transformation costs to align with your business growth.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link to="/book-a-demo">
                    <button className="btn-primary flex items-center gap-2">
                      Get Started
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Strengths Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-dark">
                Main strengths
              </h2>
              <p className="text-lg text-body max-w-3xl mx-auto">
                For some, efficient hiring may just be a trendy term for basic recruitment. At HireXtra, we see it as a strategic approach. We focus on optimizing recruitment costs, increasing workforce value, and ensuring transparency with tailored solutions that drive significant savings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-light p-6 rounded-lg card-hover">
                <h3 className="font-heading text-2xl mb-4 text-dark">
                  Workforce Solutions
                </h3>
                <Link
                  to="/direct-sourcing"
                  className="link-hover inline-flex items-center text-brand font-semibold"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-light p-6 rounded-lg card-hover">
                <h3 className="font-heading text-2xl mb-4 text-dark">
                  Managed Services
                </h3>
                <Link
                  to="/managed-service-provider"
                  className="link-hover inline-flex items-center text-brand font-semibold"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-light p-6 rounded-lg card-hover">
                <h3 className="font-heading text-2xl mb-4 text-dark">
                  Digital Services
                </h3>
                <Link
                  to="/book-a-demo"
                  className="link-hover inline-flex items-center text-brand font-semibold"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-light p-6 rounded-lg card-hover">
                <h3 className="font-heading text-2xl mb-4 text-dark">
                  Application Services
                </h3>
                <Link
                  to="/saas"
                  className="link-hover inline-flex items-center text-brand font-semibold"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-light p-6 rounded-lg card-hover">
                <h3 className="font-heading text-2xl mb-4 text-dark">
                  Other Services
                </h3>
                <Link
                  to="/book-a-demo"
                  className="link-hover inline-flex items-center text-brand font-semibold"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-light" id="get-in-touch">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl mb-8 text-center text-dark">
              Get in Touch
            </h2>
            <form className="bg-white p-8 rounded-lg shadow-xl space-y-6 fade-in card-hover" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="input-field"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="input-field"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="input-field"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Email Subject"
                  required
                  className="input-field"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Write your message..."
                  required
                  className="input-field"
                />
              </div>
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LciWC8sAAAAANlYmO4NYJpjv5aUOeTEIHHegAl5"
                  onChange={handleRecaptchaChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-brand text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors w-full"
                >
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

