"use client";

import React from "react";
import { ChannelType, MemberRole } from "@prisma/client";
import { ServerWithMembersWithProfiles } from "@/types";

interface ServerSectionProps {
  label: string;
  role?: MemberRole;
  sectionType: "channels" | "members";
  channelType: ChannelType;
  server?: ServerWithMembersWithProfiles;
}

export function ServerSection({
  channelType,
  label,
  sectionType,
  role,
  server
}: ServerSectionProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
        {label}
      </p>
    </div>
  );
}
