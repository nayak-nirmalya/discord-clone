import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <h1 className="font-extrabold text-9xl text-center">
        Hello World! (Protected!)
      </h1>
    </div>
  );
}
