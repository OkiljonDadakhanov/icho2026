import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactUsPage() {
  // Basic form handler (no actual submission)
  async function handleSubmit(formData: FormData) {
    "use server"
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")
    console.log("Form submitted:", { name, email, message })
    // Here you would typically send an email or save to a database
    return { success: true, message: "Your message has been sent!" }
  }

  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form action={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700">
                  Full Name
                </Label>
                <Input type="text" id="name" name="name" required className="mt-1" placeholder="Your Name" />
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
                <Label htmlFor="subject" className="text-gray-700">
                  Subject
                </Label>
                <Input type="text" id="subject" name="subject" className="mt-1" placeholder="Inquiry about..." />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1"
                  placeholder="Your message..."
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                Send Message
              </Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Organizing Committee</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Address:</h3>
                  <p>IChO 2026 Organizing Committee</p>
                  <p>Tashkent State Technical University (or relevant institution)</p>
                  <p>123 University Avenue, Tashkent, Uzbekistan</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email:</h3>
                  <p>info@icho2026.uz</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone:</h3>
                  <p>+998 71 XXX XX XX (Local)</p>
                  <p>+998 71 YYY YY YY (International)</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Office Hours</h3>
              <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM (Tashkent Time, UZT)</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
