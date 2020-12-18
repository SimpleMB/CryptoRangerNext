import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import nc from 'next-connect';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  const user = { uid: 0, ...session.user };
  console.log('session: ', session);
  const projects = prisma.form.findMany({
    where: {
      userId: user.uid,
    },
  });
  res.json({ hello: 'siema' });
});

export default handler;

// TODO: connect to Prisma and get user form with data
