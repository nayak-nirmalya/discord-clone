"use client";

import React from "react";
import { MemberRole } from "@prisma/client";

import { ServerWithMembersWithProfiles } from "@/types";

interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles;
  role?: MemberRole;
}

export function ServerHeader({ server, role }: ServerHeaderProps) {
  return <div>ServerHeader</div>;
}
