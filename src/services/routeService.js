import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { TaskPage } from '../pages/TaskPage/TaskPage';
import { UserPage } from '../pages/UserPage/UserPage';

export const routeService = (auth) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {auth ? <Redirect to="/user" /> : <LoginPage />}
        </Route>
        <Route path="/user" exact>
          {auth ? <UserPage /> : <Redirect to="/" />}
        </Route>
        <Route path="/tasks/:event?/:id?" exact>
          {auth ? <TaskPage /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </BrowserRouter>
  )
}