import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function MessagesPage() {
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
        <Card className="h-[calc(100vh-200px)]">
          <div className="grid grid-cols-1 lg:grid-cols-4 h-full">
            {/* Conversations List */}
            <div className="lg:col-span-1 border-r">
              <div className="p-4 border-b">
                <h2 className="text-xl font-bold font-montserrat">Messages</h2>
              </div>
              <div className="divide-y">
                {/* Conversation Item */}
                <div className="p-4 hover:bg-gray-50 cursor-pointer">
                  <p className="font-bold">Jane Doe</p>
                  <p className="text-sm text-gray-500 truncate">Hey! Is the room still available?</p>
                </div>
                {/* Conversation Item */}
                <div className="p-4 hover:bg-gray-50 cursor-pointer bg-gray-100">
                  <p className="font-bold">John Smith</p>
                  <p className="text-sm text-gray-500 truncate">Yes, it is. When would you like to see it?</p>
                </div>
              </div>
            </div>

            {/* Chat Window */}
            <div className="lg:col-span-3 flex flex-col h-full">
              {/* Chat Header */}
              <div className="p-4 border-b flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <h3 className="text-lg font-bold">John Smith</h3>
              </div>

              {/* Messages */}
              <div className="flex-grow p-6 space-y-4 overflow-y-auto">
                {/* Received Message */}
                <div className="flex justify-start">
                  <div className="bg-gray-200 rounded-lg p-3 max-w-xs">
                    <p>Hey! I saw your listing for the room on Main St.</p>
                  </div>
                </div>
                {/* Sent Message */}
                <div className="flex justify-end">
                  <div className="bg-[#A60000] text-white rounded-lg p-3 max-w-xs">
                    <p>Hi there! Yes, it's still available. Are you interested?</p>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input placeholder="Type a message..." className="flex-grow" />
                  <Button className="bg-[#A60000] text-white">Send</Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 UCM CribConnect. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
