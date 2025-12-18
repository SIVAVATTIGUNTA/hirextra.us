import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import directSourcing from "../assets/images/direct-sourcing.jpg"
import staffingService from "../assets/images/staffing-service.jpg"

export default function DirectSourcing() {
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
                  Direct Sourcing Solution
                </h1>
                <p className="text-lg text-body mb-6">
                  Build and manage your own talent pipeline with our direct sourcing platform. Reduce costs, improve quality, and maintain direct relationships with candidates.
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
                  alt="Direct Sourcing"
                  loading="lazy"
                  className="w-full max-w-md h-auto max-h-96 rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Direct Sourcing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl mb-4 text-dark">
                What is Direct Sourcing?
              </h2>
              <p className="text-xl text-body mt-6">
                Take control of your talent acquisition strategy
              </p>
            </div>

            <div className="bg-light p-8 rounded-lg shadow-lg mb-12">
              <p className="text-lg text-body text-center">
                Direct Sourcing allows organizations to source, engage, and hire talent directly without relying on traditional staffing agencies. Our platform provides the tools and technology needed to build and maintain your own talent community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-dark">
                Direct Sourcing Capabilities
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Talent Pool Building
                </h5>
                <p className="text-body">
                  Create and maintain a private talent pool of pre-vetted candidates ready for immediate placement.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Candidate Engagement
                </h5>
                <p className="text-body">
                  Build strong relationships with candidates through automated engagement and nurturing campaigns.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  AI-Powered Matching
                </h5>
                <p className="text-body">
                  Leverage AI to match candidates from your talent pool to open positions with precision and speed.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Branded Career Sites
                </h5>
                <p className="text-body">
                  Create custom career sites that reflect your brand and attract top talent directly to your organization.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Analytics & Reporting
                </h5>
                <p className="text-body">
                  Track performance metrics and gain insights into your sourcing effectiveness and candidate pipeline health.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Global Reach
                </h5>
                <p className="text-body">
                  Access talent from around the world with our global sourcing capabilities and market intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl mb-6 text-dark">
                  Benefits of Direct Sourcing
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-xl text-dark mb-2">Cost Savings</h3>
                    <p className="text-body">
                      Eliminate agency markups and reduce total cost of hiring by up to 30-40% while maintaining quality.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-dark mb-2">Faster Hiring</h3>
                    <p className="text-body">
                      Reduce time-to-fill with a ready pool of qualified candidates who are already engaged with your brand.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-dark mb-2">Better Candidate Quality</h3>
                    <p className="text-body">
                      Direct relationships with candidates lead to better cultural fit and long-term retention.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-dark mb-2">Brand Control</h3>
                    <p className="text-body">
                      Maintain control over your employer brand and candidate experience throughout the hiring process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={staffingService}
                  alt="Direct Sourcing Benefits"
                  loading="lazy"
                  className="w-full max-w-md h-auto max-h-96 rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link to="/book-a-demo">
                <button className="bg-brand text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                  Get Started with Direct Sourcing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
