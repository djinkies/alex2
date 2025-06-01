import Image from "next/image";

export default function Header() {
  return (
    <header className="py-6 bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Verdant Vista Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <h1 className="text-3xl font-bold font-headline text-primary">Verdant Vista</h1>
        </div>
        {/* Future navigation links can go here */}
        {/* <nav className="space-x-4">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#team" className="text-foreground hover:text-primary transition-colors">Team</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav> */}
      </div>
    </header>
  );
}
