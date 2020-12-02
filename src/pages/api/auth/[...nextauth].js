import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    // ...add more providers here
  ],

  secret: process.env.JWT_SECRET,

  session: {
    jwt: true,
  },

  jwt: {
    secret: process.env.JWT_SECRET,
  },

  // callbacks: {
  //   signIn: async (user, account, profile) => {
  //     return Promise.resolve(true);
  //   },
  //   session: async (session, user) => {
  //     // eslint-disable-next-line no-param-reassign
  //     session.user.uid = user.uid;
  //     return Promise.resolve(session);
  //   },

  //   jwt: async (token, user, account, profile, isNewUser) => {
  //     if (user) {
  //       // eslint-disable-next-line no-param-reassign
  //       token.uid = user.id;
  //     }
  //     return Promise.resolve(token);
  //   },
  // },

  site: process.env.SITE || 'http://localhost:3000',

  // A database is optional, but required to persist accounts in a database
  // database: process.env.MONGODB_URI,
};

export default (req, res) => NextAuth(req, res, options);
