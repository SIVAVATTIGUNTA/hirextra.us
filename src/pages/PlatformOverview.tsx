import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import directSourcing from "../assets/images/direct-sourcing.jpg"
import recruitmentService from "../assets/images/recruitment-service.jpg"
import staffingService from "../assets/images/staffing-service.jpg"

export default function PlatformOverview() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-dark text-white py-24 pt-40" id="Platform">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-heading text-4xl md:text-5xl mb-6 text-white">
                  HireXtra.com is a leader in the evolution of work, offering a Unicorn AI-powered HRTech platform that digitizes the talent supply chain
                </h1>
                <Link to="/book-a-demo">
                  <button className="btn-primary flex items-center gap-2 mt-6">
                    Get Started Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="flex justify-center">
                <video
                  controls
                  loop
                  playsInline
                  autoPlay
                  className="w-full max-w-xl h-auto max-h-96 rounded-lg shadow-2xl"
                >
                  <source
                    src="https://cdn.dorik.com/667c5194be1733001e80582c/videos/videoplayback-5lbay.mp4"
                    type="video/mp4"
                  />
                  Your browser doesn't support HTML5 video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl mb-4 text-dark">
                AI-Powered: From Sourcing to Candidate Scheduling (AI+HI=ROI)
              </h2>
              <p className="text-xl text-body mt-6">
                No Hire, No Fee...Share Your Needs with Us
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Sourcing
                </h5>
                <p className="text-body">
                  AI-guided job and candidate matching enables faster sourcing, broader talent pools, and more accurate role matches through intelligent resume parsing.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Leadership
                </h5>
                <p className="text-body">
                  Predictive analytics and big data empower us to optimize resource allocation and drive cost savings.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Stability
                </h5>
                <p className="text-body">
                  The AI Skills Engine offers organizations personalized recommendations to upskill employees, enhance talent pools, and provide growth opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionize Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="font-heading text-3xl md:text-4xl mb-6 text-dark">
                  Revolutionize your contingent workforce management and unlock new possibilities for success. Partner with us today and discover a smarter way to staff.
                </h3>
                <div className="flex gap-4 flex-wrap">
                  <Link to="/book-a-demo">
                    <button className="btn-primary">
                      Get Started
                    </button>
                  </Link>
                  <a
                    href="https://www.hirextra.com/compare/compare"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary inline-block"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <video
                  controls
                  loop
                  playsInline
                  className="w-full max-w-md h-auto max-h-80 rounded-lg shadow-2xl object-cover"
                >
                  <source
                    src="https://cdn.dorik.com/667c5194be1733001e80582c/videos/Hirextra-DEmo-(1)-BJGiX.mp4"
                    type="video/mp4"
                  />
                  Your browser doesn't support HTML5 video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Led Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Technology Led */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="flex justify-center order-2 md:order-1">
                <img
                  src={directSourcing}
                  alt="Technology Led"
                  loading="lazy"
                  className="w-full max-w-md h-auto max-h-80 rounded-lg shadow-2xl object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-heading text-3xl md:text-4xl mb-6 text-dark">
                  Technology Led
                </h2>
                <p className="text-body mb-6 text-lg">
                  Enable your teams to drive better business decisions with access to leading workforce management systems that include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-body">
                  <li>Direct Sourcing</li>
                  <li>Services Procurement</li>
                </ul>
              </div>
            </div>

            {/* Services enabled */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl mb-6 text-dark">
                  Services enabled
                </h2>
                <p className="text-body mb-6 text-lg">
                  Enhance your organization's management of the end-to-end contingent workforce management lifecycle with market-leading, vendor-neutral services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-body">
                  <li>Managed Service Provider</li>
                  <li>Recruitment process outsourcing</li>
                  <li>RAAS</li>
                  <li>SAAS</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  src={recruitmentService}
                  alt="Services enabled"
                  loading="lazy"
                  className="w-full max-w-md h-auto max-h-80 rounded-lg shadow-2xl object-cover"
                />
              </div>
            </div>

            {/* Data-Driven Excellence */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <img
                  src={staffingService}
                  alt="Data-Driven Excellence"
                  loading="lazy"
                  className="w-full max-w-md h-auto max-h-80 rounded-lg shadow-2xl object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-heading text-3xl md:text-4xl mb-6 text-dark">
                  Data-Driven Excellence
                </h2>
                <p className="text-body mb-6 text-lg">
                  Power your teams to make strategic hiring and retention decisions with access to the world's largest global market rate, salary, and talent intelligence dataset backed by a robust partner ecosystem:
                </p>
                <ul className="list-disc list-inside space-y-2 text-body">
                  <li>Performance Metrics</li>
                  <li>Real-Time Data Insights</li>
                  <li>Customizable Reports</li>
                  <li>Continuous Improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
