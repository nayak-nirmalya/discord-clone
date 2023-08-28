import { UserButton } from "@clerk/nextjs";

import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
      <h1 className="font-extrabold text-9xl text-center">
        Hello World! (Protected!)
      </h1>
    </div>
  );
}
