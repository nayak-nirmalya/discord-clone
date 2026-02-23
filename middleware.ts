import { authMiddleware } from "@clerk/nextjs";

// Explicitly set the runtime to Node.js to avoid Edge Runtime compatibility issues
export const runtime = 'nodejs';

export default authMiddleware({
  publicRoutes: ["/api/uploadthing"],
  // Add this option to use Node.js runtime
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
};