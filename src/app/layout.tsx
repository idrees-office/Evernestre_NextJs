import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Real Estate | Find Your Dream Property",
  description: "Discover luxury properties and off-plan investments in prime locations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`antialiased`}>
        <header className="w-full bg-white text-gray-800 border-b border-gray-200 sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <nav className="py-3 md:py-4">
              <div className="flex items-center justify-between">
                <div className="flex-shrink-0">
                  <a href="#" className="flex items-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-md flex items-center justify-center mr-2">
                      <img src="/assets/newlogo.png" alt="Premium Realty Logo" className="object-contain h-6 md:h-8 w-auto"/>
                    </div>
                  </a>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-1 justify-center">
                  <div className="flex space-x-4 lg:space-x-8 xl:space-x-12 items-center">
                    <a href="#" className="px-2 py-2 text-sm lg:text-base rounded-md hover:bg-blue-50 transition-colors">Home</a>
                    <a href="#" className="px-2 py-2 text-sm lg:text-base text-gray-600 rounded-md transition-colors">Off-Plan</a>
                    <a href="#" className="px-2 py-2 text-sm lg:text-base text-gray-600 rounded-md transition-colors">Areas</a>
                    <a href="#" className="px-2 py-2 text-sm lg:text-base text-gray-600 rounded-md transition-colors">Developers</a>
                    <a href="#" className="px-2 py-2 text-sm lg:text-base text-gray-600 rounded-md transition-colors">Services</a>
                    <a href="#" className="px-2 py-2 text-sm lg:text-base text-gray-600 rounded-md transition-colors">About us</a>
                    <a href="#" className="px-2 py-2 text-sm lg:text-base text-gray-600 rounded-md transition-colors">Roadshows</a>
                    <a href="#" className="px-2 py-2 text-sm lg:text-base text-gray-600 rounded-md transition-colors">Data</a>
                  </div>
                </div>
                {/* Empty space to balance the logo */}
                {/* <div className="w-8 md:w-10 lg:w-32 hidden md:block"></div> */}
              </div>
              {/* Mobile Navigation Menu (hidden by default) */}
              <div className="hidden md:hidden mt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-base font-medium bg-blue-50 rounded-md">Home</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md">Off-Plan</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md">Areas</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md">Developers</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md">Services</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md">About us</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md">Roadshows</a>
              </div>
            </nav>
          </div>
        </header>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="w-full bg-gray-900 text-white py-8 md:py-10 mt-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Press</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Blog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Buy Property</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Sell Property</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Property Management</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Investment Advisory</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Market Reports</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Area Guides</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">FAQs</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Contact Support</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Facebook</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Instagram</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">Twitter</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            
            {/* Newsletter Subscription */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h4>
                  <p className="text-gray-400 text-sm">Get the latest property updates and investment opportunities</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
              <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Premium Real Estate. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}