import React from "react";

import { initialProfile } from "@/lib/initial-profile";

export default async function SetupPage() {
  const profile = await initialProfile();

  return <div>SetupPage</div>;
}
