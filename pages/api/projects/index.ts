import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import nc from 'next-connect';
import { formModel } from '../../../models';

const handler = nc<NextApiRequest, NextApiResponse>();

// GET method handler
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(401).json({ error: 'Wrong API route' });
});

// POST method handler
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  const { formFields } = req.body;

  try {
    const formCreated = await formModel.create({
      data: {
        formFields: {
          create: formFields,
        },
        owner: {
          connect: { id: session.id },
        },
      },
    });
    console.log('form created in prisma', formCreated);
    res.json({ form: formCreated });
  } catch (error) {
    console.log(error);
  }
});

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  const { formFields, id } = req.body;
  // console.log('hitted put method with body: ', req.body);
  try {
    const formUpdated = await formModel.update({
      where: { id },
      data: {
        formFields: {
          update: formFields.map((field) => {
            const newField = {
              data: {},
              where: { id: field.id },
            };
            for (const prop in field) {
              // need to delete { id and formId} properties coz prisma will mark them as unknown
              if (
                // eslint-disable-next-line
                field.hasOwnProperty(prop) &&
                prop !== 'id' &&
                prop !== 'formId'
              ) {
                newField.data[prop] = field[prop];
              }
            }
            console.log('updted field:', newField);
            return newField;
          }),
        },
      },
    });
    console.log('updated form: ', formUpdated);
    res.json({ form: formUpdated });
  } catch (error) {
    console.log(error);
  }
});

export default handler;
