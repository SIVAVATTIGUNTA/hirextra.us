import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// Import images
import partnerNetwork from "../assets/images/recruiting-technology.png"
import partnerNetworkContent from "../assets/images/who-we-are.webp"
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

export default function PartnerNetwork() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-dark text-white py-24 pt-40">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h6 className="font-heading text-2xl md:text-3xl mb-8">
                The world's first staffing aggregator, utilizing AI in HR technology <br className="hidden md:block" />to disrupt the industry as a unicorn!
                <br />
                <span className="block mt-4 text-lg opacity-90">
                  HireXtra is equipped to serve 12 million employees <br className="hidden md:block" />with a combined spending surpassing $5 trillion.
                </span>
              </h6>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-heading text-4xl md:text-5xl mb-6 text-white">
                  Partner Network - Building Strong Connections
                </h1>
                <p className="text-lg text-gray-300 mb-4">
                  As the world's pioneering staffing aggregator, Hirextra transforms recruitment by linking employers with Staffing Agency Recruiters worldwide. Our intelligent platform provides instant access to top talent resources, streamlining the hiring process.
                </p>
                <p className="text-base text-gray-300 mb-6">
                  Hirextra leverages proprietary technology, massive datasets, and global reach to efficiently connect employers to specialized agency recruiters worldwide. By aggregating the best recruiters globally, Hirextra provides employers access to top-tier talent at a fraction of the cost.
                </p>
                <Link to="/book-a-demo">
                  <button className="btn-primary flex items-center gap-2 mt-6">
                    Become a Partner
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="flex justify-center">
                <img
                  src={partnerNetwork}
                  alt="Partner Network"
                  loading="lazy"
                  className="w-full max-w-md h-auto max-h-96 rounded-lg shadow-2xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="md:col-span-2">
                <h2 className="font-heading text-4xl md:text-5xl mb-6 text-dark">
                  Why Partner with Hirextra?
                </h2>
                <p className="text-lg text-body mb-6">
                  As the world's pioneering staffing aggregator, Hirextra transforms recruitment by linking employers with Staffing Agency Recruiters worldwide. Our intelligent platform provides instant access to top talent resources, streamlining the hiring process.
                </p>
                <p className="text-lg text-body mb-6">
                  By aggregating the best recruiters globally, Hirextra provides employers access to top-tier talent at a fraction of the cost. Our platform provides a space that connects agency recruiters and employers, ensuring every hiring requirement is fulfilled effectively.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={partnerNetworkContent}
                  alt="Partner Network"
                  loading="lazy"
                  className="w-full max-w-md h-auto max-h-96 rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-start mb-4">
                  <svg className="w-8 h-8 text-brand mr-4 mt-1" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
                  </svg>
                  <div>
                    <h5 className="font-heading text-xl mb-2 text-dark">Dedicated Account Manager Support</h5>
                    <p className="text-body">
                      Our dedicated Account Manager Support ensures that you receive personalized assistance tailored to your unique needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <svg className="w-8 h-8 text-brand mr-4 mt-1" fill="currentColor" viewBox="0 0 576 512">
                    <path d="M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7z"/>
                  </svg>
                  <div>
                    <h5 className="font-heading text-xl mb-2 text-dark">Instant Pipeline</h5>
                    <p className="text-body">
                      Our innovative platform instantly matches employers to specified recruiters around the world to meet urgent hiring need.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start mb-4">
                  <svg className="w-8 h-8 text-brand mr-4 mt-1" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1z"/>
                  </svg>
                  <div>
                    <h5 className="font-heading text-xl mb-2 text-dark">Connecting Space</h5>
                    <p className="text-body">
                      Provides a space that connects agency recruiters and employers, creating seamless collaboration opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <svg className="w-8 h-8 text-brand mr-4 mt-1" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                  </svg>
                  <div>
                    <h5 className="font-heading text-xl mb-2 text-dark">Pre-Hire & Post-Hire Measures</h5>
                    <p className="text-body">
                      Our comprehensive Pre-Hire Measures ensure top talent selection through rigorous screening and assessments, while our Post-Hire Measures support retention and development with effective onboarding and continuous performance tracking.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start mb-4">
                  <svg className="w-8 h-8 text-brand mr-4 mt-1" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0-128 0L0 288l0 144c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-144z"/>
                  </svg>
                  <div>
                    <h5 className="font-heading text-xl mb-2 text-dark">Cost-Effective Solutions</h5>
                    <p className="text-body">
                      By aggregating the best recruiters globally, Hirextra provides employers access to top-tier talent at a fraction of the cost.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <svg className="w-8 h-8 text-brand mr-4 mt-1" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
                  </svg>
                  <div>
                    <h5 className="font-heading text-xl mb-2 text-dark">Global Reach</h5>
                    <p className="text-body">
                      Leverage our proprietary technology, massive datasets, and global reach to efficiently connect with employers and specialized agency recruiters worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl mb-4 text-dark">
                Why Join Our Partner Network?
              </h2>
              <p className="text-xl text-body mt-6">
                Unlock exclusive benefits and opportunities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Expanded Reach
                </h5>
                <p className="text-body">
                  Access a broader client base and expand your market presence through our extensive network of partners and clients across 142 payroll countries and 70+ staffing countries.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Collaborative Growth
                </h5>
                <p className="text-body">
                  Work together with industry leaders to deliver exceptional solutions and drive mutual success. Our platform connects you with employers seeking top-tier talent.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                <h5 className="font-heading text-2xl mb-4 text-dark">
                  Innovation & Technology
                </h5>
                <p className="text-body">
                  Leverage cutting-edge AI technologies, massive datasets (3.3B+ data points), and best practices to stay ahead in the competitive market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="font-heading text-3xl md:text-4xl mb-8 text-dark">
                  We believe in numbers
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <svg className="w-8 h-8 text-pink-500 mr-3" fill="currentColor" viewBox="0 0 512 512">
                        <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"/>
                      </svg>
                      <h3 className="font-heading text-4xl text-pink-500">142</h3>
                    </div>
                    <h4 className="font-heading text-xl mb-2 text-dark">Payroll Countries</h4>
                    <p className="text-body text-sm">
                      We manage payroll and compliance in 142 countries around the world.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-4">
                      <svg className="w-8 h-8 text-pink-500 mr-3" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/>
                      </svg>
                      <h3 className="font-heading text-4xl text-pink-500">70</h3>
                    </div>
                    <h4 className="font-heading text-xl mb-2 text-dark">Staffing Countries</h4>
                    <p className="text-body text-sm">
                      We operate in over 70 countries, providing global workforce solutions.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-4">
                      <svg className="w-8 h-8 text-pink-500 mr-3" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/>
                      </svg>
                      <h3 className="font-heading text-4xl text-pink-500">3.3B</h3>
                    </div>
                    <h4 className="font-heading text-xl mb-2 text-dark">People Data sets</h4>
                    <p className="text-body text-sm">
                      With access to over 3.3 billion data points, we leverage data and analytics to match talent to roles.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-4">
                      <svg className="w-8 h-8 text-pink-500 mr-3" fill="currentColor" viewBox="0 0 640 512">
                        <path d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6z"/>
                      </svg>
                      <h3 className="font-heading text-4xl text-pink-500">12M</h3>
                    </div>
                    <h4 className="font-heading text-xl mb-2 text-dark">Employees Served</h4>
                    <p className="text-body text-sm">
                      HireXtra is equipped to serve 12 million employees with a combined spending surpassing $5 trillion.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="bg-light p-8 rounded-lg">
                  <h4 className="font-heading text-2xl mb-4 text-dark">Join the Global Network</h4>
                  <p className="text-body mb-6">
                    Become part of the world's first staffing aggregator and leverage our extensive network, cutting-edge technology, and massive datasets to grow your recruitment business.
                  </p>
                  <Link to="/book-a-demo">
                    <button className="bg-brand text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                      Become a Partner Today
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 bg-light" id="Our-Clients">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h3 className="font-heading text-3xl md:text-4xl mb-4 text-dark">
                Our Clients
              </h3>
              <p className="text-lg text-body">
                Partner with us for Recruitment Excellence
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-12">
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
            <div className="text-center">
              <Link to="/book-a-demo">
                <button className="bg-brand text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                  Become a Partner
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
