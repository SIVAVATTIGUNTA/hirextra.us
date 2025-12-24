import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const openMenu = (name: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setOpenDropdown(name);
  };

  const closeMenu = () => {
    hoverTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const isActive = (path: string) => location.pathname === path;

  // Helper for Dropdown Link
  const DropdownLink = ({ to, label }: { to: string; label: string }) => (
    <Link
      to={to}
      className={`block rounded-md px-4 py-2 text-[14px] font-medium transition-colors duration-200 ${
        isActive(to)
          ? "bg-blue-50 text-blue-600"
          : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        h-[72px]
        bg-[#0B0F19]/95
        border-b border-white/10
        shadow-md
        backdrop-blur-md
        supports-[backdrop-filter]:bg-[#0B0F19]/90
      "
      style={{ WebkitBackdropFilter: "blur(12px)" }}
    >
      <div className="container mx-auto h-full px-4 lg:px-6">
        <div className="flex h-full items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Hirextra"
              className="h-9 w-auto object-contain hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium leading-none">
            
            {/* Platform */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => openMenu("platform")}
              onMouseLeave={closeMenu}
            >
              <button
                className={`flex items-center gap-1 transition-colors outline-none ${
                  openDropdown === "platform" ? "text-blue-400" : "text-white hover:text-blue-300"
                }`}
              >
                Platform
                <ChevronDown
                  className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                    openDropdown === "platform" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Container */}
              {openDropdown === "platform" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[220px]">
                  <div className="rounded-lg bg-white shadow-xl border border-slate-100 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <DropdownLink to="/platform-overview" label="Platform Overview" />
                  </div>
                </div>
              )}
            </div>

            {/* Partners */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => openMenu("partners")}
              onMouseLeave={closeMenu}
            >
              <button
                className={`flex items-center gap-1 transition-colors outline-none ${
                  openDropdown === "partners" ? "text-blue-400" : "text-white hover:text-blue-300"
                }`}
              >
                Partners
                <ChevronDown
                  className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                    openDropdown === "partners" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "partners" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[220px]">
                  <div className="rounded-lg bg-white shadow-xl border border-slate-100 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <DropdownLink to="/partner-network" label="Partner Network" />
                  </div>
                </div>
              )}
            </div>

            {/* External Link */}
            <a
              href="https://talanton.ai/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-white hover:text-blue-300 transition-colors"
            >
              Autonomous AI Agents
              <ExternalLink className="w-3 h-3 shrink-0 opacity-70" />
            </a>

            {/* Services */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => openMenu("services")}
              onMouseLeave={closeMenu}
            >
              <button
                className={`flex items-center gap-1 transition-colors outline-none ${
                  openDropdown === "services" ? "text-blue-400" : "text-white hover:text-blue-300"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                    openDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "services" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[260px]">
                  <div className="rounded-lg bg-white shadow-xl border border-slate-100 p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {[
                      ["/business-consultant-services", "Business Consulting"],
                      ["/recruitment-process-outsourcing", "RPO Services"],
                      ["/managed-service-provider", "Managed Service Provider"],
                      ["/raas", "RAAS"],
                      ["/saas", "SAAS"],
                    ].map(([path, label]) => (
                      <DropdownLink key={path} to={path} label={label} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions */}
            <Link
              to="/direct-sourcing"
              className={`transition-colors ${
                isActive("/direct-sourcing") ? "text-blue-400" : "text-white hover:text-blue-300"
              }`}
            >
              Solutions
            </Link>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://hirextra.com/"
              target="_blank"
              rel="noreferrer"
              className="h-9 px-4 flex items-center justify-center rounded-md border border-white/20 text-[13px] font-medium text-white hover:bg-white/10 transition-colors"
            >
              Agency Recruiter Signup
            </a>
            <a
              href="https://hirextra.com/"
              target="_blank"
              rel="noreferrer"
              className="h-9 px-4 flex items-center justify-center rounded-md border border-white/20 text-[13px] font-medium text-white hover:bg-white/10 transition-colors"
            >
              Employer Signup
            </a>
            <Link
              to="/book-a-demo"
              className="h-9 px-5 flex items-center justify-center rounded-md bg-blue-600 text-[13px] font-semibold text-white hover:bg-blue-700 shadow-sm transition-colors"
            >
              Book a Demo
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] bg-white transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 -mr-2 text-slate-500 hover:text-slate-800"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-4 overflow-y-auto max-h-[calc(100vh-80px)]">
          <Link to="/platform-overview" className="block text-lg font-medium text-slate-800">
            Platform
          </Link>
          <Link to="/partner-network" className="block text-lg font-medium text-slate-800">
            Partners
          </Link>

          <div className="py-2 border-y border-slate-100 my-2">
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Services
            </span>
            <div className="space-y-3 pl-2">
              <Link to="/business-consultant-services" className="block text-base text-slate-600">
                Business Consulting
              </Link>
              <Link to="/recruitment-process-outsourcing" className="block text-base text-slate-600">
                RPO Services
              </Link>
              <Link to="/managed-service-provider" className="block text-base text-slate-600">
                Managed Service Provider
              </Link>
              <Link to="/raas" className="block text-base text-slate-600">
                RAAS
              </Link>
              <Link to="/saas" className="block text-base text-slate-600">
                SAAS
              </Link>
            </div>
          </div>

          <Link to="/direct-sourcing" className="block text-lg font-medium text-slate-800">
            Solutions
          </Link>
          <a
            href="https://talanton.ai/"
            className="block text-lg font-medium text-slate-800 flex items-center gap-2"
          >
            Autonomous AI Agents <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>

          <div className="pt-6 space-y-3">
            <Link
              to="/book-a-demo"
              className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md active:scale-[0.98] transition-transform"
            >
              Book a Demo
            </Link>
            <a
              href="https://hirextra.com/"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center border border-slate-200 text-slate-700 py-3 rounded-lg font-medium"
            >
              Log In / Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}