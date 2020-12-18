import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import nc from 'next-connect';

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  console.log('session: ', session);
  res.json({ hello: 'siema' });
});

export default handler;

// TODO: connect to Prisma and get user form with data
