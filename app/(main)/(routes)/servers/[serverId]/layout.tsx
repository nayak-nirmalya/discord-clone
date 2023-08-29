import React from "react";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export default async function ServerIdLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) {
  const profile = await currentProfile();

  if (!profile) return redirectToSignIn();

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  });

  if (!server) return redirect("/");

  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        Server Sidebar
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
}
