import React from "react";
import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NavigationAction } from "@/components/navigation/navigation-action";
import { Separator } from "@/components/ui/separator";

export async function NavigationSidebar() {
  const profile = await currentProfile();

  if (!profile) return redirect("/");

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  });

  return (
    <div className="space-y-4 flex flex-col h-full items-center text-primary w-full dark:bg-[#1e1f22] py-3">
      <NavigationAction />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
    </div>
  );
}
