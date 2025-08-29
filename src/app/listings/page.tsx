"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar } from "@/components/ui/avatar";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function ListingsPage() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" passHref>
            <Button variant="ghost" className="p-0 h-auto hover:bg-transparent cursor-pointer">
              <h1 className="text-2xl font-bold text-[#A60000] font-montserrat">
              UCM CribConnect
              </h1>
            </Button>
            </Link>
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="outline-none border-none bg-transparent p-0 flex items-center cursor-pointer">
                  <Avatar name={session.user?.name || session.user?.email || undefined} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/login" })}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </nav>
      </header>

      <div className="container mx-auto px-4 mt-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Filters Column */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-montserrat mb-4">Filters</h3>
                <div className="space-y-6">
                  <div>
                    <label className="font-semibold">Price Range</label>
                    <Slider defaultValue={[500]} max={2000} step={100} className="mt-2" />
                  </div>
                  <div>
                    <label className="font-semibold">Room Type</label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="private" />
                        <label htmlFor="private">Private Room</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="shared" />
                        <label htmlFor="shared">Shared Room</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold">Amenities</label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="parking" />
                        <label htmlFor="parking">Parking</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="laundry" />
                        <label htmlFor="laundry">In-unit Laundry</label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Listings Column */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold font-montserrat">Search Results</h2>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Sort By</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Newest</DropdownMenuItem>
                  <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                  <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                    <h4 className="font-bold text-lg">Private Room in 3-Bed House</h4>
                    <p className="text-gray-600">$650/month</p>
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
