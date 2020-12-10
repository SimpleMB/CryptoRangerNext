import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

type User = { id: number; email: string; pin?: string };
type FetchUser = (email: string, pin: string) => Promise<User>;

const registerUser: FetchUser = async (email, pin) => {
  const hashedPin = await bcrypt.hash(pin, 8);
  const regUser = await prisma.user.create({
    select: { id: true, email: true },
    data: {
      email,
      pin: hashedPin,
    },
  });
  return regUser;
};

const loginUser: FetchUser = async (email, pin) => {
  const foundUser = await prisma.user.findUnique({
    where: { email },
    select: { id: true, email: true, pin: true },
  });
  const isPinOk = await bcrypt.compare(pin, foundUser.pin);
  if (isPinOk) {
    delete foundUser.pin;
    return foundUser;
  }
  return null;
};

const logOrRegUser = async (
  email: string,
  pin: string,
  pinConfirmation: string | undefined
) => {
  if (pinConfirmation) return registerUser(email, pin);
  return loginUser(email, pin);
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
        const { email, pin, pinConfirmation } = credentials;
        const user = await logOrRegUser(email, pin, pinConfirmation);
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
