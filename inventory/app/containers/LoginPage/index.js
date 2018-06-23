/*
 * LoginPage
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
import { makeSelectError, makeSelectLoading } from "containers/App/selectors";
import { change_user_name,change_password,api_login } from "./actions";
import { makeSelect_user_name,makeSelect_password } from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import ViewIndex from "./ViewIndex";

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.PureComponent {
  /**
   * when initial state user_name is not null, submit the form to load repos
   */
  componentDidMount() {
  }

  render() {
    return (
      <ViewIndex {...this.props}/>
    );
  }
}

LoginPage.propTypes = {
  loading : PropTypes.bool,
  error : PropTypes.oneOfType([ PropTypes.object, PropTypes.bool ]),
  repos : PropTypes.oneOfType([ PropTypes.array, PropTypes.bool ]),
  onSubmitForm : PropTypes.func,
  user_name : PropTypes.string,
  onChange_user_name : PropTypes.func,
  onChange_password : PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChange_user_name : evt => dispatch(change_user_name(evt.target.value)),
    onChange_password : evt => dispatch(change_password(evt.target.value)),
    onPress_login : evt => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(api_login());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  user_name : makeSelect_user_name(),
  password : makeSelect_password(),
  loading : makeSelectLoading(),
  error : makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key : 'login', reducer });
const withSaga = injectSaga({ key : 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
