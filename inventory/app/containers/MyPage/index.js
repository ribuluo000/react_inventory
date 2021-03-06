import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";
import { makeSelectError, makeSelectLoading } from "containers/App/selectors";
import { makeSelect__is_authenticated, makeSelect__user_name, } from "containers/LoginPage/selectors";
import reducer from "./reducer";
import saga from "./saga";
import ViewIndex from "./ViewIndex";
import { push } from "react-router-redux";
import BaseComponent from "containers/Base/BaseComponent";
import PATH from "constants/PATH";

/* eslint-disable react/prefer-stateless-function */
export class MyPage extends BaseComponent {
  /**
   * when initial state user_name is not null, submit the form to load repos
   */
  componentDidMount() {
  }

  render() {
    return (
      <ViewIndex {...this.props}/>
    )
  }
}

MyPage.propTypes = {
  loading : PropTypes.bool,
  error : PropTypes.oneOfType([ PropTypes.object, PropTypes.bool ]),
  user_name : PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {

    onPress__button__base_info : () => {
      dispatch(push(`/${PATH.PATH__base_info}`));

    },

    onPress__button__bill : () => {
      dispatch(push(`/${PATH.PATH__bill}`));

    },

    onPress__button__provider : () => {
      dispatch(push(`/${PATH.PATH__provider}`));

    },

    onPress__button__customer : () => {
      dispatch(push(`/${PATH.PATH__customer}`));

    },

    onPress__button__product : () => {
      dispatch(push(`/${PATH.PATH__product}`));

    },

    onPress__button__logout : () => {
      view_util.reset2Login(dispatch);

    },

  };
}

const mapStateToProps = createStructuredSelector({
  is_authenticated : makeSelect__is_authenticated(),
  user_name : makeSelect__user_name(),
  loading : makeSelectLoading(),
  error : makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key : PATH.PATH__my, reducer });
const withSaga = injectSaga({ key : PATH.PATH__my, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyPage);
