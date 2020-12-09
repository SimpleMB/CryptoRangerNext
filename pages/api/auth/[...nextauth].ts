import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type User = { id: number; email: string; pin: string };

type FetchUser = (email: string, pin: string) => Promise<User>;

const registerUser: FetchUser = async (email, pin) => {
  // TODO: hash user pin with bcrypt: hashPassword = (password) => {}
  const regUser = await prisma.user.create({
    data: {
      email,
      pin,
    },
  });
  return regUser;
};

const loginUser: FetchUser = async (email, password) => {
  const foundUser = await prisma.user.findUnique({
    where: { email },
  });
  // TODO: function checking password: checkHashedPassword = (foundUser, pin) => {}
  return foundUser;
};

const getUser = async (isRegistration: string, email: string, pin: string) => {
  if (isRegistration === 'true') return registerUser(email, pin);
  if (isRegistration === 'false') return loginUser(email, pin);
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
        const { isRegistration, email, pin } = credentials;
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
