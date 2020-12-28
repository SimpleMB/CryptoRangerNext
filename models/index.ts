import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
export const userModel = prisma.user;
export const formModel = prisma.form;
