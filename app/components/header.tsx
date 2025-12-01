"use client";

import {
  OrganizationSwitcher,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="bg-[#0f0f11] text-white shadow-md border-b border-white/10">
      <nav className="flex justify-between items-center px-6 h-18">
        <p className="text-lg font-semibold tracking-wide">
          Multi-Tenant Blog App
        </p>

        <div className="flex items-center gap-6">
          {/* ----- IF LOGGED OUT ----- */}
          <SignedOut>
            <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
              <button className="border border-white/20 text-white rounded-full px-4 py-2 hover:border-white/40 transition">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton mode="modal" fallbackRedirectUrl="/dashboard">
              <button className="bg-[#6c47ff] hover:bg-[#7b59ff] transition text-white rounded-full px-4 py-2">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          {/* ----- IF LOGGED IN ----- */}
          <SignedIn>
            <div className="flex items-center gap-4">
              <p className="text-sm opacity-70">Organizations</p>
              <OrganizationSwitcher
                appearance={{
                  elements: {
                    rootBox: "text-black",
                    trigger: "bg-white text-black px-2 py-1 rounded-md",
                  },
                }}
              />
              <UserButton
                appearance={{
                  elements: { userButtonAvatarBox: "ring-2 ring-purple-500" },
                }}
              />
            </div>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
