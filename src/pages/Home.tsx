import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Sparkles, Globe, Bot, ArrowRight, PlayCircle } from 'lucide-react';
// Import images
import recruitingTechnology from "../assets/images/recruiting-technology.png"
import whoWeAre from "../assets/images/who-we-are.webp"
import directSourcingHero from "../assets/images/direct-sourcing-hero.webp"
import dataSet from "../assets/images/data-set.webp"
import contingentWorkers from "../assets/images/contingent-workers.webp"
import msp1 from "../assets/images/msp-1.png"
import msp2 from "../assets/images/msp-2.png"
import rpo1 from "../assets/images/rpo-1.png"
import rpo2 from "../assets/images/rpo-2.png"
import raas1 from "../assets/images/raas-1.png"
import raas2 from "../assets/images/raas-2.png"
import saas1 from "../assets/images/saas-1.png"
import saas2 from "../assets/images/saas-2.png"
import skillPassport from "../assets/images/skill-passport.png"
import hiregpt from "../assets/images/hiregpt.png"
import aiRecruiter from "../assets/images/ai-recruiter.png"
import autonomousAgents from "../assets/images/autonomous-agents.gif"
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
import multitasking from "../assets/images/multitasking.svg"
import peopleData from "../assets/images/people-data.webp"

export default function Home() {
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
  const handleNavigation = (path:any) => {
    // OPTION 1: Standard Window Navigation
    window.location.href = path;

    // OPTION 2: If using React Router, uncomment below:
    // navigate(path);

    // OPTION 3: If using Next.js, uncomment below:
    // router.push(path);
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value)
  }

  return (
    <>
      <Navbar />

<section className="relative bg-[#0B0F19] text-white overflow-hidden min-h-screen flex flex-col justify-center">

      {/* --- BACKGROUND EFFECTS --- */}
      
      {/* 1. Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* 2. Soft Animated Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] opacity-50 animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[100px] opacity-50" />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-8 text-center lg:text-left">

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase text-blue-100/80">
                  AI-Powered Staffing Platform
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-extrabold leading-[1.1] tracking-tight text-white"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                The World’s First <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                  AI Staffing Aggregator
                </span>
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                HireXtra intelligently connects employers with the right recruitment agencies—faster, smarter, and at global scale using autonomous AI agents.
              </p>

              {/* AI + HI = ROI Formula */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 backdrop-blur-sm mt-4">
                <span className="text-2xl font-bold text-white">AI</span>
                <span className="text-xl text-slate-300">+</span>
                <span className="text-2xl font-bold text-white">HI</span>
                <span className="text-xl text-slate-300">=</span>
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">ROI</span>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
                
                {/* Primary Button */}
                <button
                  onClick={() => handleNavigation('/platform-overview')}
                  className="group relative px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-lg overflow-hidden transition-all hover:scale-105 shadow-lg shadow-blue-500/25 w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -translate-x-full" />
                  <span className="flex items-center justify-center gap-2">
                    Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                {/* Secondary Button */}
                <button
                  onClick={() => handleNavigation('/book-a-demo')}
                  className="group px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center gap-2">
                    <PlayCircle className="w-5 h-5 text-blue-400" /> Book a Demo
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE (With Floating Effect) */}
           {/* RIGHT IMAGE SECTION */}
<div className="relative flex justify-center lg:justify-end items-center group">
  
  {/* 1. Background Glow - Creates that "AI energy" look behind the image */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700"></div>

  {/* 2. Image Container with subtle border glow */}
  <div className="relative z-10 p-2 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
    
    <img
      src={recruitingTechnology}
      alt="AI recruitment technology"
      loading="lazy"
      className="w-full max-w-sm md:max-w-md lg:max-w-lg 
        rounded-[2rem] 
        object-cover 
        opacity-90 
        brightness-110
        contrast-110
        group-hover:opacity-100 transition-opacity"
      style={{
        /* This filter helps blend the image edges if your image has a dark background */
        maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
      }}
    />

    {/* 3. Overlays for extra "Tech" feel */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-40"></div>
    <div className="absolute inset-0 border-[1px] border-white/5 rounded-[2rem] pointer-events-none"></div>
  </div>

  {/* 4. Floating Decorative Elements (Optional) */}
  <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400/20 blur-2xl rounded-full animate-pulse"></div>
  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
</div>

          </div>

          {/* FEATURES SECTION */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center lg:text-left">
            
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 mb-4 mx-auto lg:mx-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Intelligent Matching</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                AI connects employers with the most relevant recruitment agencies instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/10 text-purple-400 mb-4 mx-auto lg:mx-0">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Global Reach</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Access a worldwide network of specialized agency recruiters in seconds.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-400 mb-4 mx-auto lg:mx-0">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Autonomous AI Agents</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Automate your entire hiring workflow with intelligent decision engines.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>

      {/* Engage with Top Talent Section */}
      <section className="py-20 bg-light fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-dark">
              Engage with Top Talent Worldwide via Hirextra
            </h2>
            <p className="text-lg text-body mb-8">
              Hirextra connects businesses with top talent worldwide. We simplify the hiring process by aggregating staffing solutions, saving you time and effort. Our platform ensures you quickly find the perfect fit, helping your team grow efficiently. Let Hirextra handle your staffing needs so you can focus on what matters most.
            </p>
            <Link to="/book-a-demo">
              <button className="btn-primary">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who we are Section */}
      <section className="py-20 bg-white fade-in" id="who-we-are">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="md:col-span-2">
                <h2 className="font-heading text-4xl md:text-5xl mb-6 text-dark">
                  Who we are?
                </h2>
                <p className="text-lg text-body mb-6">
                  As the world's pioneering staffing aggregator, Hirextra transforms recruitment by linking employers with Staffing Agency Recruiters worldwide. Our intelligent platform provides instant access to top talent resources, streamlining the hiring process.
                </p>
                <a
                  href="https://www.hirextra.com/compare/compare_us1.php"
                  target="_blank"
                  rel="noreferrer"
                  className="link-hover inline-flex items-center text-brand font-semibold"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="flex justify-center">
                <img
                  src={whoWeAre}
                  alt=""
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
                    <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
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
                    <path d="M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7z" />
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
                    <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1z" />
                  </svg>
                  <div>
                    <h5 className="font-heading text-xl mb-2 text-dark">AI Platform with 23 IPR's</h5>
                    <p className="text-body">
                      Provides a space that connects agency recruiters and employers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <svg className="w-8 h-8 text-brand mr-4 mt-1" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1z" />
                  </svg>
                  <div>
                    <h5 className="font-heading text-xl mb-2 text-dark">Pre-Hire Measures and Post-Hire Measures</h5>
                    <p className="text-body">
                      Our comprehensive Pre-Hire Measures ensure top talent selection through rigorous screening and assessments, while our Post-Hire Measures support retention and development with effective onboarding and continuous performance tracking.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start mb-4">
                  <svg className="w-8 h-8 text-brand mr-4 mt-1" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <div>
                    <h5 className="font-heading text-xl mb-2 text-dark">Cost Efficiency</h5>
                    <p className="text-body">
                      By aggregating the best recruiters globally, hirextra provides employers access to top-tier talent at a fraction of the cost.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <svg className="w-8 h-8 text-brand mr-4 mt-1" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <div>
                    <h5 className="font-heading text-xl mb-2 text-dark">Effective Solutions (4 hours First Resume)</h5>
                    <p className="text-body">
                      Ensures every hiring requirement is fulfilled effectively
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Sourcing Section */}
      <section className="py-20 bg-light" id="grow-your-talent-pool">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h4 className="font-heading text-3xl md:text-4xl mb-4 text-dark">
              Grow Your Talent Pool with Direct Sourcing
            </h4>
          </div>

          {/* AI/ML-Powered Direct Sourcing */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl mb-6 text-dark">
                AI/ML-Powered Direct Sourcing
              </h2>
              <p className="text-lg text-body mb-6">
                Experience the future of recruitment with our advanced AI and machine learning technology. HireXtra's direct sourcing capabilities ensure you connect with the best talent efficiently and effectively. Our intelligent platform streamlines your hiring process, delivering top candidates quickly and accurately. Let our cutting-edge technology work for you, transforming your staffing needs into a seamless experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand mr-3 mt-1" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <p className="text-body">Automatically Attract and Engage Top Talent</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand mr-3 mt-1" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <p className="text-body">Leverage Advanced Candidate Matching Technology</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand mr-3 mt-1" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <p className="text-body">Cultivate a Diverse and Inclusive Workforce at Scale</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={directSourcingHero}
                alt=""
                loading="lazy"
                className="w-full max-w-md h-auto max-h-96 rounded-lg object-cover"
              />
            </div>
          </div>

          {/* World's Largest People Data Set */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex justify-center order-2 md:order-1">
              <img
                src={dataSet}
                alt=""
                loading="lazy"
                className="w-full max-w-md h-auto max-h-96 rounded-lg object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-heading text-3xl md:text-4xl mb-6 text-dark">
                World's Largest People Data Set
              </h2>
              <p className="text-lg text-body mb-6">
                Harness the power of the world's largest contingent People data set to gain precise rate intelligence for workers sourced globally.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand mr-3 mt-1" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <p className="text-body">Global Talent Pricing</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand mr-3 mt-1" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <p className="text-body">Real-Time Market Rates</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand mr-3 mt-1" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <p className="text-body">Comprehensive Rate Analysis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Customized Talent Solutions */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl mb-6 text-dark">
                Customized Talent Solutions
              </h2>
              <p className="text-lg text-body mb-6">
                Curated Talent Solutions provide a tailored recruitment approach, meticulously selecting top-tier candidates for specific roles. By combining advanced technology with human expertise, these solutions streamline the hiring process and enhance the quality of hires. This service saves time for hiring managers and ensures a positive candidate experience through clear communication and timely feedback.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand mr-3 mt-1" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <p className="text-body">Wider Candidate Access</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand mr-3 mt-1" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <p className="text-body">Automated Talent Funnel</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand mr-3 mt-1" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <p className="text-body">Enhanced Candidate Experience</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={contingentWorkers}
                alt=""
                loading="lazy"
                className="w-full max-w-md h-auto max-h-96 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why We're the Best Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h3 className="font-heading text-3xl md:text-4xl mb-6 text-dark">
                Why We're the Best
              </h3>
              <p className="text-lg text-body mb-8">
                HireXtra offers a wide range of managed staffing solutions to support your business in various areas. Whether you need staffing for healthcare or information technology sectors, or services related to payroll, workforce management, program management and delivery, infrastructure oversight, or managing travel expenses, we've got you covered. Our 24/7 support services and dedicated account management ensure you can focus on the essential operations of your business, ensuring smooth and uninterrupted functionality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-body mb-2">How it works?</p>
                <h3 className="font-heading text-3xl mb-4 text-dark">
                  Top Choice for Staffing Solutions
                </h3>
                <p className="text-body mb-6">
                  Expand your client base, attract more leads, and enhance your sales seamlessly with our easy-to-use one-click platform.
                </p>
                <Link to="/book-a-demo">
                  <button className="btn-primary">
                    Get Started..
                  </button>
                </Link>
              </div>
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="w-8 h-8 text-brand mr-4 mt-1" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                    </svg>
                    <div>
                      <p className="font-heading text-lg text-dark"><strong>Information Technology</strong></p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-8 h-8 text-brand mr-4 mt-1" fill="currentColor" viewBox="0 0 640 512">
                      <path d="M320 368c0 59.5 29.5 112.1 74.8 144H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L522.1 193.9c-8.5-1.3-17.3-1.9-26.1-1.9c-54.7 0-103.5 24.9-135.8 64H320V208c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16v48H208c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16zM496 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 240a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-192c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16V288c0-8.8-7.2-16-16-16z" />
                    </svg>
                    <div>
                      <p className="font-heading text-lg text-dark"><strong>Health Care Industry</strong></p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-8 h-8 text-brand mr-4 mt-1" fill="currentColor" viewBox="0 0 640 512">
                      <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
                    </svg>
                    <div>
                      <p className="font-heading text-lg text-dark"><strong>Cloud Technology</strong></p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-8 h-8 text-brand mr-4 mt-1" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM241 119c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31H120c-13.3 0-24 10.7-24 24s10.7 24 24 24H238.1l-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9l-72-72z" />
                    </svg>
                    <div>
                      <p className="font-heading text-lg text-dark"><strong>Workforce Management</strong></p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-8 h-8 text-brand mr-4 mt-1" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5z" />
                    </svg>
                    <div>
                      <p className="font-heading text-lg text-dark"><strong>24/7 Support Services</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-light fade-in" id="our-services">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-heading text-4xl md:text-5xl mb-4 text-dark">
                Our Services
              </h1>
            </div>

            <div className="space-y-16">
              {/* AI Managed Service Provider Section */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-12 h-12 text-brand" fill="currentColor" viewBox="0 0 576 512">
                      <path d="M152.8 37.2c-32.2 38.1-56.1 82.6-69.9 130.5c0 .2-.1 .3-.1 .5C43.5 184.4 16 223 16 268c0 59.6 48.4 108 108 108s108-48.4 108-108c0-53.5-38.9-97.9-90-106.5c15.7-41.8 40.4-79.6 72.3-110.7c1.8-1.6 4-2.6 6.3-3.1c37.2-11.5 76.7-13.3 114.8-5.2C454.7 67.6 534 180.7 517.1 301.3c-8.4 62.6-38.6 112.7-87.7 151.4c-50.1 39.7-107.5 54.3-170.2 52.2l-24-1c12.4 2.8 25 4.9 37.6 6.3c40.7 4.2 81.4 2.1 120.1-12.5c94-35.5 149.3-102.3 162.9-202.5c4.8-52.6-5.8-105.4-30.8-152C454.6 11.3 290.8-38.4 159 32c-2.4 1.4-4.5 3.1-6.3 5.2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-heading text-xl mb-3 text-dark">AI Managed Service Provider (AI MSP)</h5>
                    <p className="text-body mb-4">
                      Enhance your operational efficiency with Hirextra's Managed Service Provider (MSP) solutions. We manage your AI systems comprehensively, ensuring they perfectly align with your business goals. From deployment to maintenance, we optimize performance and foster innovation
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-body">
                      <li>Instant access to contingent talent pools to overcome shortages and maintain competitive advantage</li>
                      <li>Premium STEM talent sourcing for specialized roles, delivering cost savings without skill compromise</li>
                      <li>Advanced governance with real-time oversight and data-driven actionable insights</li>
                      <li>Diversity-first approach integrated into MSP programs, ensuring inclusive workforce practices</li>
                    </ul>
                    <Link to="/managed-service-provider" className="link-hover inline-block mt-4 text-brand font-semibold">
                      Learn More →
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-gradient-to-br from-blue-200/50 to-purple-200/50 bg-gradient-to-br from-white to-gray-50 p-1 shadow-xl">
                      <img src={msp1} alt="MSP Service" loading="lazy" className="w-full h-48 md:h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-gradient-to-br from-purple-200/50 to-pink-200/50 bg-gradient-to-br from-white to-gray-50 p-1 shadow-xl">
                      <img src={msp2} alt="MSP Service" loading="lazy" className="w-full h-48 md:h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Recruitment Process Outsourcing Section */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-12 h-12 text-brand" fill="currentColor" viewBox="0 0 640 512">
                      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-heading text-xl mb-3 text-dark" id="AI-Recruitment-Process-Outsourcing-(AI-RPO)">AI Recruitment Process Outsourcing (AI RPO)</h5>
                    <p className="text-body mb-4">
                      Hirextra AI Recruitment Process Outsourcing (RPO) for small businesses provides a cost-effective and efficient solution to improve recruitment using AI technologies. Small businesses can utilize advanced tools and expertise through AI RPO to streamline hiring procedures and attract top talent.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-body">
                      <li>Fully scalable solutions tailored to business size and specific recruitment needs</li>
                      <li>Automated resume screening and candidate matching reduce time-to-hire by up to 50%</li>
                      <li>AI-powered algorithms deliver data-driven candidate selection for higher-quality hires</li>
                      <li>Seamless candidate experience with instant responses and personalized interactions</li>
                    </ul>
                    <Link to="/recruitment-process-outsourcing" className="link-hover inline-block mt-4 text-brand font-semibold">
                      Learn More →
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-gradient-to-br from-emerald-200/50 to-teal-200/50 bg-gradient-to-br from-white to-gray-50 p-1 shadow-xl">
                      <img src={rpo1} alt="RPO Service" loading="lazy" className="w-full h-48 md:h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-gradient-to-br from-teal-200/50 to-cyan-200/50 bg-gradient-to-br from-white to-gray-50 p-1 shadow-xl">
                      <img src={rpo2} alt="RPO Service" loading="lazy" className="w-full h-48 md:h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recruiting as a Service Section */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-12 h-12 text-brand" fill="currentColor" viewBox="0 0 640 512">
                      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-heading text-xl mb-3 text-dark">Recruiting as a Service(RAAS)</h5>
                    <p className="text-body mb-4">
                      Recruiting as a Service (RaaS) is a comprehensive solution provided by Hirextra to streamline the entire recruitment process for organizations. With RaaS, clients can benefit from a personalized and efficient approach to sourcing, screening, and hiring top talent.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-body">
                      <li>Custom recruitment strategies designed to align with your unique hiring objectives</li>
                      <li>AI-powered candidate sourcing and comprehensive screening for optimal role fit</li>
                      <li>End-to-end interview coordination with seamless scheduling and communication</li>
                      <li>Complete offer management from negotiation through onboarding for smooth transitions</li>
                    </ul>
                    <Link to="/raas" className="link-hover inline-block mt-4 text-brand font-semibold">
                      Learn More →
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-gradient-to-br from-orange-200/50 to-red-200/50 bg-gradient-to-br from-white to-gray-50 p-1 shadow-xl">
                      <img src={raas1} alt="RAAS Service" loading="lazy" className="w-full h-48 md:h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-rose-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-gradient-to-br from-red-200/50 to-rose-200/50 bg-gradient-to-br from-white to-gray-50 p-1 shadow-xl">
                      <img src={raas2} alt="RAAS Service" loading="lazy" className="w-full h-48 md:h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sourcing as a Service Section */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-12 h-12 text-brand" fill="currentColor" viewBox="0 0 640 512">
                      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-heading text-xl mb-3 text-dark">Sourcing as a Service (SAAS)</h5>
                    <p className="text-body mb-4">
                      Sourcing as a Service (SaaS) is an innovative solution offered by Hirextra that transforms how companies find top talent. With SaaS, clients can experience a smooth and efficient sourcing process, driven by AI algorithms and advanced technologies.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-body">
                      <li>Automated resume sourcing across multiple databases and public sources for comprehensive candidate discovery</li>
                      <li>Intelligent matching and scoring system evaluates resumes against job specifications with precision</li>
                      <li>Automated direct candidate outreach streamlines communication and accelerates engagement</li>
                      <li>Minimal manual intervention maximizes efficiency while maintaining high-quality sourcing results</li>
                    </ul>
                    <Link to="/saas" className="link-hover inline-block mt-4 text-brand font-semibold">
                      Learn More →
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-gradient-to-br from-indigo-200/50 to-blue-200/50 bg-gradient-to-br from-white to-gray-50 p-1 shadow-xl">
                      <img src={saas1} alt="SAAS Service" loading="lazy" className="w-full h-48 md:h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-gradient-to-br from-blue-200/50 to-indigo-200/50 bg-gradient-to-br from-white to-gray-50 p-1 shadow-xl">
                      <img src={saas2} alt="SAAS Service" loading="lazy" className="w-full h-48 md:h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <video controls playsInline className="w-full rounded-lg shadow-xl">
              <source
                src="https://cdn.dorik.com/667c5194be1733001e80582c/videos/videoplayback1-0uQVE.mp4"
                type="video/mp4"
              />
              Your browser doesn't support HTML5 video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Supercharge your recruitment Section */}
      <section className="py-20 bg-light fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl mb-4 text-dark">
                Supercharge your recruitment with Hirextra!
              </h2>
              <p className="text-lg text-body max-w-3xl mx-auto">
                HireXtra is an AI recruitment startup innovating the hiring process with intelligent solutions like HireGPT, SkillPassport and Autonomous AI Recruiter.
              </p>
            </div>

            {/* Features Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-purple-600 text-white p-8 rounded-lg">
                <img
                  src={skillPassport}
                  alt="Skill Passport"
                  className="w-full h-32 object-contain mb-4"
                />
                <h4 className="font-heading text-2xl mb-4">Hirextra Skill passport</h4>
                <p className="mb-6 opacity-90 text-sm">
                  Skill Passport on HireXtra.com is an innovative feature designed to revolutionize the way employers and recruiters manage and verify candidate skills. This comprehensive digital profile encapsulates a candidate's verified skills, certifications, and experiences, making the recruitment process more efficient and transparent.
                </p>
                <a
                  href="https://hirextra.com/skillpassport_us"
                  target="_blank"
                  rel="noreferrer"
                  className="link-hover inline-flex items-center text-white"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="bg-pink-500 text-white p-8 rounded-lg card-hover">
                <img
                  src={hiregpt}
                  alt="HireGPT"
                  className="w-full h-32 object-contain mb-4"
                />
                <h4 className="font-heading text-2xl mb-4">HireGPT</h4>
                <p className="mb-6 opacity-90 text-sm">
                  AI recruiters, and talent professionals can swiftly discover top-notch candidates with our hireGPT. It provides deeper insights into employees, streamlining onboarding and enabling smarter hiring choices for organizational advancement.
                </p>
                <a
                  href="https://hirextra.com/hiregpt/h/index.html"
                  target="_blank"
                  rel="noreferrer"
                  className="link-hover inline-flex items-center text-white"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg card-hover">
                <img
                  src={aiRecruiter}
                  alt="AI Digital Recruiter"
                  className="w-full h-32 object-contain mb-4"
                />
                <h4 className="font-heading text-2xl mb-4 text-dark">AI Digital Recruiter</h4>
                <p className="mb-6 text-body text-sm">
                  At HireXtra.com, we're redefining recruitment through cutting-edge AI technology. Our platform harnesses the power of artificial intelligence to streamline and enhance every step of the hiring process, from sourcing to onboarding.
                </p>
                <a
                  href="https://ddna-kumar-vuppala--recruiter.soului.dh.az.soulmachines.cloud/?sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDAxODQ1MDIsImlzcyI6InNpZ25lZF91cmwtOWUzMzllMDQtMmQ3Ni00NGRhLTljN2ItZTVkMDExNTAwYzAzIiwiZXhwIjoxNzg2NDk4MTAyLCJlbWFpbCI6Imt1bWFyLXZ1cHBhbGEtLXJlY3J1aXRlckBkZG5hLnN0dWRpbyIsInNvdWxJZCI6ImRkbmEta3VtYXItdnVwcGFsYS0tcmVjcnVpdGVyIn0.ebE2X6ojLqLAZVSq3rlUcS_D4n_Is6SZhtCvwr31sSE"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-brand hover:underline"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="bg-purple-600 text-white p-8 rounded-lg">
                <img
                  src={autonomousAgents}
                  alt="Autonomous AI Agents"
                  className="w-full h-32 object-contain mb-4"
                />
                <h4 className="font-heading text-2xl mb-4">Autonomous AI Agents</h4>
                <p className="mb-6 opacity-90 text-sm">
                  Our AI recruiters harness the combined capabilities of artificial intelligence (AI) and human intelligence (HI) to form a robust recruitment force. By seamlessly integrating AI agents with human experts, we offer a comprehensive approach to talent acquisition that boosts efficiency and effectiveness, establishing new industry benchmarks.
                </p>
                <a
                  href="https://talanton.ai/our-team/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-hover inline-flex items-center text-white"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-heading text-3xl mb-4 text-dark">Accelerate Your Hiring with AI-Driven Tools</h3>
              <Link to="/book-a-demo">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-100">
                  Request Interest
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global staffing platform Section */}
      <section className="py-20 bg-white fade-in" id="Global-staffing-platform">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl mb-4 text-dark">
                Global staffing platform
              </h2>
              <p className="text-lg text-body max-w-3xl mx-auto">
                Hirextra offers revolutionary global staffing solutions helping companies hire top talent across 142 countries. Our AI-powered platform handles everything from sourcing and background checks to payroll and compliance.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-brand" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                  </svg>
                </div>
                <h4 className="font-heading text-xl mb-2 text-dark">Direct Sourcing</h4>
                <p className="text-body">
                  We use advanced sourcing techniques like farming, hunting, nesting and harvesting to find the perfect candidates for your roles.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-brand" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-312 8v64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96V280c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>
                </div>
                <h4 className="font-heading text-xl mb-2 text-dark">Intelligent Matching</h4>
                <p className="text-body">
                  Leverages deep learning to analyze job requirements and candidate profiles, ensuring precise matches based on skills, experience, and cultural fit.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-brand" fill="currentColor" viewBox="0 0 384 512">
                    <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM128 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM80 432c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16z" />
                  </svg>
                </div>
                <h4 className="font-heading text-xl mb-2 text-dark">Automated Screening</h4>
                <p className="text-body">
                  Conducts initial screenings and interviews using AI-driven voice technology, significantly reducing time-to-hire.
                </p>
              </div>
            </div>

            {/* More Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-brand" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M384 160c0-70.7-57.3-128-128-128s-128 57.3-128 128c0 5.4 .4 10.7 1.1 16H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h49.1c.7 5.3 1.1 10.6 1.1 16c0 70.7 57.3 128 128 128s128-57.3 128-128c0-5.4-.4-10.7-1.1-16H368c8.8 0 16-7.2 16-16s-7.2-16-16-16h-49.1c-.7-5.3-1.1-10.6-1.1-16zM224 288c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                  </svg>
                </div>
                <h4 className="font-heading text-xl mb-2 text-dark">Resume Harvesting</h4>
                <p className="text-body">
                  Collect and parse resumes from various sources to build a rich candidate database.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-brand" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z" />
                  </svg>
                </div>
                <h4 className="font-heading text-xl mb-2 text-dark">Analytics and Reporting</h4>
                <p className="text-body">
                  Real-time data and insights on recruitment metrics and performance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-brand" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                  </svg>
                </div>
                <h4 className="font-heading text-xl mb-2 text-dark">Collaborative Hiring</h4>
                <p className="text-body">
                  Tools that allow team members to collaborate on candidate evaluation and decision-making.
                </p>
              </div>
            </div>

            {/* Additional Features: Farming, Hunting, Nesting */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-brand" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                  </svg>
                </div>
                <h4 className="font-heading text-xl mb-2 text-dark">Farming</h4>
                <p className="text-body">
                  Our innovative approach streamlines and enhances the candidate sourcing process by directly extracting comprehensive and relevant information. This method allows users to effortlessly access detailed candidate data, saving time and reducing the administrative burden of manual data entry.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-brand" fill="currentColor" viewBox="0 0 576 512">
                    <path d="M91.7 96C106.3 86.8 116 70.5 116 52C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 3 0 352 0 64 64 0 0-64 373.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L91.7 96z" />
                  </svg>
                </div>
                <h4 className="font-heading text-xl mb-2 text-dark">Hunting</h4>
                <p className="text-body">
                  Active and targeted approach to finding candidates who meet your specific needs, ensuring they fit your company's environment and culture.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-brand" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M224 0a80 80 0 1 1 0 160A80 80 0 1 1 224 0zM436.8 382.8L373.5 462c-16.6 20.7-46.8 24.1-67.5 7.5c-17.6-14.1-22.7-38.1-13.5-57.7l-.8-.1c-38.9-5.6-74.3-25.1-99.7-54.8V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 .8 0 1.6 .1 2.4l101.4 50.7c23.7 11.9 33.3 40.7 21.5 64.4s-40.7 33.3-64.4 21.5L27.2 427.3c-1.1-.5-2.2-1.1-3.3-1.7c-4.9-2.8-9.2-6.4-12.6-10.6c-4.6-5.4-7.8-11.7-9.6-18.4c-3.3-12-1.9-25.2 4.8-36.6c.6-1.1 1.3-2.2 2-3.2L75.6 256.1c26.7-40.1 71.7-64.1 119.8-64.1h75.2c46.5 0 90.1 22.5 117.2 60.3l50.7 70.9c2.2 3 4 6.1 5.5 9.4c2.9 6.7 4.3 13.8 4 20.8c-.3 10.6-4.2 21-11.2 29.4zM320 332a44 44 0 1 0 -88 0 44 44 0 1 0 88 0z" />
                  </svg>
                </div>
                <h4 className="font-heading text-xl mb-2 text-dark">Nesting</h4>
                <p className="text-body">
                  Our innovative Nesting approach consolidates and organizes candidate information in a structured and accessible way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 bg-light fade-in" id="Our-Clients">
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

      {/* Statistics Section */}
      <section className="py-20 bg-light">
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
                        <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
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
                        <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
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
                        <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" />
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
                        <path d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6z" />
                      </svg>
                      <h3 className="font-heading text-4xl text-pink-500">23</h3>
                    </div>
                    <h4 className="font-heading text-xl mb-2 text-dark">Algorithms</h4>
                    <p className="text-body text-sm">
                      Our 23 proprietary algorithms ensure we make the best recommendations for hiring.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 flex justify-center">
                <img
                  src={multitasking}
                  alt=""
                  loading="lazy"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Meeting Section */}
      <section className="py-20 bg-white" id="Schedule-a-meeting">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-lg p-8 shadow-lg">
              <div>
                <h3 className="font-heading text-3xl mb-6 text-dark">
                  Schedule a meeting to learn more about our platform.
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                  <input
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                  <textarea
                    placeholder="Write your message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LciWC8sAAAAANlYmO4NYJpjv5aUOeTEIHHegAl5"
                      onChange={handleRecaptchaChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className="flex justify-center">
                <img
                  src={peopleData}
                  alt=""
                  loading="lazy"
                  className="max-w-full h-auto rounded-lg"
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
