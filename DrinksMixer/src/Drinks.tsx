import { AuthProvider } from "./auth/context/AuthProvider";
import { AppRouter } from "./router/AppRouter";

export const Drinks = () => {
  return (
    <AuthProvider>
   <AppRouter />
    </AuthProvider>
  )
};
