import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import staffingService from "../assets/images/staffing-service.jpg"
import recruitmentService from "../assets/images/recruitment-service.jpg"

export default function SAAS() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-dark text-white py-24 pt-40">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-heading text-4xl md:text-5xl mb-6 text-white">
                  Staffing as a Service (SAAS)
                </h1>
                <p className="text-lg text-gray-300 mb-6">
                  Sourcing as a Service (SaaS) is an innovative solution offered by Hirextra that transforms how companies find top talent. With SaaS, clients can experience a smooth and efficient sourcing process, driven by AI algorithms and advanced technologies.
                </p>
                <Link to="/book-a-demo">
                  <button className="btn-primary flex items-center gap-2 mt-6">
                    Explore SAAS
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="flex justify-center">
                <img
                  src={staffingService}
                  alt="Staffing as a Service"
                  loading="lazy"
                  className="w-full max-w-md h-auto max-h-96 rounded-lg shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is SAAS Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl mb-4 text-dark">
                What is SAAS?
              </h2>
              <p className="text-xl text-body mt-6">
                A comprehensive staffing solution delivered as a service
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <p className="text-lg text-body text-center">
                Staffing as a Service (SAAS) provides organizations with a complete staffing management platform that handles everything from talent sourcing to workforce analytics. It combines technology, expertise, and resources to deliver optimal staffing outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-dark">
                Key Features of SAAS
              </h2>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-brand mt-1" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-heading text-xl mb-2 text-dark">Automated Resume Sourcing</h5>
                  <p className="text-body">
                    Our AI-powered system searches through various connected databases and publicly available sources to find potential candidates that meet your requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-brand mt-1" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-heading text-xl mb-2 text-dark">Smart Match and Score</h5>
                  <p className="text-body">
                    The system assesses and scores resumes based on predefined criteria, ensuring an accurate match with your job specifications.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-brand mt-1" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-heading text-xl mb-2 text-dark">Direct Calling</h5>
                  <p className="text-body">
                    After scoring resumes, our system can initiate direct contact with candidates, streamlining communication.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-brand mt-1" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-heading text-xl mb-2 text-dark">Minimal Human Interaction</h5>
                  <p className="text-body">
                    SaaS reduces the need for manual intervention, saving time and resources while delivering high-quality results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-dark">
                Platform Features
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  AI-Powered Matching
                </h5>
                <p className="text-body">
                  Intelligent candidate-job matching using advanced algorithms to find the perfect fit for every role.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Real-Time Analytics
                </h5>
                <p className="text-body">
                  Comprehensive dashboards and reports providing insights into workforce performance and costs.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Vendor Management
                </h5>
                <p className="text-body">
                  Centralized platform to manage all staffing vendors, contracts, and relationships in one place.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Compliance Management
                </h5>
                <p className="text-body">
                  Automated compliance tracking and reporting to ensure adherence to all labor regulations.
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
                  src={recruitmentService}
                  alt="SAAS Benefits"
                  loading="lazy"
                  className="w-full max-w-md h-auto max-h-96 rounded-lg shadow-xl object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-heading text-3xl md:text-4xl mb-6 text-dark">
                  Why Choose SAAS?
                </h2>
                <ul className="list-disc list-inside space-y-4 text-body text-lg">
                  <li>Complete staffing solution in one integrated platform</li>
                  <li>Reduced administrative burden and operational costs</li>
                  <li>Enhanced visibility and control over your workforce</li>
                  <li>Scalable to meet growing business needs</li>
                  <li>Continuous innovation and platform updates</li>
                  <li>Expert support and guidance throughout</li>
                </ul>
                <div className="mt-8">
                  <Link to="/book-a-demo">
                    <button className="bg-brand text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                      Request Demo
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
