import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#A60000] font-montserrat">
            UCM CribConnect
          </h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Login</Button>
            <Button className="bg-[#A60000] text-white">Sign Up</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 mt-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-gray-200 h-96 rounded-lg mb-8"></div>

            {/* Description */}
            <h2 className="text-3xl font-bold font-montserrat mb-4">Private Room in a Cozy House</h2>
            <p className="text-lg text-gray-700 mb-6">123 Main St, Warrensburg, MO</p>
            <p className="text-gray-600 mb-8">
              This is a beautiful and spacious private room in a shared house, perfect for a UCM student.
              The house is fully furnished and includes all utilities. It's located just a 5-minute walk from campus.
            </p>

            {/* Amenities */}
            <h3 className="text-2xl font-bold font-montserrat mb-4">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <span>Parking</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>In-unit Laundry</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Furnished</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Pets Allowed</span>
              </div>
            </div>
          </div>

          {/* Sticky Info Column */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold mb-4">$650/month</h3>
                <Button className="w-full bg-[#A60000] text-white mb-4">Message Lister</Button>
                <Button variant="outline" className="w-full">Save to Favorites</Button>
                <hr className="my-6" />
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-bold">John Doe</p>
                    <p className="text-sm text-gray-500">Joined in 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 UCM CribConnect. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
