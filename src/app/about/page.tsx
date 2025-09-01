import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div>
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" passHref>
              <Button variant="ghost" className="p-0 h-auto hover:bg-transparent cursor-pointer">
                <h1 className="text-2xl font-bold text-[#A60000] font-montserrat">
                  UCM CribConnect
                </h1>
              </Button>
            </Link>
            <div className="hidden md:flex items-center space-x-6 ml-4">
              <Link href="/listings" className="text-base font-medium text-gray-700 hover:text-[#A60000]">Listings</Link>
              <Link href="/roommates" className="text-base font-medium text-gray-700 hover:text-[#A60000]">Roommates</Link>
              <Link href="/about" className="text-base font-medium text-gray-700 hover:text-[#A60000]">About</Link>
            </div>
          </div>
        </nav>
      </header>
        <div className="max-w-2xl p-8 bg-white rounded-lg shadow-md mt-40 ml-110">
          <h1 className="text-3xl font-bold text-[#A60000] font-montserrat mb-4">About UCM CribConnect</h1>
          <p className="text-gray-700 mb-4">
            UCM CribConnect is a platform designed to help students find housing and roommates with ease. Our mission is to make your search for a home at UCM simple, safe, and effective.
          </p>
          <p className="text-gray-700 mb-4">
            Browse listings, connect with potential roommates, and manage your profile all in one place. Whether you’re looking for a room or a roommate, CribConnect is here to help you every step of the way.
          </p>
          <p className="text-gray-700">
            Have questions? Contact us at <a href="mailto:support@cribconnect.com" className="text-[#A60000] underline">support@cribconnect.com</a>.
          </p>
        </div>
    </div>
  );
}
