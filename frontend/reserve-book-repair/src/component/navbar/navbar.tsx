
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../app/image/MUT_LOGO_crop.png'
import { Bell , CircleUserRound} from 'lucide-react';


function Navbar() {
	return (
            <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Link href="/" className="text-2xl font-bold text-blue-600">
                    <Image src={logo} alt="MUTlogo" width={100} height={40}/>
                  </Link>
                </div>
      
                {/* Navigation Links Main */}
                <div className="hidden md:flex space-x-4">
                  <Link href="/" className="text-gray-700 hover:text-blue-500">
                    Home
                  </Link>
                  <Link href ="/Booking" className="text-gray-700 hover:text-blue-500">
                    Booking
                  </Link>
                  <Link href="/History" className="text-gray-700 hover:text-blue-500">
                    History
                  </Link>
                  <Link href="/Management" className="text-gray-700 hover:text-blue-500">
                    Management
                  </Link>
                  <Link href="/Master" className="text-gray-700 hover:text-blue-500">
                    Master
                  </Link>
                  <Link href="/Report" className="text-gray-700 hover:text-blue-500">
                    Report
                  </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-4">
                  <Link href="/Notification" className="text-gray-700 hover:text-blue-500">
                    <Bell className="w-6 h-6 text-blue-500" />
                  </Link>
                  <Link href="/User" className="text-gray-700 hover:text-blue-500">
                    <CircleUserRound className="w-6 h-6 text-blue-500" />
                  </Link>
                </div>
            </div>
            </div>
            </nav>
	);
}

export default Navbar;
