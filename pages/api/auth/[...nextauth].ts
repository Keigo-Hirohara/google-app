import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? 'hogehoge',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? 'hogehoge',
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: '/auth/signin',
  },
});
