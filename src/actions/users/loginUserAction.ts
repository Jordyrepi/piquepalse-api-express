// LOGIC
// 1.cek dulu apakah variable usernameOrEmail itu adalah email atau bukan .
// kalauu email cari data tersebut di database
// kalau semisalnya cari datanya tidak ada? langsung me-return account not found
// kalau datanya ada selanjutnya dicek passwowrd yang  ada di database dengan password yang dimasukkan
// oleh user  (req.body)

import { comparePassword } from "../../helper/bcrypt";
import { excludeFields } from "../../helper/excludeFields";
import { findUserByEmail } from "../../repositories/users/findUserByEmail";
import { findUserByUsername } from "../../repositories/users/findUserByUsername";

// kalau semisalnya  password tidak sama dengan database? return password don't match
// kalau passwordnya sama

export const loginUserAction = async (
  usernameOrEmail: string,
  pasword: string
) => {
  try {
    let user;

    if (usernameOrEmail.includes("@")) {
      // Find user by Email
      user = await findUserByEmail(usernameOrEmail);
    } else {
      // Find user by Username
      user = await findUserByUsername(usernameOrEmail);
    }

    if (!user) {
      return {
        status: 404,
        message: "Account not faund",
      };
    }

    // Mengecek apakah akun dari user ada atau sudah terhapus
    if (user.isDeleted) {
      return {
        status: 400,
        message: "Account deleted",
      };
    }

    const isPasswordValid = await comparePassword(pasword, user.password);

    // Mengecek passworwd yang di input user sama dengan password dari database
    if (!isPasswordValid) {
      return {
        status: 400,
        message: "Invalid credentials",
      };
    }

    const dataWtihoutPassword = excludeFields(user, ["password"]);

    return {
      status: 200,
      message: "login succes",
      data: dataWtihoutPassword,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
