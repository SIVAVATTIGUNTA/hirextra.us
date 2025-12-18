import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import consultingServices from "../assets/images/consulting-services.jpg"
import recruitmentService from "../assets/images/recruitment-service.jpg"

export default function RecruitmentProcessOutsourcing() {
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
                  AI Recruitment Process Outsourcing (AI-RPO)
                </h1>
                <p className="text-lg text-body mb-6">
                  Hirextra AI Recruitment Process Outsourcing (RPO) for small businesses provides a cost-effective and efficient solution to improve recruitment using AI technologies. Small businesses can utilize advanced tools and expertise through AI RPO to streamline hiring procedures and attract top talent.
                </p>
                <Link to="/book-a-demo">
                  <button className="btn-primary flex items-center gap-2 mt-6">
                    Get Started
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="flex justify-center">
                <img
                  src={consultingServices}
                  alt="Recruitment Process Outsourcing"
                  loading="lazy"
                  className="w-full max-w-md h-auto max-h-96 rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-dark">
                Key Features of Our AI-RPO Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-light p-8 rounded-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  AI-Powered Sourcing
                </h5>
                <p className="text-body">
                  Leverage advanced AI algorithms to source, screen, and match candidates with precision and speed, reducing time-to-hire significantly.
                </p>
              </div>

              <div className="bg-light p-8 rounded-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Intelligent Candidate Matching
                </h5>
                <p className="text-body">
                  Our AI system analyzes candidate profiles, skills, and experience to find the best matches for your job requirements.
                </p>
              </div>

              <div className="bg-light p-8 rounded-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Automated Screening
                </h5>
                <p className="text-body">
                  Streamline the initial screening process with AI-powered resume parsing and candidate evaluation tools.
                </p>
              </div>

              <div className="bg-light p-8 rounded-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Scalable Solutions
                </h5>
                <p className="text-body">
                  Scale your recruitment efforts up or down based on your business needs without compromising on quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-dark">
                Key Benefits of AI-RPO
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
                  <h5 className="font-heading text-xl mb-2 text-dark">Scalable Solutions</h5>
                  <p className="text-body">
                    AI RPO can be customized to the specific needs and size of small businesses, providing scalable solutions for their recruitment challenges.
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
                  <h5 className="font-heading text-xl mb-2 text-dark">Time and Cost Savings</h5>
                  <p className="text-body">
                    By automating repetitive tasks like resume screening and candidate matching, AI RPO helps save time and reduce recruitment costs.
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
                  <h5 className="font-heading text-xl mb-2 text-dark">Improved Quality of Hire</h5>
                  <p className="text-body">
                    AI algorithms ensure a data-driven approach to candidate selection, resulting in higher-quality hires that fit the business requirements.
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
                  <h5 className="font-heading text-xl mb-2 text-dark">Enhanced Candidate Experience</h5>
                  <p className="text-body">
                    The use of AI technology enhances the candidate experience by providing quick responses, personalized interactions, and a seamless recruitment journey.
                  </p>
                </div>
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
                  Why Choose AI-RPO?
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-xl text-dark mb-2">Cost Efficiency</h3>
                    <p className="text-body">
                      Reduce recruitment costs by up to 40% while maintaining high-quality hires through AI automation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-dark mb-2">Faster Hiring</h3>
                    <p className="text-body">
                      Cut time-to-fill by 50% with AI-powered candidate sourcing and matching processes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-dark mb-2">Better Quality</h3>
                    <p className="text-body">
                      Improve candidate quality through intelligent screening and matching algorithms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={recruitmentService}
                  alt="AI RPO Benefits"
                  loading="lazy"
                  className="w-full max-w-md h-auto max-h-96 rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
