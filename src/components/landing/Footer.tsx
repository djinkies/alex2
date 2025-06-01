import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <Image
            src="/logo.png"
            alt="Verdant Vista Logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <p className="text-lg font-semibold">Verdant Vista by Stat Home and Garden</p>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Stat Home and Garden. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Quiet Electric Tools for a Greener Tomorrow.
        </p>
        {/* Optional: Add social media links or other footer links here */}
        {/* <div className="mt-4 space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div> */}
      </div>
    </footer>
  );
}
