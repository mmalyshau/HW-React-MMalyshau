import { TUserAuth } from "@features/auth/userAuthSlice";
import { User } from "firebase/auth";

export const mapFirebaseUserToAppUser = (user: User): TUserAuth => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
});
