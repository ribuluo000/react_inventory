import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";
import { makeSelect__is_authenticated, makeSelect__user_name, makeSelectError, makeSelectLoading } from "containers/App/selectors";
import reducer from "./reducer";
import saga from "./saga";
import ViewIndex from "./ViewIndex";
import { push,goBack } from "react-router-redux";
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
    console.log(this);

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

    onPress__button__back : () => {
      console.log('onPress__button__back');
      dispatch(goBack());

    },

    onPress__button__done : () => {
      console.log('onPress__button__done');

      dispatch(goBack());

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

const withReducer = injectReducer({ key : PATH.PATH__bill__add, reducer });
const withSaga = injectSaga({ key : PATH.PATH__bill__add, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyPage);
