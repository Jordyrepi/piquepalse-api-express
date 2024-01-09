import { prisma } from "../../helper/prisma";

export const findAllUser = async () => {
  try {
    const userCount = await prisma.user.count();
    const skip = Math.floor(Math.random() * userCount);
    const allUser = await prisma.user.findMany({
      take: 5,
      skip: skip,
      orderBy: { id: "desc" },
    });

    return allUser;
  } catch (error) {
    console.log();
    throw error;
  }
};
