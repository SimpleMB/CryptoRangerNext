import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import nc from 'next-connect';
import { formModel } from '../../../models';

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(401).json({ error: 'Wrong API route' });
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  const user = { uid: 0, ...session.user };
  const { formFields, id } = req.body;

  console.log('post handler body: ', req.body);
  if (!id) {
    try {
      const formCreated = await formModel.create({
        data: {
          formFields: {
            create: formFields,
          },
          owner: {
            connect: { id: user.uid },
          },
        },
      });
      console.log('form created in prisma', formCreated);
      res.json({ form: formCreated });
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('else');
    try {
      const formUpdated = await formModel.update({
        where: { id },
        data: {
          formFields: {
            update: formFields.map((field) => {
              const newField = {
                data: {},
                where: { fieldId: field.fieldId },
              };
              for (const prop in field) {
                // eslint-disable-next-line
                if (field.hasOwnProperty(prop)) {
                  newField.data[prop] = field[prop];
                }
              }
              console.log(newField);
              return newField;
            }),
          },
        },
      });
      res.json({ form: formUpdated });
    } catch (error) {
      console.log(error);
    }
  }
});

export default handler;
