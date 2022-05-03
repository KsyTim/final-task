import React from "react";
import { routeService } from "../../services/routeService";
import AuthState from "../../states/AuthState/AuthState";
import '../../css/style.scss';

export const App = () => {
  const isAuth = AuthState.isAuth;
  const router = routeService(isAuth);

  return (
    <>
      {router}
    </>
  )
}