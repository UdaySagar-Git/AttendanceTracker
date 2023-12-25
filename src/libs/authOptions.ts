import bcrypt from "bcrypt";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/libs/db";

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_ID as string,
      clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        const { email, password } = credentials;

        const user = await prisma.user.findUnique({
          where: { email: email },
        });

        if (!user || !user.password) {
          throw new Error("Email does not exist");
        }

        if (user && (await bcrypt.compare(password, user.password!))) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  // callbacks: {
  //   async afterCallback(_, __, profile) {
  //     // Use the user's email to find and include the data
  //     const user = await prisma.user.findUnique({
  //       where: { email: profile.email },
  //       include: { data: true },
  //     });

  //     // Update the user object with the included data
  //     profile.data = user?.data || null;

  //     return Promise.resolve(true);
  //   },
  // },
  callbacks: {
    async signIn({ account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },

  // callbacks: {
  //   async session({ session, user, token }) {
  //     console.log("session", session);
  //     console.log("user", user);
  //     console.log("token", token);
  //     return session;
  //   },
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     console.log("token", token);
  //     console.log("user", user);
  //     console.log("account", account);
  //     console.log("profile", profile);
  //     return token;
  //   },
  // },
};

export default authOptions;
