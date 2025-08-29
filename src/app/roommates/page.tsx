"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function RoommatesPage() {
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

      <div className="container mx-auto px-4 mt-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Column */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-montserrat mb-4">Filters</h3>
                <div className="space-y-6">
                  <div>
                    <label className="font-semibold">Budget Range</label>
                    <Input type="range" min="300" max="1500" className="mt-2" />
                  </div>
                  <div>
                    <label className="font-semibold">Major</label>
                    <Input type="text" placeholder="e.g., Computer Science" className="mt-2" />
                  </div>
                  <div>
                    <label className="font-semibold">Graduation Year</label>
                    <Input type="number" placeholder="e.g., 2025" className="mt-2" />
                  </div>
                  <div>
                    <label className="font-semibold">Lifestyle Tags</label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="early-bird" />
                        <label htmlFor="early-bird">Early Bird</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="night-owl" />
                        <label htmlFor="night-owl">Night Owl</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="studious" />
                        <label htmlFor="studious">Studious</label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Roommate Profiles Column */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold font-montserrat mb-4">Find a Roommate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-4 text-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <h4 className="font-bold text-lg">Jane Doe</h4>
                    <p className="text-gray-600">Computer Science</p>
                    <p className="text-sm text-gray-500">Graduates 2025</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 UCM CribConnect. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
