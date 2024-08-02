import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Sign } from "crypto";
import React from "react";

const page = () => {
  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default page;
