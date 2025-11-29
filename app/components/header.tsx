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
    <div>
      <nav className="flex justify-between items-center p-4 gap-4 h-16 overflow-auto mt-3">
        <p className="flex ml-2 items-start">Blogging Application</p>
        <div className="p-2 flex gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="border border-gray-600 text-white cursor-pointer rounded-full px-4 py-3">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="bg-[#6c47ff] text-white cursor-pointer rounded-full px-4 py-2">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
        </div>

        <SignedIn>
          <OrganizationSwitcher />
          <UserButton />
        </SignedIn>
      </nav>
      <hr className="w-full my-5 h-px bg-gray-300 opacity-20 border-0" />
    </div>
  );
}
