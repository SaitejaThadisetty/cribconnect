import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#A60000] font-montserrat">
            UCM CribConnect
          </h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Logout</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 mt-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Profile Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h2 className="text-2xl font-bold font-montserrat">John Doe</h2>
                <p className="text-gray-600">Computer Science, 2025</p>
                <Button variant="outline" className="mt-4 w-full">Edit Profile</Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Tabs for Listings, Favorites, Settings */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                {/* This would ideally be a tabbed interface */}
                <div className="space-y-8">
                  {/* My Listings */}
                  <section>
                    <h3 className="text-xl font-bold font-montserrat mb-4">My Listings</h3>
                    <div className="border rounded-lg p-4 text-center">
                      <p>You have no active listings.</p>
                      <Button className="mt-2 bg-[#A60000] text-white">Create a Listing</Button>
                    </div>
                  </section>

                  {/* Saved Listings */}
                  <section>
                    <h3 className="text-xl font-bold font-montserrat mb-4">Saved Listings</h3>
                    <div className="border rounded-lg p-4 text-center">
                      <p>You have no saved listings.</p>
                    </div>
                  </section>

                  {/* Account Settings */}
                  <section>
                    <h3 className="text-xl font-bold font-montserrat mb-4">Account Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john.doe@ucmo.edu" />
                      </div>
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Button variant="outline" className="w-full mt-2">Change Password</Button>
                      </div>
                    </div>
                  </section>
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
