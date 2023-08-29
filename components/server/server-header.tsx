"use client";

import React from "react";
import { Server } from "@prisma/client";

interface ServerHeaderProps {
  server: Server;
}

export function ServerHeader() {
  return <div>ServerHeader</div>;
}
