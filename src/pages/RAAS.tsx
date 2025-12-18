import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import recruitmentService from "../assets/images/recruitment-service.jpg"
import directSourcing from "../assets/images/direct-sourcing.jpg"

export default function RAAS() {
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
                  Recruitment as a Service (RAAS)
                </h1>
                <p className="text-lg text-gray-300 mb-6">
                  Recruiting as a Service (RaaS) is a comprehensive solution provided by Hirextra to streamline the entire recruitment process for organizations. With RaaS, clients can benefit from a personalized and efficient approach to sourcing, screening, and hiring top talent.
                </p>
                <Link to="/book-a-demo">
                  <button className="btn-primary flex items-center gap-2 mt-6">
                    Discover RAAS
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="flex justify-center">
                <img
                  src={recruitmentService}
                  alt="Recruitment as a Service"
                  loading="lazy"
                  className="w-full max-w-md h-auto max-h-96 rounded-lg shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is RAAS Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl mb-4 text-dark">
                What is RAAS?
              </h2>
              <p className="text-xl text-body mt-6">
                Recruitment as a Service delivers full-cycle recruitment capabilities on-demand
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <p className="text-lg text-body text-center">
                RAAS is a flexible service model that provides organizations with access to professional recruitment services without the need to maintain a full in-house recruitment team. You get the expertise, technology, and resources you need, when you need them.
              </p>
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
                RAAS Features
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-light p-8 rounded-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Full-Cycle Recruitment
                </h5>
                <p className="text-body">
                  End-to-end recruitment services from job posting to onboarding, handled by experienced recruiters.
                </p>
              </div>

              <div className="bg-light p-8 rounded-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Flexible Engagement
                </h5>
                <p className="text-body">
                  Scale your recruitment efforts up or down based on hiring needs without long-term commitments.
                </p>
              </div>

              <div className="bg-light p-8 rounded-lg">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Cost-Effective
                </h5>
                <p className="text-body">
                  Reduce recruitment costs by eliminating the need for dedicated internal recruitment infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-dark">
                Key Features of RAAS
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
                  <h5 className="font-heading text-xl mb-2 text-dark">Tailored Recruitment Strategy</h5>
                  <p className="text-body">
                    Our team collaborates with clients to understand their unique hiring needs and devise a customized recruitment plan.
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
                  <h5 className="font-heading text-xl mb-2 text-dark">Candidate Sourcing and Screening</h5>
                  <p className="text-body">
                    Utilizing AI algorithms and data-driven insights, we source high-quality candidates and conduct thorough screenings to ensure the best fit for the role.
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
                  <h5 className="font-heading text-xl mb-2 text-dark">Interview Coordination</h5>
                  <p className="text-body">
                    RaaS includes managing the interview process, scheduling candidate interactions, and facilitating communication between all parties involved.
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
                  <h5 className="font-heading text-xl mb-2 text-dark">Offer Management</h5>
                  <p className="text-body">
                    From negotiation to onboarding, we handle offer management to ensure a smooth transition for the selected candidates.
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
                  Benefits of RAAS
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-xl text-dark mb-2">Rapid Scalability</h3>
                    <p className="text-body">
                      Quickly scale your recruitment capacity to meet changing business demands without the overhead of hiring and training.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-dark mb-2">Access to Expertise</h3>
                    <p className="text-body">
                      Benefit from specialized recruitment expertise across various industries and job functions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-dark mb-2">Advanced Technology</h3>
                    <p className="text-body">
                      Leverage cutting-edge recruitment technology and tools without the investment in infrastructure.
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/book-a-demo">
                    <button className="btn-primary">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={directSourcing}
                  alt="RAAS Benefits"
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
