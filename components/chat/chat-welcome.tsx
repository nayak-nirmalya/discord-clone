"use client";

import React from "react";

interface ChatWelcomeProps {
  type: "channel" | "conversation";
  name: string;
}

export function ChatWelcome({ name, type }: ChatWelcomeProps) {
  return <div>ChatWelcome</div>;
}
