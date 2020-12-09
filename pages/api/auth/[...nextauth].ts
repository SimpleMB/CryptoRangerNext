import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type User = { id: number; email: string; pin: string };

type FetchUser = (email: string, pin: string) => Promise<User>;

const registerUser: FetchUser = async (email, pin) => {
  // TODO: hash user pin with bcrypt
  const regUser = await prisma.user.create({
    data: {
      email,
      pin,
    },
  });
  console.log('registering user: ', regUser);
  return regUser;
};

// where to put this controller?
type GetUser = (
  isRegistration: string,
  email: string,
  pin: string
) => Promise<User>;
const getUser: GetUser = async (isRegistration, email, pin) => {
  try {
    if (isRegistration === 'true') return await registerUser(email, pin);
    if (isRegistration === 'false') {
      const foundUser = await prisma.user.findUnique({
        where: { email },
      });
      console.log('found user: ', foundUser);
      // TODO: function checking password: checkPassword = (foundUser, pin) => {}
      return foundUser;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const { isRegistration, email, password: pin } = credentials;
        const user = await getUser(isRegistration, email, pin);
        if (user) {
          return Promise.resolve(user);
        }
        return Promise.resolve(null);
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
