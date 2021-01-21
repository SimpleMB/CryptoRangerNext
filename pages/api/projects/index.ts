import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import nc from 'next-connect';
import { formModel } from '../../../models';
import { Input } from '../../../types';
import { isUserOwner } from '../../../utils/apiRequestChecker';

const handler = nc<NextApiRequest, NextApiResponse>();

// GET method handler
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(418).json({ error: 'Wrong API route' });
});

// POST method handler
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { formFields } = req.body;
  const session = await getSession({ req });

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
    res.json({ form: formCreated });
  } catch (error) {
    res.status(403).json({ error });
  }
});

// PUT method handler
handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  const { formFields, id, requested } = req.body;
  const session = await getSession({ req });

  if (isUserOwner(id, session.id)) {
    try {
      const formUpdated = await formModel.update({
        where: { id },
        data: {
          formFields: {
            update: formFields.map((field: Input) => {
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
              // console.log('updted field:', newField);
              return newField;
            }),
          },
          requested,
        },
      });
      res.json({ form: formUpdated });
    } catch (error) {
      console.log(error);
      res.status(403).json({ error });
    }
  }
});

// DELETE method handler
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;
  const session = await getSession({ req });

  if (await isUserOwner(id, session.id)) {
    try {
      const formDeleted = await formModel.delete({
        where: { id },
      });
      res.json({ form: formDeleted });
    } catch (error) {
      res.status(403).json({ error });
    }
  }
});
export default handler;
