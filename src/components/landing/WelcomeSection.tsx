import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold font-headline text-primary">
            Welcome to Stat Home and Garden
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            At Stat Home and Garden, we believe in nurturing nature with care and precision. 
            Our commitment to ecological values means we use quiet, electric tools to minimize 
            our environmental footprint and ensure a peaceful experience for you and your neighborhood.
            Let us transform your outdoor space into a verdant vista you'll love.
          </p>
          <div className="pt-4">
            <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="#services">Explore Our Services</a>
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Beautiful garden"
            width={600}
            height={400}
            className="rounded-lg shadow-xl object-cover aspect-video"
            data-ai-hint="lush garden"
          />
        </div>
      </div>
    </section>
  );
}
