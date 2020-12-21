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
  const projects = await prisma.form.findMany({
    where: {
      ownerId: user.uid,
    },
  });
  console.log('Projects api', projects);
  res.json({ projects });
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  const user = { uid: 0, ...session.user };
  const { formFields, id } = req.body;

  console.log('post handler body: ', req.body);
  if (!req.body.id) {
    console.log('hello');
    try {
      const formCreated = await prisma.form.create({
        data: {
          formFields: {
            create: [
              {
                fieldId: 'advantageCompetitor',
                fieldName: 'advantageCompetitor',
                label: 'Advantages over competition:',
                value: 'asdsada',
                type: 'big',
                rows: 4,
                required: false,
              },
              {
                fieldId: 'futurePromotions',
                fieldName: 'futurePromotions',
                label: 'Future promotions / sales / air drops?',
                value: '',
                type: 'big',
                rows: 4,
                required: false,
              },
            ],

            // formFields.map((field) => ({
            //   fieldId: field.fieldId,
            //   fieldName: field.fieldName,
            //   label: field.label,
            //   value: field.value,
            //   type: field.type,
            //   rows: field.rows || 1,
            //   required: field.required,
            // })),
          },
          owner: {
            connect: { id: 1 },
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
    const formUpdated = await prisma.form.update({
      where: { id: req.body.id },
      data: req.body,
    });
    res.json({ form: formUpdated });
  }
});

export default handler;

// TODO: connect to Prisma and get user form with data
