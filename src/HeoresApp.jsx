import { AuthProvider } from "./auth";
import { AppRouter } from "./routers/AppRouter";

export const HeoresApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
