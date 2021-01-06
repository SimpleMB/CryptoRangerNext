import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import bcrypt from 'bcryptjs';
import { userModel } from '../../../models';
import { User, Token, FetchUser, SessionWithId } from '../../../types';

const registerUser: FetchUser = async (email, pin) => {
  const hashedPin = await bcrypt.hash(pin, 8);
  const regUser = await userModel.create({
    select: { id: true, email: true },
    data: {
      email,
      pin: hashedPin,
    },
  });
  return regUser;
};

const loginUser: FetchUser = async (email, pin) => {
  const foundUser = await userModel.findUnique({
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

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async ({ email, pin, pinConfirmation }) => {
        let user: User;
        if (pinConfirmation) user = await registerUser(email, pin);
        if (!pinConfirmation) user = await loginUser(email, pin);
        if (user) return Promise.resolve(user);
        return Promise.resolve(null);
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    redirect: async (url: string, baseUrl: string) => {
      return Promise.resolve(baseUrl);
    },
    session: async (session: SessionWithId, user: User) => {
      const sessionWithUserId = session;
      // Adding user id from db to session object
      sessionWithUserId.id = user.uid;
      return Promise.resolve(sessionWithUserId);
    },
    jwt: async (token: Token, user: User) => {
      const tokenWithId = user ? { ...token, uid: user.id } : token;
      return Promise.resolve(tokenWithId);
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
