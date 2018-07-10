/**
 * Created by nick on 2018/6/23.
 */
import React from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";

import { compose } from "redux";

import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { makeSelect__is_authenticated, makeSelectError, makeSelectLoading } from "containers/App/selectors";

/*
 * PrivateRoute 如果认证失败，则跳转登录页面
 *
 */

/* eslint-disable react/prefer-stateless-function */
class PublicRouteContainer extends React.PureComponent {
  render() {
    const {
      component : Component,
      ...props
    } = this.props;

    return (
      <Route
        {...props}
        render={props => {
          return <Component {...props} intl={this.props.intl}/>;
        }
        }
      />
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {};
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
)(injectIntl(PublicRouteContainer));



