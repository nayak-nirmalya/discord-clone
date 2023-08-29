import React from "react";

export default async function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0"></div>
      <main className="md:pl-[72px] h-full">{children}</main>
    </div>
  );
}
