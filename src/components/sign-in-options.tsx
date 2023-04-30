"use client";

import { type FC } from "react";

import { Icons } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { signIn } from "~/auth/client";

const SignInButtons: FC = () => {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        className="gap-2"
        onClick={() => void signIn("github")}
      >
        <Icons.gitHub className="h-5 w-5 text-gray-500" />
        Authenticate
      </Button>
      <Button
        variant="outline"
        className="gap-2"
        onClick={() => void signIn("google")}
      >
        <Icons.google className="h-5 w-5 text-gray-500" />
        Authenticate
      </Button>
    </div>
  );
};

export default SignInButtons;
