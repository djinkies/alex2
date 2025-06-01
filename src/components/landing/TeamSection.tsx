import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { TeamMember } from "@/types";
import Image from "next/image";
import { Users } from "lucide-react";

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex GreenThumb",
    role: "Lead Horticulturist",
    imageUrl: "https://placehold.co/300x300.png",
    imageHint: "friendly gardener",
    bio: "With over 15 years of experience, Alex is passionate about creating sustainable and beautiful garden spaces.",
  },
  {
    id: "2",
    name: "Jamie LeafWell",
    role: "Ecological Maintenance Specialist",
    imageUrl: "https://placehold.co/300x300.png",
    imageHint: "person smiling",
    bio: "Jamie ensures all our projects adhere to the highest ecological standards, using only quiet electric tools.",
  },
  {
    id: "3",
    name: "Sam RootWise",
    role: "Customer Relations & Design",
    imageUrl: "https://placehold.co/300x300.png",
    imageHint: "professional portrait",
    bio: "Sam is dedicated to understanding your vision and bringing it to life with thoughtful design and clear communication.",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl sm:text-5xl font-bold font-headline text-primary">
            Meet the Stat Home and Garden Team
          </h2>
          <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
            Our dedicated professionals are passionate about plants and committed to providing exceptional service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="text-center hover:shadow-xl transition-shadow duration-300 ease-in-out bg-card">
              <CardHeader>
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 object-cover aspect-square border-4 border-primary/20"
                  data-ai-hint={member.imageHint}
                />
                <CardTitle className="text-2xl font-headline text-primary">{member.name}</CardTitle>
                <CardDescription className="text-accent font-semibold">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
