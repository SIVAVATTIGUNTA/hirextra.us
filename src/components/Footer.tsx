import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className="bg-[#030C0E] text-white px-6 py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo Column */}
          <div>
            <img src={logo} alt="Hirextra Logo" className="h-16 md:h-20 mb-4" />
          </div>

          {/* Quick Links and Privacy Policy - Two Columns */}
          <div className="md:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h6 className="font-heading mb-4 text-lg">Quick Links</h6>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>
                    <Link to="/#who-we-are" className="hover:text-brand transition-colors">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to="/direct-sourcing" className="hover:text-brand transition-colors">
                      Solution
                    </Link>
                  </li>
                  <li>
                    <Link to="/platform-overview" className="hover:text-brand transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/business-consultant-services" className="hover:text-brand transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="https://hirextra.com/#blog" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-brand transition-colors"
                    >
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>

              {/* Privacy Policy */}
              <div>
                <h6 className="font-heading mb-4 text-lg">Privacy Policy</h6>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>
                    <a 
                      href="https://hirextra.com/terms_us" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-brand transition-colors"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://hirextra.com/privacy_us" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-brand transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://hirextra.com/gdpr_us" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-brand transition-colors"
                    >
                      GDPR
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://hirextra.com/cookies_us" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-brand transition-colors"
                    >
                      Cookie Preferences
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <h6 className="font-heading mb-4 text-lg">Get in touch</h6>
            {/* Social Media Icons */}
            <ul className="flex space-x-4 mb-6">
              <li>
                <a 
                  href="https://www.facebook.com/HireXtraLimited/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg width="32" height="32" viewBox="0 0 128 128" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M64 4C97.1371 4 124 30.8629 124 64C124 94.0568 101.899 118.952 73.0618 123.32V83.2163H88.3345L91.1855 64.6194H73.0618V52.491C73.0618 47.2354 75.5055 42.384 83.6509 42.384H92V26.415C92 26.415 84.4655 25 77.3382 25C62.4727 25 52.6982 34.0963 52.6982 50.2675V64.6194H36V83.2163H52.6982V122.937C24.9642 117.651 4 93.2737 4 64C4 30.8629 30.8629 4 64 4ZM63.1728 127.995C28.2078 127.552 0 99.0701 0 64C0 28.6538 28.6538 0 64 0C99.3462 0 128 28.6538 128 64C128 98.9234 100.028 127.314 65.2655 127.988C64.8447 127.996 64.4228 128 64 128C63.7239 128 63.4481 127.998 63.1728 127.995Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/hirextralimited?lang=en" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Twitter/X"
                >
                  <svg width="32" height="32" viewBox="0 0 264 264" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M132 0C59.0984 0 0 59.0984 0 132C0 204.902 59.0984 264 132 264C204.902 264 264 204.902 264 132C264 59.0984 204.902 0 132 0ZM8 132C8 63.5167 63.5167 8 132 8C200.483 8 256 63.5167 256 132C256 200.483 200.483 256 132 256C63.5167 256 8 200.483 8 132ZM201.188 61H177.038L137.243 106.501L102.836 61.0066H53L112.548 138.856L56.1106 203.37H80.2738L123.836 153.597L161.898 203.37H210.5L148.425 121.313L201.188 61ZM181.947 188.918H168.566L81.2056 74.6969H95.5644L181.947 188.918Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/hirextra" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg width="32" height="32" viewBox="0 0 128 128" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M64 4C97.1371 4 124 30.8629 124 64C124 97.1371 97.1371 124 64 124C30.8629 124 4 97.1371 4 64C4 30.8629 30.8629 4 64 4ZM128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64ZM42.9643 51.1633V102H27.1875V51.1633H42.9643ZM44.1518 35.0112C44.1518 40.1119 40.0804 44.3624 34.9911 44.3624C30.0714 44.3624 26 40.1119 26 35.0112C26 30.0805 30.0714 26 34.9911 26C40.0804 26 44.1518 30.0805 44.1518 35.0112ZM102 102H101.83H86.2232V77.3468C86.2232 71.396 86.0536 63.915 77.9107 63.915C69.7679 63.915 68.5804 70.2058 68.5804 76.8367V102H52.8036V51.1633H67.9018V58.1342H68.0714C70.2768 54.2237 75.3661 49.9732 83 49.9732C98.9464 49.9732 102 60.5145 102 74.1163V102Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@hirextralimited8540" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:opacity-80 transition-opacity"
                  aria-label="YouTube"
                >
                  <svg width="32" height="32" viewBox="0 0 128 128" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M64 4C97.1371 4 124 30.8629 124 64C124 97.1371 97.1371 124 64 124C30.8629 124 4 97.1371 4 64C4 30.8629 30.8629 4 64 4ZM128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64ZM98.3474 34.9375C102.048 35.9062 105.104 38.974 106.069 42.849C108 49.6302 108 64.1615 108 64.1615C108 64.1615 108 78.5312 106.069 85.474C105.104 89.349 102.048 92.2552 98.3474 93.224C91.4296 95 64.0804 95 64.0804 95C64.0804 95 36.5704 95 29.6527 93.224C25.9525 92.2552 22.8958 89.349 21.9305 85.474C20 78.5312 20 64.1615 20 64.1615C20 64.1615 20 49.6302 21.9305 42.849C22.8958 38.974 25.9525 35.9062 29.6527 34.9375C36.5704 33 64.0804 33 64.0804 33C64.0804 33 91.4296 33 98.3474 34.9375ZM55.0713 51.0833V77.2396L77.9159 64.1615L55.0713 51.0833Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
            {/* Address */}
            <div className="text-sm opacity-80">
              <h6 className="font-heading mb-2">Address</h6>
              <p className="font-semibold mb-2">Hirextra Inc</p>
              <p className="leading-relaxed mb-4">
                3455 Peachtree Rd NE, Suite 500, Atlanta, GA 30326
              </p>
              <p className="leading-relaxed">
                <a href="tel:+14706253092" className="hover:text-brand transition-colors">
                  +1 (470) 625 3092
                </a>
                {", "}
                <a href="mailto:salesus@hirextra.com" className="hover:text-brand transition-colors">
                  salesus@hirextra.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Copyright */}
        <div>
          <p className="text-center text-sm opacity-60">
            Copyright © 2017 - 2024 HireXtra.com All rights reserved. <br />
            Developed & Managed by @ Asna Hirextra Private Limited - India
          </p>
        </div>
      </div>
    </footer>
  )
}
