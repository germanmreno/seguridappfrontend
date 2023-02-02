import { useReducer } from "react";
import RegistroHorario from "./RegistroHorario";
import { UserContext } from "./user/UserContext";
import { authReducer } from "./user/userReducer";

const App = () => {
  const [user, dispatch] = useReducer(authReducer, {});

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      <RegistroHorario />;
    </UserContext.Provider>
  );
};

export default App;
