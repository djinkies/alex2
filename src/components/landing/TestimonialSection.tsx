import { Quote } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <Quote className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-4xl sm:text-5xl font-bold font-headline text-primary">
          What Our Clients Say
        </h2>
        <p className="text-lg text-foreground/80 mt-8 max-w-xl mx-auto">
          We're proud of the relationships we build and the beautiful gardens we create.
          <br />
          <strong className="text-primary/80">Client testimonials coming soon!</strong>
        </p>
        {/* Placeholder for future testimonial cards */}
        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example Card:
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Jane Doe</CardTitle>
              <CardDescription>Happy Homeowner</CardDescription>
            </CardHeader>
            <CardContent>
              <p>"The team did an amazing job transforming our backyard. It's now our favorite place to relax!"</p>
            </CardContent>
          </Card>
          */}
        {/*</div> */}
      </div>
    </section>
  );
}
