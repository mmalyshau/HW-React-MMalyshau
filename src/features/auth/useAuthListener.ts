import { useEffect } from "react";
import { auth } from "@shared/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { setUserAuth } from "@features/auth/userAuthSlice";
import { mapFirebaseUserToAppUser } from "@utils/firebaseHelper";

export const useUserAuthListener = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) return;
      dispatch(setUserAuth(mapFirebaseUserToAppUser(user)));
    });

    return () => unsubscribe();
  }, [dispatch]);
};
