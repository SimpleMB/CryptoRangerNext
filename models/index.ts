import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
export const { user: userModel } = prisma;
export const { form: formModel } = prisma;
