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
import { makeSelect__is_authenticated, makeSelectError, makeSelectLoading } from "containers/App/selectors";
import { api_login, change_password, change_user_name } from "./actions";
import { makeSelect__password, makeSelect__user_name } from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import ViewIndex from "./ViewIndex";
import PATH from "constants/PATH";
import { Redirect, Route } from "react-router-dom";

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.PureComponent {
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
  repos : PropTypes.oneOfType([ PropTypes.array, PropTypes.bool ]),
  user_name : PropTypes.string,
  onChange_user_name : PropTypes.func,
  onChange_password : PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChange_user_name : value => dispatch(change_user_name(value)),
    onChange_password : value => dispatch(change_password(value)),
    onPress_login : evt => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(api_login());
      // dispatch(push('/features'));
    },
    onPress_register : evt => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(push(`/${PATH.PATH__register}`));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  is_authenticated : makeSelect__is_authenticated(),
  user_name : makeSelect__user_name(),
  password : makeSelect__password(),
  loading : makeSelectLoading(),
  error : makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key : PATH.PATH__login, reducer });
const withSaga = injectSaga({ key : PATH.PATH__login, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
