
import Link from 'next/link';

import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2">
                            <div className=" relative h-[40px] w-[150px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Logo-TAA.png"
                  alt="Descriptive alt text"
                  fill
                  className="object-cover"
              />
              
              </div>
              <span className="font-bold text-xl"></span>
            </Link>
            <p className="mt-4 text-gray-400">
              Supporting and developing the automotive industry since 2016.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">ESG Guide</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Best Practices</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Certification</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              <p>Rue Hedi Nouira</p>
              <p>Les Berges du Lac</p>
              <p>1053 Tunis</p>
              <p className="mt-2">(+216) 71 753 545</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tunisian Automotive Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}