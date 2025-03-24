import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-yellow-400 py-6">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-xl text-gray-800 mb-2">DIYO</h3>
            <p className="text-gray-800">&copy; 2024 DIYO. All rights reserved.</p>
          </div>

          {/* Navigation */}
          <div className="mb-4 md:mb-0">
            <Link to="/about_us" className="text-gray-800 hover:text-white transition-colors font-medium">
              About Us
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-800 hover:text-white transition-colors">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-800 hover:text-white transition-colors">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-800 hover:text-white transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

