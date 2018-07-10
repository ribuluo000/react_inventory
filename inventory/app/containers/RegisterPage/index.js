/*
 *
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";
import { makeSelect__is_authenticated, makeSelectError, makeSelectLoading } from "containers/App/selectors";
import { router_to_login } from "router/actions";
import reducer from "./reducer";
import saga from "./saga";
import ViewIndex from "./ViewIndex";
import PATH from "constants/PATH";
import { Redirect, Route } from "react-router-dom";
import BaseComponent from "../Base/BaseComponent";

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends BaseComponent {
  /**
   * when initial state user_name is not null, submit the form to load repos
   */
  componentDidMount() {
  }

  render() {

    let {
      is_authenticated,
      ...props
    } = this.props;
    return (
      <Route
        {...props}
        render={props =>
          !is_authenticated
            ? <ViewIndex {...this.props}/>
            : (
            <Redirect to={{
              pathname : `/${PATH.PATH__my}`,
              state : { from : props.location }
            }}/>
          )
        }
      />
    )
  }
}

LoginPage.propTypes = {
  loading : PropTypes.bool,
  error : PropTypes.oneOfType([ PropTypes.object, PropTypes.bool ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    onPress_has_account_go_login : evt => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(push(`/${PATH.PATH__login}`));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  loading : makeSelectLoading(),
  error : makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key : PATH.PATH__register, reducer });
const withSaga = injectSaga({ key : PATH.PATH__register, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
