// import { NextApiRequest, NextApiResponse } from 'next';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
// import nc from 'next-connect';

// const handler = nc<NextApiRequest, NextApiResponse>();

// import { getSession } from 'next-auth/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (session) {
    // Signed in
    console.log('Session api: ', JSON.stringify(session, null, 2));
  } else {
    // Not Signed in
    res.status(401);
  }
  res.json({ hello: 'siema' });
  // res.end();
};
// handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
//   const session = await getSession({ req });
//   console.log('session: ', session);
// });

// export default handler;

// TODO: connect to Prisma and get user form with data
