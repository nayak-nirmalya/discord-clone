import { NextResponse } from "next/server";
import { MemberRole } from "@prisma/client";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function DELETE(
  req: Request,
  { params }: { params: { channelId: string } }
) {
  try {
    const profile = await currentProfile();
    if (!profile) return new NextResponse("Unauthorized", { status: 401 });

    const { searchParams } = new URL(req.url);
    const serverId = searchParams.get("serverId");
    if (!serverId)
      return new NextResponse("Server ID Missing", { status: 400 });
    if (!params.channelId)
      return new NextResponse("Channel ID Missing", { status: 400 });

    const server = await db.server.update({
      where: {
        id: serverId,
        members: {
          some: {
            profileId: profile.id,
            role: {
              in: [MemberRole.ADMIN, MemberRole.MODERATOR]
            }
          }
        }
      },
      data: {
        channels: {
          delete: {
            id: params.channelId,
            name: {
              not: "general"
            }
          }
        }
      }
    });

    return NextResponse.json(server);
  } catch (error) {
    console.error("[CHANNEL_ID_DELETE", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
