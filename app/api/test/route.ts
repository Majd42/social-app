import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const reqBlob = await request.blob();
  const blob = await put("folder/file.txt", reqBlob, { access: "public" });

  console.log(blob);
  return NextResponse.json({});
}
