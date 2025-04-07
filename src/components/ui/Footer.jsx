import { Input } from "./input";
import { Button } from "./button";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#191A23] text-white px-6 md:px-32 py-12 rounded-t-4xl mt-12">
      {/* Top Nav Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/image.png" alt="Positivus logo" className="h-6" />
          <span className="text-2xl font-semibold">Positivus</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm underline underline-offset-4">
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Use Cases</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn className="text-white hover:text-lime-400" />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF className="text-white hover:text-lime-400" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="text-white hover:text-lime-400" />
          </a>
        </div>
      </div>

      {/* Contact & Newsletter */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Column - Contact Info */}
        <div className="flex-1 space-y-4">
          <span className="inline-block bg-[#B9FF66] text-black px-3 py-1 text-sm font-semibold rounded-md">
            Contact us:
          </span>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>
            Address: 1234 Main St
            <br />
            Moonstone City, Stardust State 12345
          </p>
        </div>

        {/* Right Column - Email Signup */}
        <div className="flex-1">
          <div className="bg-[#292A32] p-6 rounded-xl flex flex-col sm:flex-row items-center gap-4">
            <Input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-white placeholder:text-white/50 text-white flex-1"
            />
            <Button className="bg-[#B9FF66] text-black px-6 py-2 rounded-lg hover:bg-lime-400">
              Subscribe to news
            </Button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-white/20 my-10" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="#" className="underline">
          Privacy Policy
        </a>
        <div className="flex gap-4">
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn className="text-white hover:text-lime-400" />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF className="text-white hover:text-lime-400" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="text-white hover:text-lime-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}
