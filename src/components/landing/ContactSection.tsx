import ContactForm from "./ContactForm";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl sm:text-5xl font-bold font-headline text-primary">
            Get in Touch
          </h2>
          <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question or want to schedule a service, feel free to reach out.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 p-8 bg-card rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold font-headline text-primary mb-6">Contact Information</h3>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-primary">Email Us</h4>
                <a href="mailto:info@stathomeandgarden.com" className="text-accent hover:underline">
                  info@stathomeandgarden.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-primary">Call Us</h4>
                <a href="tel:+1234567890" className="text-accent hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-primary">Visit Us (By Appointment)</h4>
                <p className="text-foreground/80">123 Garden Lane, Greenvalley, FL 12345</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground pt-4">
              We primarily serve the Greenvalley area and surroundings. Contact us to see if we cover your location.
            </p>
          </div>
          <div className="p-8 bg-card rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold font-headline text-primary mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
