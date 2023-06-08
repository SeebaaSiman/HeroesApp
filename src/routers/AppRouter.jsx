import { Route, Routes } from "react-router-dom";
import { HeroesRouters } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRouters, PublicRouter } from "./";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouters>
              <HeroesRouters />
            </PrivateRouters>
          }
        />
      </Routes>
    </>
  );
};
