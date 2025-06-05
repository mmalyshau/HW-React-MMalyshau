import { TUserAuth } from "@features";
import { User } from "firebase/auth";

const mapFirebaseUserToAppUser = (user: User): TUserAuth => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
});

export default mapFirebaseUserToAppUser ;