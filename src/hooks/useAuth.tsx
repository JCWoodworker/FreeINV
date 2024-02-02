import { useContext, useDebugValue } from "react"
import AuthContext from "../context/AuthProvider"

const useAuth = () => {
  const authContext = useContext(AuthContext);
  const { auth, setAuth, persist, setPersist } = authContext || {};
	useDebugValue(auth, (auth) => (auth?.user ? "Logged In" : "Logged Out"))
  return { auth, setAuth, persist, setPersist };
}

export default useAuth