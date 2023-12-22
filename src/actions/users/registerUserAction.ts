// LOGIC
// cari email / username di database

// kalau ada langsung return await / username telah digunakan
// kalau tidak ada yang menggunakan email/username tersebut create
// ke database
import { hashPassword } from "../../helper/bcrypt";
import { createUser } from "../../repositories/users/createUser";
import { findUserByEmailAndUsername } from "../../repositories/users/findUsersByEmailAndUsername";
import { Iuser } from "../../types/user.type";

export const registerUserAction = async (data: Iuser) => {
  try {
    const { email, username, password } = data;
    const users = await findUserByEmailAndUsername(email, username);

    if (users.length) {
      return {
        status: 400,
        message: "Email or Username already exsist",
      };
    }
    //hashing untuk password
    const hashedPassword = await hashPassword(password);
    data.password = hashedPassword;
    // create user di database
    await createUser(data);

    return {
      status: 200,
      message: "Register new user success",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
