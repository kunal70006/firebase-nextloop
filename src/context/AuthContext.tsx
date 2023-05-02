import { onAuthStateChanged, getAuth } from "firebase/auth";
import app from "@/firebase";
import { useContext, useEffect, useState, createContext } from "react";

const auth = getAuth(app);
const AuthContext = createContext<string | null>(null);
export const useAuthContext = () => useContext(AuthContext);

export function AuthProvider({ children }: any) {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={userEmail}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
}
