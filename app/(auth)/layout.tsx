import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto">{children}</div>;
}

export default AuthLayout;
