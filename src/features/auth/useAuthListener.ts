import { useEffect } from 'react';
import { auth } from '@config';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from '@hooks';
import { setUserAuth } from '@features';
import { mapFirebaseUserToAppUser } from '@utils';

const useUserAuthListener = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) return;
      dispatch(setUserAuth(mapFirebaseUserToAppUser(user)));
    });

    return () => unsubscribe();
  }, [dispatch]);
};

export default useUserAuthListener;
