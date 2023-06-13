import { useState, useCallback } from "react";
import { SignIn } from "../../Components";

export const AuthPage = () => {
  const [isSignInVisible, setIsSignInVisible] = useState(true);

  const handleClose = useCallback(() => {
    setIsSignInVisible(false);
  }, []);

  return (
    <div>
       {isSignInVisible && <SignIn onClose={handleClose} children={undefined} />}
    </div>
  );
};
