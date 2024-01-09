import { findAllUser } from "../../repositories/users/findAllUser";

export const findAllUserAction = async () => {
  try {
    const allUser = await findAllUser();

    return {
      status: 200,
      message: "success",
      data: allUser,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
