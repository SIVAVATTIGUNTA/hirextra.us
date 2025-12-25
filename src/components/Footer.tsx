import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030C0E] text-white px-6 py-14">
      <div className="container mx-auto">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-4 mb-10">

          {/* Logo + Description */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Hirextra Logo"
              className="h-16 md:h-18"
            />
            <p className="text-sm leading-relaxed opacity-80 max-w-xs">
              HireXtra is a next-generation talent acquisition platform helping
              enterprises, recruiters, and partners hire faster using AI-powered
              workforce solutions.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* Quick Links */}
            <div>
              <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/#who-we-are" className="hover:text-brand">About Us</Link></li>
                <li><Link to="/direct-sourcing" className="hover:text-brand">Solutions</Link></li>
                <li><Link to="/platform-overview" className="hover:text-brand">Features</Link></li>
                <li><Link to="/business-consultant-services" className="hover:text-brand">Services</Link></li>
                <li>
                  <a
                    href="https://hirextra.com/#blog"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h6 className="text-lg font-semibold mb-4">Legal</h6>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="https://hirextra.com/terms_us" target="_blank" rel="noreferrer" className="hover:text-brand">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="https://hirextra.com/privacy_us" target="_blank" rel="noreferrer" className="hover:text-brand">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://hirextra.com/gdpr_us" target="_blank" rel="noreferrer" className="hover:text-brand">
                    GDPR
                  </a>
                </li>
                <li>
                  <a href="https://hirextra.com/cookies_us" target="_blank" rel="noreferrer" className="hover:text-brand">
                    Cookie Preferences
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Get in Touch</h6>

            {/* Social Icons */}
            <ul className="flex items-center gap-4 mb-6">
              {[
                ["https://www.facebook.com/HireXtraLimited/", "Facebook"],
                ["https://x.com/hirextralimited?lang=en", "X"],
                ["https://www.linkedin.com/company/hirextra", "LinkedIn"],
                ["https://www.youtube.com/@hirextralimited8540", "YouTube"],
              ].map(([url, label]) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <span className="inline-block w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      {label[0]}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Address */}
            <div className="text-sm opacity-80 space-y-2">
              <p className="font-semibold">HireXtra Inc</p>
              <p>
                3455 Peachtree Rd NE, Suite 500,<br />
                Atlanta, GA 30326
              </p>
              <p>
                <a href="tel:+14706253092" className="hover:text-brand">
                  +1 (470) 625 3092
                </a>
                <br />
                <a href="mailto:salesus@hirextra.us" className="hover:text-brand">
                  salesus@hirextra.us
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10 mb-6" />

        {/* Bottom */}
        <p className="text-center text-sm opacity-60 leading-relaxed">
          © 2017 – {currentYear} HireXtra.us. All rights reserved. <br />
          Developed & Managed by Asna Hirextra Private Limited – India
        </p>
      </div>
    </footer>
  );
}
