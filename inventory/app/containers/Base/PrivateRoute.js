/**
 * Created by nick on 2018/6/23.
 */
import React from "react";
import { connect } from "react-redux";

import { compose } from "redux";

import { Redirect, Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { makeSelect__is_authenticated, makeSelectError, makeSelectLoading } from "containers/App/selectors";
import { router_to_login } from "router/actions";


/*
 * PrivateRoute 如果认证失败，则跳转登录页面
 *
 */

/* eslint-disable react/prefer-stateless-function */
class PrivateRouteContainer extends React.PureComponent {
  render() {
    const {
      is_authenticated,
      component : Component,
      ...props
    } = this.props

    return (
      <Route
        {...props}
        render={props =>
          is_authenticated
            ? <Component {...props} />
            : (
            <Redirect to={{
              pathname : '/login',
              state : { from : props.location }
            }}/>
          )
        }
      />
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
  };
}

const mapStateToProps = createStructuredSelector({
  is_authenticated : makeSelect__is_authenticated(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(PrivateRouteContainer);



