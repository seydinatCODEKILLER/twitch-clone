import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-3xl font-bold">Welcome to Clerk</h1>
      <UserButton afterSwitchSessionUrl="/" />
    </div>
  );
}
