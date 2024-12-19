import { authOptions } from "@/app/authOptions";
import prisma from "@/prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";

const handler = NextAuth({
  providers: [],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
