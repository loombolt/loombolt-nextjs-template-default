/*
  This is an example page that you must replace as this is just a template.
  You must replace the entire content of this file to build your own page.
  To learn how to use the database, check the functions in `db/loomboltdb-function-tutorial.ts`.
*/
import Image from "next/image";
import { LibraryShowcase } from "@/components/feature/showcase";
import Link from "next/link";
import { Sparkle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-8 md:py-6 flex flex-col items-center">
        <div className="max-w-2xl text-center mb-12 space-y-4">
        <div className="container flex items-center justify-center">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={80}
            height={16}
            priority
          />
        </div>
          <h1 className="text-3xl font-bold tracking-tight mb-4">Loombolt Template</h1>
          <p className="text-muted-foreground">
            Get Started by Chatting with AI to build your app.
          </p>
        
        </div>
        
        <div className="w-full">
          <LibraryShowcase />
        </div>
      </main>
      
      <footer className="w-full pb-6 ">
        
        <div className="container mx-auto flex flex-col items-center justify-center space-x-4 py-2 text-sm text-muted-foreground">
            <p className="text-xs text-muted-foreground mb-3">
            Powered by Next.js, Shadcn UI, Motion, Zustand, and Loombolt DB.
          </p>
          <Link href="https://loombolt.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
           <Sparkle className="h-4 w-4"/>
            <span>Built with</span>
            <span className="font-medium">Loombolt</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}