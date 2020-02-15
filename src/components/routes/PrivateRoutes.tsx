import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../layout/Layout";
import { userActions } from "../../redux/actions/Auth.Actions";
import { connect } from "react-redux";

export const PrivateRoute = ({
  component: Component,
  loggedIn,
  path,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={prop =>
        loggedIn ? (
          <Layout>
            <Component {...prop} />
          </Layout>
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: prop.location } }}
          />
        )
      }
    />
  );
};

function mapState(state: any) {
  const user = state.authReducer;
  return user;
}

const actionCreator = {
  getUserInfo: userActions.getUserInformation
};

export default connect(mapState, actionCreator)(PrivateRoute);
