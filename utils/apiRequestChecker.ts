import { formModel } from '../models';

export const isUserOwner = async (projectId: number, sessionId: number) => {
  try {
    const foundForm = await formModel.findUnique({
      where: {
        id: projectId,
      },
    });
    if (foundForm.ownerId === sessionId) return true;
  } catch (error) {
    console.log(error);
  }
  return false;
};
