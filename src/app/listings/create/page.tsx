import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Assuming a Textarea component exists

export default function CreateListingPage() {
  // A real implementation would use state to manage the current step
  const currentStep = 1;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#A60000] font-montserrat">
            UCM CribConnect
          </h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline">My Dashboard</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 mt-8 flex-grow">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-montserrat">Create a New Listing</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {/* Step 1: Address */}
            <div style={{ display: currentStep === 1 ? 'block' : 'none' }}>
              <h3 className="text-xl font-bold mb-4">Step 1: Location</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="123 Main St" />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="Warrensburg" />
                </div>
                <div>
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input id="zip" placeholder="64093" />
                </div>
              </div>
            </div>

            {/* Placeholder for other steps */}

            <div className="flex justify-between mt-8">
              <Button variant="outline">Back</Button>
              <Button className="bg-[#A60000] text-white">Next</Button>
            </div>
          </CardContent>
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

// NOTE: The Textarea component is assumed to exist. If not, it would need to be created.
// Example Textarea component at `src/components/ui/textarea.tsx`:
/*
import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
*/
