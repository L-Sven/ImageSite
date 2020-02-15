import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoutes";
import { authRoutes, homeRoutes } from "./Index";
import { history } from "../../helpers/History";
import { userActions } from "../../redux/actions/Auth.Actions";
import { connect } from "react-redux";

const childRoutes = (routes: any, loggedIn: boolean) => {
  if (!loggedIn) return <Redirect to="/login" />;
  let views: any[] = [];
  routes.children.map(({ path, component: Component }: any, index: any) => {
    views.push(
      <PrivateRoute
        key={index}
        path={path}
        exact
        component={Component}
        loggedIn={loggedIn}
      />
    );
  });

  return views;
};

const authRoutesSetup = (routes: any) => {
  return routes.children.map(
    ({ path, component: Component }: any, index: any) => (
      <Route
        key={index}
        path={path}
        render={props => <Component {...props} />}
      />
    )
  );
};

const Routes = (props: any) => {
  return (
    <Router history={history}>
      <Switch>
        {authRoutesSetup(authRoutes)}
        {childRoutes(homeRoutes, props.loggedIn)}
        <Redirect path="/" to="/home" />
      </Switch>
    </Router>
  );
};

function mapState(state: any) {
  const auth = state.authReducer;
  return auth;
}

const actionCreator = {
  getUserInformation: userActions.getUserInformation
};

export default connect(mapState, actionCreator)(Routes);
