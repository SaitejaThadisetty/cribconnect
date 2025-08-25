import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#A60000] font-montserrat">
            UCM CribConnect
          </h1>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#A60000]">Listings</a>
            <a href="#" className="text-gray-600 hover:text-[#A60000]">Roommates</a>
            <a href="#" className="text-gray-600 hover:text-[#A60000]">About</a>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Login</Button>
            <Button className="bg-[#A60000] text-white">Sign Up</Button>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <section
          className="bg-cover bg-center h-[60vh] flex items-center justify-center text-white"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
            <h2 className="text-5xl font-bold font-montserrat mb-4">Find Your Home at UCM</h2>
            <div className="mt-6 max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded-t-lg flex space-x-2">
                <Button className="bg-[#A60000] text-white flex-1">Find a Room</Button>
                <Button variant="outline" className="flex-1">Find a Roommate</Button>
              </div>
              <div className="bg-white p-4 rounded-b-lg">
                <Input
                  type="search"
                  placeholder="Search by address, neighborhood, or city"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold font-montserrat mb-8">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <h4 className="text-xl font-bold font-montserrat mb-2">1. Sign Up</h4>
                <p className="text-gray-600">Create an account to get started.</p>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold font-montserrat mb-2">2. Search & Filter</h4>
                <p className="text-gray-600">Find the perfect room or roommate.</p>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold font-montserrat mb-2">3. Connect</h4>
                <p className="text-gray-600">Message and connect securely.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold font-montserrat mb-8 text-center">Featured Listings</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                    <h4 className="font-bold text-lg">Modern Apartment</h4>
                    <p className="text-gray-600">$500/month</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#A60000] text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold font-montserrat">Ready to Find Your Place?</h3>
            <p className="mt-4 mb-8">Sign up now to post a listing or create your roommate profile.</p>
            <Button variant="secondary" size="lg">Get Started</Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 UCM CribConnect. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
