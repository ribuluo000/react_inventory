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

    onPress__button__add : () => {
      console.log('onPress__button__add');
      dispatch(push(`/${PATH.PATH__customer__add}`));

    },

    onPress__list_item : (item, sectionID, rowID) => {
      console.log('onPress__list_item', item, sectionID, rowID);
      let path = {
        pathname:`/${PATH.PATH__customer__detail}`,
        state:item,
      };
      dispatch(push(path));
      // dispatch(push(`/${PATH.PATH__customer__detail}`));

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

const withReducer = injectReducer({ key : PATH.PATH__customer, reducer });
const withSaga = injectSaga({ key : PATH.PATH__customer, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyPage);
