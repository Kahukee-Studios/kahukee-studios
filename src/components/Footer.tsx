import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons-react";
import NewsLetterSection from "./NewsLetterSection";

export default function Footer() {
  return (
    <>
      <NewsLetterSection />
      <footer className="border-t bg-background py-6">
        <div className="container mx-auto flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0 px-6">
          <p className="text-sm text-muted-foreground text-center sm:text-left w-full sm:w-auto">
            © 2025 Kahukee Studios, Inc. All rights reserved.
          </p>

          <nav className="flex items-center justify-center space-x-6">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Facebook"
            >
              <IconBrandFacebook className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/kahukeestudiosofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <IconBrandInstagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://github.com/Kahukee-Studios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <IconBrandGithub className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.tiktok.com/@kahukeestudiosofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="TikTok"
            >
              <IconBrandTiktok className="h-6 w-6" />
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
