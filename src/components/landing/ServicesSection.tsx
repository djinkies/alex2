import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Leaf,
  Scissors,
  Shrub,
  Sprout,
  Tractor,
  Trees, // Changed from Seedling
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Define the Scythe SVG component
const ScytheIconSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19.5 2H18l-2.5 2.5L13 7l5.5 5.5L21 10V6.5A4.5 4.5 0 0 0 19.5 2z" />
    <path d="M4 22V9s1-2 2-2h3s2 1 2 2v3s-1 2-2 2H7s-2-1-2-2z" />
  </svg>
);

interface Service {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
}

const services: Service[] = [
  {
    id: "pruning",
    title: "Pruning",
    description: "Expert pruning to enhance plant health and beauty.",
    Icon: Scissors,
  },
  {
    id: "hedging",
    title: "Hedging",
    description: "Precise hedging for neat and tidy garden boundaries.",
    Icon: Shrub,
  },
  {
    id: "weeding",
    title: "Weeding",
    description: "Thorough weeding services to keep your garden pristine.",
    Icon: Sprout,
  },
  {
    id: "maintenance",
    title: "Garden Maintenance",
    description: "Comprehensive garden care to keep your space thriving.",
    Icon: Tractor,
  },
  {
    id: "planting",
    title: "Planting",
    description: "Thoughtful planting of flowers, shrubs, and trees.",
    Icon: Trees, // Changed from Seedling
  },
  {
    id: "grass-cutting",
    title: "Grass Cutting",
    description: "Reliable grass cutting for a perfectly manicured lawn.",
    Icon: ScytheIconSvg,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl sm:text-5xl font-bold font-headline text-primary">
            Our Services
          </h2>
          <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
            We offer a wide range of landscaping services to meet your needs, all performed with eco-friendly electric tools.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-xl transition-shadow duration-300 ease-in-out bg-card">
              <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                <service.Icon className="h-10 w-10 text-primary" />
                <CardTitle className="text-2xl font-headline text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
