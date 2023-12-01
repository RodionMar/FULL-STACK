// =========================== provider ===========================
import { Provider } from "react-redux"; 

// =========================== store ===========================
import store from "./store";

const Providers = ({ 
  children  
}: {
  children: JSX.Element;
}) => {
  return <Provider store={store}>{children}</Provider>
};

export default Providers;