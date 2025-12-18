import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import directSourcing from "../assets/images/direct-sourcing.jpg"
import staffingService from "../assets/images/staffing-service.jpg"

export default function ManagedServiceProvider() {
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
                  AI Managed Service Provider (AI MSP)
                </h1>
                <p className="text-lg text-body mb-6">
                  Enhance your operational efficiency with Hirextra's Managed Service Provider (MSP) solutions. We manage your AI systems comprehensively, ensuring they perfectly align with your business goals. From deployment to maintenance, we optimize performance and foster innovation.
                </p>
                <Link to="/book-a-demo">
                  <button className="btn-primary flex items-center gap-2 mt-6">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="flex justify-center">
                <img
                  src={directSourcing}
                  alt="Managed Service Provider"
                  loading="lazy"
                  className="w-full max-w-md h-auto max-h-96 rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-dark">
                Key Benefits of AI MSP
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-brand mt-1" fill="currentColor" viewBox="0 0 576 512">
                    <path d="M152.8 37.2c-32.2 38.1-56.1 82.6-69.9 130.5c0 .2-.1 .3-.1 .5C43.5 184.4 16 223 16 268c0 59.6 48.4 108 108 108s108-48.4 108-108c0-53.5-38.9-97.9-90-106.5c15.7-41.8 40.4-79.6 72.3-110.7c1.8-1.6 4-2.6 6.3-3.1c37.2-11.5 76.7-13.3 114.8-5.2C454.7 67.6 534 180.7 517.1 301.3c-8.4 62.6-38.6 112.7-87.7 151.4c-50.1 39.7-107.5 54.3-170.2 52.2l-24-1c12.4 2.8 25 4.9 37.6 6.3c40.7 4.2 81.4 2.1 120.1-12.5c94-35.5 149.3-102.3 162.9-202.5c4.8-52.6-5.8-105.4-30.8-152C454.6 11.3 290.8-38.4 159 32c-2.4 1.4-4.5 3.1-6.3 5.2z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-heading text-xl mb-2 text-dark">Quick Access to Contingent Talent</h5>
                  <p className="text-body">
                    Quickly access contingent talent to overcome shortages and maintain a competitive edge.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-brand mt-1" fill="currentColor" viewBox="0 0 576 512">
                    <path d="M152.8 37.2c-32.2 38.1-56.1 82.6-69.9 130.5c0 .2-.1 .3-.1 .5C43.5 184.4 16 223 16 268c0 59.6 48.4 108 108 108s108-48.4 108-108c0-53.5-38.9-97.9-90-106.5c15.7-41.8 40.4-79.6 72.3-110.7c1.8-1.6 4-2.6 6.3-3.1c37.2-11.5 76.7-13.3 114.8-5.2C454.7 67.6 534 180.7 517.1 301.3c-8.4 62.6-38.6 112.7-87.7 151.4c-50.1 39.7-107.5 54.3-170.2 52.2l-24-1c12.4 2.8 25 4.9 37.6 6.3c40.7 4.2 81.4 2.1 120.1-12.5c94-35.5 149.3-102.3 162.9-202.5c4.8-52.6-5.8-105.4-30.8-152C454.6 11.3 290.8-38.4 159 32c-2.4 1.4-4.5 3.1-6.3 5.2z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-heading text-xl mb-2 text-dark">Top-Quality STEM Talent</h5>
                  <p className="text-body">
                    We offer top-quality STEM talent for specialized roles, saving costs without compromising on skill.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-brand mt-1" fill="currentColor" viewBox="0 0 576 512">
                    <path d="M152.8 37.2c-32.2 38.1-56.1 82.6-69.9 130.5c0 .2-.1 .3-.1 .5C43.5 184.4 16 223 16 268c0 59.6 48.4 108 108 108s108-48.4 108-108c0-53.5-38.9-97.9-90-106.5c15.7-41.8 40.4-79.6 72.3-110.7c1.8-1.6 4-2.6 6.3-3.1c37.2-11.5 76.7-13.3 114.8-5.2C454.7 67.6 534 180.7 517.1 301.3c-8.4 62.6-38.6 112.7-87.7 151.4c-50.1 39.7-107.5 54.3-170.2 52.2l-24-1c12.4 2.8 25 4.9 37.6 6.3c40.7 4.2 81.4 2.1 120.1-12.5c94-35.5 149.3-102.3 162.9-202.5c4.8-52.6-5.8-105.4-30.8-152C454.6 11.3 290.8-38.4 159 32c-2.4 1.4-4.5 3.1-6.3 5.2z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-heading text-xl mb-2 text-dark">Clear Governance & Insights</h5>
                  <p className="text-body">
                    Our governance ensures clear oversight and actionable insights through data analysis.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-brand mt-1" fill="currentColor" viewBox="0 0 576 512">
                    <path d="M152.8 37.2c-32.2 38.1-56.1 82.6-69.9 130.5c0 .2-.1 .3-.1 .5C43.5 184.4 16 223 16 268c0 59.6 48.4 108 108 108s108-48.4 108-108c0-53.5-38.9-97.9-90-106.5c15.7-41.8 40.4-79.6 72.3-110.7c1.8-1.6 4-2.6 6.3-3.1c37.2-11.5 76.7-13.3 114.8-5.2C454.7 67.6 534 180.7 517.1 301.3c-8.4 62.6-38.6 112.7-87.7 151.4c-50.1 39.7-107.5 54.3-170.2 52.2l-24-1c12.4 2.8 25 4.9 37.6 6.3c40.7 4.2 81.4 2.1 120.1-12.5c94-35.5 149.3-102.3 162.9-202.5c4.8-52.6-5.8-105.4-30.8-152C454.6 11.3 290.8-38.4 159 32c-2.4 1.4-4.5 3.1-6.3 5.2z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-heading text-xl mb-2 text-dark">Diversity & Social Value</h5>
                  <p className="text-body">
                    Embracing diversity and social value is integral to our MSP programs, reflecting our commitment to inclusive workforce practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-dark">
                Comprehensive MSP Services
              </h2>
              <p className="text-xl text-body mt-6">
                End-to-end contingent workforce management
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Vendor Management
                </h5>
                <p className="text-body">
                  Centralized management of all your staffing vendors, ensuring consistent quality and performance across your entire supplier base.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Compliance & Risk Management
                </h5>
                <p className="text-body">
                  Stay compliant with all labor laws and regulations while minimizing risk through comprehensive compliance monitoring.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Performance Analytics
                </h5>
                <p className="text-body">
                  Real-time visibility into workforce performance, costs, and metrics through advanced analytics and reporting tools.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Sourcing & Recruitment
                </h5>
                <p className="text-body">
                  Access to a global talent pool with optimized sourcing strategies to find the right talent at the right time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <img
                  src={staffingService}
                  alt="MSP Benefits"
                  loading="lazy"
                  className="w-full max-w-md h-auto max-h-96 rounded-lg shadow-xl object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-heading text-3xl md:text-4xl mb-6 text-dark">
                  Why Choose Our MSP Solutions?
                </h2>
                <ul className="list-disc list-inside space-y-4 text-body text-lg">
                  <li>Reduced operational costs and improved efficiency</li>
                  <li>Enhanced visibility and control over your contingent workforce</li>
                  <li>Scalable solutions that grow with your business</li>
                  <li>Expert team dedicated to your success</li>
                  <li>Proven track record with industry-leading organizations</li>
                </ul>
                <div className="mt-8">
                  <Link to="/book-a-demo">
                    <button className="btn-primary">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
