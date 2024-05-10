import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <header className="">
      <nav className="max-w-6xl p-4 mx-auto flex justify-between items-center">
        <Link className="text-2xl font-bold" href={"/"}>
          FileRush 📂
        </Link>
        <div className="flex items-center space-x-3">
          <ThemeToggle />

          <UserButton afterSignOutUrl="/" />

          <SignedOut>
            <Button>
              <SignInButton mode="modal" forceRedirectUrl="/dashboard" />
            </Button>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}

export default Header;
