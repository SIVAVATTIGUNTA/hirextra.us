import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F19]/95 backdrop-blur-md text-white border-b border-white/10 shadow-md py-3">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          
          {/* --- LOGO --- */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="Hirextra" 
              className="h-12 w-auto transition-all duration-300" 
            />
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden lg:flex items-center gap-8">
            
            {/* Platform Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown("platform")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 font-medium text-[15px] text-white hover:text-blue-300 transition-colors">
                Platform <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${openDropdown === "platform" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                <div className="bg-white text-slate-800 rounded-xl shadow-xl border border-gray-100 min-w-[220px] p-2 overflow-hidden">
                  <Link
                    to="/platform-overview"
                    className={`block px-4 py-2.5 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium ${isActive("/platform-overview") ? "text-blue-600 bg-blue-50" : "text-slate-600"}`}
                  >
                    Platform Overview
                  </Link>
                </div>
              </div>
            </div>

            {/* Partners Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown("partners")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 font-medium text-[15px] text-white hover:text-blue-300 transition-colors">
                Partners <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${openDropdown === "partners" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                <div className="bg-white text-slate-800 rounded-xl shadow-xl border border-gray-100 min-w-[220px] p-2">
                  <Link
                    to="/partner-network"
                    className={`block px-4 py-2.5 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium ${isActive("/partner-network") ? "text-blue-600 bg-blue-50" : "text-slate-600"}`}
                  >
                    Partner Network
                  </Link>
                </div>
              </div>
            </div>

            {/* Autonomous AI Agents */}
            <a
              href="https://talanton.ai/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-medium text-[15px] text-white hover:text-blue-300 transition-colors"
            >
              Autonomous AI Agents <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 font-medium text-[15px] text-white hover:text-blue-300 transition-colors">
                Services <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${openDropdown === "services" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                <div className="bg-white text-slate-800 rounded-xl shadow-xl border border-gray-100 min-w-[260px] p-2">
                  {[
                    { path: "/business-consultant-services", label: "Business Consulting" },
                    { path: "/recruitment-process-outsourcing", label: "RPO Services" },
                    { path: "/managed-service-provider", label: "Managed Service Provider" },
                    { path: "/raas", label: "RAAS" },
                    { path: "/saas", label: "SAAS" },
                  ].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2.5 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium ${isActive(item.path) ? "text-blue-600 bg-blue-50" : "text-slate-600"}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown("solutions")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 font-medium text-[15px] text-white hover:text-blue-300 transition-colors">
                Solutions <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${openDropdown === "solutions" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                <div className="bg-white text-slate-800 rounded-xl shadow-xl border border-gray-100 min-w-[220px] p-2">
                  <Link
                    to="/direct-sourcing"
                    className={`block px-4 py-2.5 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium ${isActive("/direct-sourcing") ? "text-blue-600 bg-blue-50" : "text-slate-600"}`}
                  >
                    Direct Sourcing
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* --- DESKTOP ACTION BUTTONS --- */}
          <div className="hidden lg:flex items-center gap-3">
             {/* Only show Sign Up buttons if scrolled or not on home to reduce clutter on hero? 
                 Actually, let's keep them but style them subtly */}
                  <a
              href="https://hirextra.com/"
              target="_blank"
              rel="noreferrer"
              className={`text-sm font-medium px-4 py-2.5 rounded-lg transition-all ${
                "text-white hover:bg-white/10 border border-white/30" 
              }`}
            >
              Signup for Agency Recruiter
            </a>
            <a
              href="https://hirextra.com/"
              target="_blank"
              rel="noreferrer"
              className={`text-sm font-medium px-4 py-2.5 rounded-lg transition-all ${
                 "text-white hover:bg-white/10 border border-white/30" 
              }`}
            >
              Signup for Employer
            </a>
            
            <Link
              to="/book-a-demo"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 text-sm font-semibold hover:-translate-y-0.5 active:translate-y-0"
            >
              Book a Demo
            </Link>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button
            className="lg:hidden p-2 rounded-md transition-colors hover:bg-white/10 text-white"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <div 
        className={`fixed inset-0 z-[60] bg-white transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
             <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img src={logo} alt="Logo" className="h-10" />
             </Link>
             <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
             >
                <X className="w-6 h-6 text-slate-500" />
             </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-6">
            
            {/* Mobile Nav Groups */}
            <div className="space-y-4">
              {/* Platform Group */}
              <div className="border-b border-gray-100 pb-4">
                <button 
                  onClick={() => toggleDropdown("platform")}
                  className="flex items-center justify-between w-full text-lg font-semibold text-slate-800 mb-2"
                >
                  Platform
                  <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'platform' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === "platform" && (
                  <div className="pl-4 space-y-3 mt-2">
                    <Link to="/platform-overview" className="block text-slate-600 py-1">Platform Overview</Link>
                  </div>
                )}
              </div>

              {/* Partners Group */}
              <div className="border-b border-gray-100 pb-4">
                <button 
                  onClick={() => toggleDropdown("partners")}
                  className="flex items-center justify-between w-full text-lg font-semibold text-slate-800 mb-2"
                >
                  Partners
                  <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'partners' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === "partners" && (
                   <div className="pl-4 space-y-3 mt-2">
                    <Link to="/partner-network" className="block text-slate-600 py-1">Partner Network</Link>
                  </div>
                )}
              </div>

               {/* Services Group */}
               <div className="border-b border-gray-100 pb-4">
                <button 
                  onClick={() => toggleDropdown("services")}
                  className="flex items-center justify-between w-full text-lg font-semibold text-slate-800 mb-2"
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === "services" && (
                   <div className="pl-4 space-y-3 mt-2">
                    <Link to="/business-consultant-services" className="block text-slate-600 py-1">Business Consulting</Link>
                    <Link to="/recruitment-process-outsourcing" className="block text-slate-600 py-1">RPO</Link>
                    <Link to="/managed-service-provider" className="block text-slate-600 py-1">Managed Service Provider</Link>
                    <Link to="/raas" className="block text-slate-600 py-1">RAAS</Link>
                    <Link to="/saas" className="block text-slate-600 py-1">SAAS</Link>
                  </div>
                )}
              </div>

              {/* Static Links */}
              <a href="https://talanton.ai/" className="block text-lg font-semibold text-slate-800 border-b border-gray-100 pb-4">
                Autonomous AI Agents
              </a>
              
              <div className="border-b border-gray-100 pb-4">
                 <Link to="/direct-sourcing" className="block text-lg font-semibold text-slate-800">
                    Solutions
                 </Link>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 space-y-3">
              <Link 
                to="/book-a-demo"
                className="block w-full text-center bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20"
              >
                Book a Demo
              </Link>
              <div className="grid grid-cols-2 gap-3">
                 <a href="https://hirextra.com/" className="block text-center py-3 border border-gray-200 rounded-xl font-medium text-slate-700">Employer SignUp</a>
                 <a href="https://hirextra.com/" className="block text-center py-3 border border-gray-200 rounded-xl font-medium text-slate-700">Agency SignUp</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}