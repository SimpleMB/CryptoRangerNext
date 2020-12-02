
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import formData from './formData.json';

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get((req, res) => {
  res.statusCode = 200;
  res.json(formData);
});

export default handler;