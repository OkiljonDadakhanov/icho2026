import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegistrationPage() {
  async function handleRegistration(formData: FormData) {
    "use server"
    // Process registration data
    console.log("Registration interest:", Object.fromEntries(formData.entries()))
    return { success: true, message: "Thank you for your interest! We will keep you updated." }
  }

  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Register Your Interest for IChO 2026</h1>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-6">
            Official registration for IChO 2026 will open at a later date. Please use this form to express your interest
            and receive updates regarding the registration process, deadlines, and other important announcements.
          </p>
          <form action={handleRegistration} className="space-y-6">
            <div>
              <Label htmlFor="fullName" className="text-gray-700">
                Full Name
              </Label>
              <Input type="text" id="fullName" name="fullName" required className="mt-1" placeholder="Your Full Name" />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700">
                Email Address
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <Label htmlFor="country" className="text-gray-700">
                Country/Region
              </Label>
              <Input type="text" id="country" name="country" required className="mt-1" placeholder="Your Country" />
            </div>
            <div>
              <Label htmlFor="role" className="text-gray-700">
                I am a...
              </Label>
              <Select name="role" required>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Prospective Student Participant</SelectItem>
                  <SelectItem value="mentor">Mentor / Team Leader</SelectItem>
                  <SelectItem value="observer">Observer</SelectItem>
                  <SelectItem value="guest">Guest</SelectItem>
                  <SelectItem value="media">Media Representative</SelectItem>
                  <SelectItem value="sponsor">Potential Sponsor/Partner</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="institution" className="text-gray-700">
                Institution/Organization (Optional)
              </Label>
              <Input
                type="text"
                id="institution"
                name="institution"
                className="mt-1"
                placeholder="Your School or Organization"
              />
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3">
              Submit Interest
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
