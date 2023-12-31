import { excludeFields } from "../../helper/excludeFields";
import { findUserById } from "../../repositories/users/findUserById";

export const keepLoginAction = async (id: number) => {
  try {
    const user = await findUserById(id);

    if (!user) {
      return {
        status: 404,
        message: `user with id: ${id} not found`,
      };
    }

    const dataWtihoutPassword = excludeFields(user, ["password"]);

    return {
      status: 200,
      message: "success",
      data: dataWtihoutPassword,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
